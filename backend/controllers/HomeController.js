const express = require('express');
const PromotionsModel = require('../models/promotions');

const Home = async (req, res) => {
 const prom = await PromotionsModel.getHome();

 console.log(prom);
//  JSON.stringify();
res.send(JSON.stringify(prom));
//  res.JSON(prom);
}

module.exports =  {
    Home
  };
   