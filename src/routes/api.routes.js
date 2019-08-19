import express from 'express'

const product = require('../controllers/product')
const router = express.Router()
const config = require('../config/config')

router.get('/', async (req, resp) => {
    try {
        let data = await product.products(config.skus)
        resp.json(data.data.data)
      } catch (error) {
        console.log("Error : " + error.message)
      }
})
router.get('/product/:id', async (req, resp) => {
    try {
      const data = await product.product(req.params.id)
      resp.json(data.data.data)
    } catch (error) {
      console.log("Error : " + error.message)
    }
  })

module.exports = router