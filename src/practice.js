const knex = require('knex')
require('dotenv').config()

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

// console.log('knex and driver installed correctly');

// knexInstance
//   .select('product_id', 'name', 'price', 'category')
//   .from('amazong_products')
//   .where({ name: 'Point of view gun' })
// //   .first()
// //   .toQuery()
//   .then(result => {
//     console.log(result)
//   })

/////select statement for function/////////

// SELECT product_id, name, price, category
//   FROM amazong_products
// WHERE name LIKE '%holo%';

//////searchByProduceName//////////////////

function searchByProduceName(searchTerm) {
    knexInstance
        .select('product_id', 'name', 'price', 'category')
        .from('amazong_products')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(result => {
            console.log(result);
        })
}

// searchByProduceName('holo')



///////select statements for function///////////

// SELECT product_id, name, price, category
// FROM amazong_products
// LIMIT 10
// OFFSET 0;

//&&&&&&&&//

// SELECT product_id, name, price, category
// FROM amazong_products
// LIMIT 10
// OFFSET 30;

///////getProductsWithImage///////////

function paginateProducts(page) {
    const productsPerPage = 10
    const offset = productsPerPage * (page - 1)
    knexInstance
        .select('product_id', 'name', 'price', 'category')
        .from('amazong_products')
        .limit(productsPerPage)
        .offset(offset)
        .then(result => {
            console.log(result)
        })
}

//   paginateProducts(2)

///////select statement for function///////////

// SELECT product_id, name, price, category, image
// FROM amazong_products
// WHERE image IS NOT NULL;

///////getProductsWithImage///////////

function getProductsWithImages() {
    knexInstance
        .select('product_id', 'name', 'price', 'category', 'image')
        .from('amazong_products')
        .whereNotNull('image')
        .then(result => {
            console.log(result)
        })
}

//   getProductsWithImages()

///////select statement for function below///////////

// SELECT video_name, region, count(date_viewed) AS views
// FROM whopipe_video_views
//   WHERE date_viewed > (now() - '30 days'::INTERVAL)
// GROUP BY video_name, region
// ORDER BY region ASC, views DESC;

/////////////mostPopularVideosForDays////////////////

function mostPopularVideosForDays(days) {
    knexInstance
        .select('video_name', 'region')
        .count('date_viewed AS views')
        .where(
            'date_viewed',
            '>',
            knexInstance.raw(`now() - '?? days'::INTERVAL`, days)
        )
        .from('whopipe_video_views')
        .groupBy('video_name', 'region')
        .orderBy([
            { column: 'region', order: 'ASC' },
            { column: 'views', order: 'DESC' },
        ])
        .then(result => {
            console.log(result)
        })
}

mostPopularVideosForDays(30)