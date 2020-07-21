const knex = require('knex')
require('dotenv').config()

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})


// function getItemsWithText(searchTerm) {
//     knexInstance
//         .select('*')
//         .from('shopping_list')
//         .where('item_name', 'ILIKE', `%${searchTerm}%`)
//         .then(result => {
//             console.log(result)
//         })
// }

//getItemsWithText('Not Dogs');

// function getAllItemsPaginated(pageNumber) {
//     const productsPerPage = 6
//     const offset = productsPerPage * (pageNumber - 1)
//     knexInstance
//         .select('*')
//         .from('shopping_list')
//         .limit(productsPerPage)
//         .offset(offset)
//         .then(result => {
//             console.log(result)
//         })
// }

// getAllItemsPaginated(3);

// function getAllItemsAfterDate(daysAgo) {
//     knexInstance
//         .select('*')
//         .where(
//             'date_added',
//             '<',
//             knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
//         )
//         .from('shopping_list')
//         .then(result => {
//             console.log(result)
//         })
// }

// getAllItemsAfterDate(4);

function getTotalOfCategory() {
    knexInstance
        .select('item_category').sum('item_price')
        .from('shopping_list')
        .groupBy('item_category')
        .then(result => {
            console.log(result)
            process.exit()
        })
}

getTotalOfCategory()
console.log("exit")