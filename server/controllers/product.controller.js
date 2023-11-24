const querystring = require('node:querystring')
const fakeApi = require('../utils/fakeApi')

/**
 * Let's assume that these products are selected as top rated
 * products from the ADMIN dashboard. Used product IDs to mark them
 * as top rated.
 * 
 * @var {array}
 */
const TOP_RATED = [1, 3, 5, 6, 12]

/**
 * Actually, these functions are very straightforward, you get
 * these products and all. What I just want to say is that
 * comments are very important as they serve as documentation
 * for future developers.
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
exports.getProducts = async (req, res) => {
    try {
        const {topRated, keyword, category, ...query} = req.query
        const qs = querystring.stringify(query)
        const response = await fakeApi.get(`/products${qs}`)

        /**
         * Added an additional property which is called "top"
         * and is used to identify top rated products.
         */
        let products = (response?.data || []).map(product => ({
            ...product, top: TOP_RATED.includes(product.id)
        }))

        /**
         * Filtering should be done on the db-level as much as possible
         * but this is an exception as the Fake Store APi doesn't support 
         * Top Rated and keyword filters so I made my own.
         */
        if (topRated !== undefined) {
            products = products.filter(product => product.top == topRated)
        }

        if (keyword !== undefined) {
            const regex = new RegExp(keyword, 'i')
            products = products.filter(product => regex.test(product.title))
        }

        if (category !== undefined) {
            products = products.filter(product => product.category == category)
        }

        res.json(products)
    } catch (err) {
        res.sendStatus(500)
    }
}

/**
 * They say a good code explains itself to the developers
 * who looks at it and comments are not much needed, well... 
 * there's nothing to lose ¯\_(ツ)_/¯,  INSERT THE COMMENTS!!! :)
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
exports.getProduct = async (req, res) => {
    try {
        const response = await fakeApi.get(`/products/${req.params.id}`)
        const product = {...(response?.data || {}), top: TOP_RATED.includes(response?.data?.id)}
        res.json(product)
    } catch (err) {
        res.sendStatus(500)
    }
}