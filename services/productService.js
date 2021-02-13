const Cube = require('../models/Cube');
const uniqid = require('uniqid');

const fs = require('fs');
let productsData = require('../config/products.json');

function create(data) {
    
    let cube = new Cube(
        uniqid(), 
        data.name, 
        data.description, 
        data.imageUrl, 
        data.difficultyLevel
    );

    productsData.push(cube);
    fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productsData), (err) => {
        if(err){
            console.log(err);
            return;
        }
    })
}

function getAll() {
    return productsData;
}

module.exports = {
    create,
    getAll
}