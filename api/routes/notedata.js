const TodoNoteData = require('../models/todo-notedata');
const db = require('../models/database.js');
var express = require('express');
var router = express.Router();

var todonotedata = new TodoNoteData();

router.get('/',(req,res)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset="utf-8"');
  todonotedata.getAll((err, datas)=>{
    if(err) {
      console.error(err);
      return;
    }

    res.status(200).json(datas);
  });
});

router.post('/del',(req, res)=>{
  res.header('Access-Control-Allow-Origin', '*');
  console.log(req.body.userid);
  todonotedata.deleteone(req.body.noteid,(err)=>{
    if(err){
      console.log(err);
      return ;
    }else{
      res.status(200).send('Delete OK');
    }
  })

  todonotedata.getAll((err, datas) => {
    if(err) {
      console.err(err);
      return ;
    }

    res.status(200).json(datas);
  })
})

module.exports =router;
