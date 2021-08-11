const express = require('express')
const app = new express()
const port = 3000;

// var MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
//   if (err) throw err

//   db.collection('mammals').find().toArray(function (err, result) {
//     if (err) throw err

//     console.log(result)
//   })
// })

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/abc', (req, res) => {
  res.send('abc')
})

app.listen(port, () => {
  console.log('监听成功')
})