const express = require('express')
const db = require('../db')
const utils = require('../utils')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const config = require('../config')


const router = express.Router()

router.post('/register', (request, response) => {
    const {Name, email, password, phone } = request.body
    const statement = `insert into user (Name, email, password, phoneNumber) values (?, ?, ?, ?);`
    const encryptedPassword = String(crypto.SHA256(password))
    db.pool.execute(
      statement,
      [Name, email, encryptedPassword, phone],
      (error, result) => {
        response.send(utils.createResult(error, result))
      }
    )
  })

  router.post('/login', (request, response) => {
    const { email, password } = request.body
    const statement = `select user_id, Name, phoneNumber, isDeleted from user where email = ? and password = ?`
    const encryptedPassword = String(crypto.SHA256(password))
    db.pool.query(statement, [email, encryptedPassword], (error, users) => {
      if (error) {
        response.send(utils.createErrorResult(error))
      } else {
        if (users.length == 0) {
          response.send(utils.createErrorResult('user does not exist'))
        } else {
          const user = users[0]
          if (user.isDeleted) {
            response.send(utils.createErrorResult('your account is closed'))
          } else {
            // create the payload
            const payload = { id: user.id }
            const token = jwt.sign(payload, config.secret)
            const userData = {
              token,
              name: `${user['Name']}`,
            }
            response.send(utils.createSuccessResult(userData))
          }
        }
      }
    })
  })

module.exports = router