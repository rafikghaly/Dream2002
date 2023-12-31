const historyModel = require('../models/history');
const connection = require('../models/connection.js');
const userModel = require('../models/User');

const showhistory = async (req,res)=>{
    console.log("ana goa showhistory conTROLLLLLLER")
    results = await userModel.getid();
    console.log(results[0].id);
    const query =historyModel.getproduct(results[0].id);
    console.log(query);
    connection.query(query, (err, data) => {
      if(err) return res.send("history");
      console.log("hhhhhhh");
      res.send("ok2");
    })
  }

module.exports = {
    showhistory
  };