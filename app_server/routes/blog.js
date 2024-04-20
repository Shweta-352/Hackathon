const express = require('express')
const db = require('../db')
const utils = require('../utils')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const config = require('../config')

const router = express.Router()

// add blog
router.post('/add', (request, response) => {
    console.log('inside add')
   // const userid=1
    const {title, contents, categoryId} = request.body
    const statement = `insert into blog (title, contents, user_id, category_id) values (?, ?, ?, ?) ;`
    db.pool.execute(
        
      statement,
      [title, contents,request.userId, categoryId],
      (error, result) => {
        response.send(utils.createResult(error, result))
      }
      
    )
  })



module.exports = router