const express = require('express')
const cors = require('cors')

const categoryRoutes = require('./routes/category.route')
const enquiryRoutes = require('./routes/enquiry.route')
const productRoutes = require('./routes/product.route')

const app = express()
const PORT = 3001

app.use(cors())
app.use('/enquiries', enquiryRoutes)
app.use('/products/categories', categoryRoutes)
app.use('/products', productRoutes)

app.listen(PORT, () => {
    console.log(`SERVER RUNNING AT PORT ${PORT}`)
})