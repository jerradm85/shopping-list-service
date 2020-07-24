const ShoppingListService = require('../src/shopping-list-service')
require('dotenv').config()
const knex = require('knex')
const { expect } = require('chai')


describe('shopping-list-service object', function () {
    let db
    let testItems = [
        {
            id: 1,
            item_name: "first",
            item_price: "25.00",
            item_category: "Main",
            item_checked: true,
            date_added: new Date('2029-01-22T16:28:32.615Z')
        },
        {
            id: 2,
            item_name: "second",
            item_price: "25.00",
            item_category: "Main",
            item_checked: true,
            date_added: new Date('2029-01-22T16:28:32.615Z')
        },
        {
            id: 3,
            item_name: "third",
            item_price: "25.00",
            item_category: "Main",
            item_checked: true,
            date_added: new Date('2029-01-22T16:28:32.615Z')
        }
    ]

    before(() => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
    })

    before(() => db('shopping_list').truncate())

    afterEach(() => db('shopping_list').truncate())

    after(() => db.destroy())


    context('given shopping_list has data', function () {
        beforeEach(() => {
            return db
                .into('shopping_list')
                .insert(testItems)
        })
        it('getAll() returns all items on list', () => {
            return ShoppingListService.getAll(db)
                .then(actual => {
                    expect(actual).to.eql(testItems)
                })
        })

        it('getById() returns an item with specified id', () => {
            const id = 3
            const testedItem = testItems[id - 1]
            return ShoppingListService.getById(db, id)
                .then(actual => {
                    expect(actual).to.eql({
                        id: id,
                        item_name: testedItem.item_name,
                        item_price: testedItem.item_price,
                        item_category: testedItem.item_category,
                        item_checked: testedItem.item_checked,
                        date_added: testedItem.date_added
                    })
                })
        })

        it(`delete() removes specified item from table`, () => {
            const itemId = 3
            return ShoppingListService.delete(db, articleId)
                .then(() => ShoppingListService.getAll(db))
                .then(allItems => {
                    const expected = testItems.filter(item => item.id !== itemId)
                    expect(allItems).to.eql(expected)
                })
        })

        it(`update() updates an item from the table`, () => {
            const idToUpdate = 3
            const newData = {
                id: 3,
                item_name: "third",
                item_price: "25.00",
                item_category: "Main",
                item_checked: true,
                date_added: new Date('2029-01-22T16:28:32.615Z')
            }
            return ShoppingListService.update(db, idToUpdate, newData)
                .then(() => ShoppingListService.getById(db, idToUpdate))
                .then(actual => {
                    expect(actual).to.eql({
                        id: idToUpdate,
                        ...newData,
                    })
                })
        })
    })

    context('given shopping_list has no data', () => {
        it('getAll() returns an empty array', () => {
            return ShoppingListService.getAll(db)
                .then(actual => {
                    expect(actual).to.eql([])
                })
        })

        it('addNew() inserts new item and gives the item an id', () => {
            const newItem = {
                id: 2,
                item_name: "second",
                item_price: "25.00",
                item_category: "Main",
                item_checked: true,
                date_added: new Date('2029-01-22T16:28:32.615Z')
            }
            return ShoppingListService.addNew(db, newItem)
                .then(actual => {
                    expect(actual).to.eql({
                        id: id,
                        item_name: testedItem.item_name,
                        item_price: testedItem.item_price,
                        item_category: testedItem.item_category,
                        item_checked: testedItem.item_checked,
                        date_added: testedItem.date_added
                    })
                })
        })
    })
})