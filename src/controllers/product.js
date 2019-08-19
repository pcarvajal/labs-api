import Axios from 'axios'

const config = require('../config/config')
const client = require('../database')


const getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

const products = (skus) => {
    return new Promise(async (resolve, rejects) => {
        let data = await getProducts(skus)
        resolve(data)
    })
}

const product = (sku) => {
    return new Promise(async (resolve, rejects) => {

        client.get(sku, async function (error, result) {
            if (error || !result) {
                console.log("Se retorna desde servicio")
                let data = await getDetailProduct(sku)
                client.setex(sku, 60, JSON.stringify(data.data.data))
                resolve(data);
            } else {
                console.log("Se retorna desde redis")
                resolve({ status: "success", data: { data: JSON.parse(result) } })
            }
        });
    })
}

const getProducts = async (skus) => {

    const number = getRandomArbitrary(0, 10)
    console.log("Numero generado para el error : " + number);

    if (number === 2) {
        getProducts(skus);
        console.log("Error detectado, reintentando ...")
    }

    try {
        const data = await Axios.get(`${config.api}${config.endpoints.products}${skus.join(",")}`)
        return {
            data: data,
            status: "success"
        }
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

const getDetailProduct = async (sku) => {

    const number = getRandomArbitrary(0, 10)
    console.log("Numero generado para el error : " + number)

    if (number === 2) {
        getProducts(sku);
        console.log("Error detectado, reintentando ...")
    }

    try {
        const data = await Axios.get(`${config.api}${config.endpoints.product}${sku}`)
        return {
            data: data,
            status: "success"
        }
    } catch (error) {
        return {
            message: error.message,
            status: "error"
        }
    }
}

module.exports = {products, product}