var express = require('express');
var router = express.Router();
var Data = require('../models/dataSchema');

router.post('/create', (req, res, next) => {
  var newData = new Data({
    name: req.body.name,
    designation: req.body.designation
  });

  newData.save()
    .then(data => {
      res.status(200).json({ msg: data });
    })
    .catch(err => {
      res.status(500).json({ errmsg: err });
    });
});

router.get('/read', (req, res, next) => {
  Data.find({})
    .then(datas => {
      res.status(200).json({ msg: datas });
    })
    .catch(err => {
      res.status(500).json({ errmsg: err });
    });
});

router.put('/update', (req, res, next) => {
  Data.findById(req.body._id)
    .then(data => {
      data.name = req.body.name;
      data.designation = req.body.designation;
      return data.save();
    })
    .then(data => {
      res.status(200).json({ msg: data });
    })
    .catch(err => {
      res.status(500).json({ errmsg: err });
    });
});

router.delete('/delete/:id', (req, res, next) => {
  Data.findOneAndRemove({ _id: req.params.id })
    .then(data => {
      res.status(200).json({ msg: data });
    })
    .catch(err => {
      res.status(500).json({ errmsg: err });
    });
});

module.exports = router;
