const express = require('express');
const router = express.Router();
const mockProducts = require('../mocks/products');

const productArrToObj = (arrayOfProducts) => {
    //create an accumulator object
    const accumulator = {};
    //for Each product in arrayOfProducts
    arrayOfProducts.forEach(product => {
        const id = product._id;
        const copy = {...product}
        delete copy._id; 
        accumulator[id] = copy;
    });
        //grab the id
        //delete the _id internal to the object
        //set the id value in the accumulator object equal to product
    //return accumulator
    return accumulator;
}

router.get('/products', (req, res) => {
    res.status(200).json({
        products: productArrToObj(mockProducts) 
    })
});

module.exports = router; //like export default

