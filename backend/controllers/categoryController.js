const CartModel = require('../models/category');

const showcategory= (req,res) =>{
    res.render("addCategory")

}
const addCategory = (req, res) => {
    const {category} = req.body;
    console.log(category);
    console.log(category.length);
    if (!category) {
        console.log("Fill empty fields");
      } else {
        // Validation
        results = CartModel.getCategory(category);
       // console.log(results)
        if (results.length > 0) {
            console.log("Category with the same name exists");
            res.render("addCategory", {category});
        } else {
            // Insert the product into the database
            CartModel.insertCategory(category);
                res.redirect("/showproductbycategory");
              }
  
        }

};

module.exports ={
    addCategory, showcategory
};