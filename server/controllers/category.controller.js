const fakeApi = require("../utils/fakeApi")

/**
 * Gets and maps all the categories from the
 * Fake Store API.
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
exports.getCategories = async (req, res) => {
    try {
        const response = await fakeApi.get('/products/categories')

        /**
         * Maps all the cateogries and put some label on them
         * for frontend purposes.
         * 
         * @var {array} categories
         */
        const categories = (response?.data || []).map(value => {
            const name = value.split(' ').map(str => str[0].toUpperCase() + str.substring(1)).join(' ')
            return {name, value}
        })

        res.json(categories)
    } catch (e) {
        res.sendStatus(500)
    }
}