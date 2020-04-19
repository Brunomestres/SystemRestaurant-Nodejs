var express = require('express');
var conn = require('../config/DB');
var router = express.Router();




router.get('/', function(req, res, next) {
  conn.query('SELECT * FROM tb_users ORDER BY name',(err,results,fields)=>{
    if(err)
    {
      res.send(err);
    }else{
      res.send(results);
    }
  });
});

module.exports = router;
