var express = require('express'),
    router = express.Router();


    router.get('/',function(req,res){
              res.end('A am work');
    });


module.exports = router;