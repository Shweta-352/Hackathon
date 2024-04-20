const express = require('express')
const db = require('../db')
const utils = require('../utils')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const config = require('../config')

const router  = express.Router()

router.post('/register',(request,response) => {
    const {user_id,Name,email,password,phoneNumber} = request.body

    const statement = `insert into user(user_id,Name,email,password,PhoneNumber) values(?,?,?,?,?);`

    const encryptedPassword = String(crypto.SHA256(password))
    db.pool.execute(statement,[user_id,Name,email,encryptedPassword,phoneNumber],(error,result) => {
        response.send(utils.createResult(error,result))
    })
})

router.post('/Loginpage',(request,response) => {
    const {email,password} = request.body
    const statement = `select user_id,Name,phoneNumber from user where email = ? and password=?`

    const encryptedPassword= string(crypto.SHA256(password))
    db.pool.execute(statement,[email,encryptedPassword],(error,users) => {
        if(error){
            response.send(utils.createErrorResult(error))
        }
        else if(users.length==0){
            response.send(utils.createErrorResult('user does not exist'))
        }
        else{
            const payload = {id:users.id}
            
            const token = jwt.sign(payload,config.secret)
            const userData = {
                token, name: `${user['firstName']} ${user['lastName']}`,
            }
            response.send(utils.createSuccessResult(userData))
        }

    })
    module.exports = router
})