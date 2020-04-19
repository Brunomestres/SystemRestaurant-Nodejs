var express = require('express');
const conn = require('../config/DB');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  conn.query(`SELECT * FROM tb_menus ORDER BY title`, 
    (err,results,fields)=>{
      if(err)
      {
        console.log(err);
      }
      res.render('index', { 
        title: 'Restaurante Saboroso!',
        menus: results 
      });
  });
});

router.get('/contacts', function(req,res,next){
  res.render('contact', { title: 'Restaurante Saboroso!' });
});
router.get('/menus', function(req,res,next){
  res.render('menu', { title: 'Restaurante Saboroso!' });
});
router.get('/reservations', function(req,res,next){
  res.render('reservation', { title: 'Restaurante Saboroso!' });
});
router.get('/services', function(req,res,next){
  res.render('services', { title: 'Restaurante Saboroso!' });
});


module.exports = router;
