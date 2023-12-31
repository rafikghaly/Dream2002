const CartModel = require('../models/category');

const addCategory = async (req, res) => {
    const {name} = req.body;
    // Validation
    results = await CartModel.getCategory(name);
    if (results == null) {
        CartModel.insertCategory(name);
        res.send("Category Added")
    } else {
        res.send("Category with the same name exists")
    }
};

module.exports ={
    addCategory, showcategory
};