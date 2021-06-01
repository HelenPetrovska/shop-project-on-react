const products = [
    {
        id:1,
        name:"iPhone X",
        description:"This is iphone X",
        type:"phone",
        cepacity:64,
        price:1000,
        fullDescription:"<div class='red'>Description</div>",
        image:"./images/latest1.jpg"
    },
    {
        id:2,
        name:"iPhone XS",
        description:"This is iphone XS",
        type:"phone",
        cepacity:256,
        price:1500,
    },
    {
        id:3,
        name:"iPhone 12",
        description:"This is iphone 12",
        type:"phone",
        cepacity:128,
        price:2000,
    },
    {
        id:4,
        name:"iPhone 8 plus",
        description:"This is iphone 8 plus",
        type:"phone",
        cepacity:64,
        price:1000,
    },
]

export const getProductsObject = array => array.reduce((obj,product) => ({
    ...obj,
    [product.id]:product
}),{})

export default products