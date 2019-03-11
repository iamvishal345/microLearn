const express = require('express');
const router = express.Router();
const userService = require('../service/userService')
const jwt = require('jsonwebtoken')
const create = require('../model/dbSetup');
require('dotenv').config();
const User = require('../model/user');
const dbService = require('../service/service')

router.get('/setupDb', (req, res, next) => {
    create.setupDb()
        .then((data) => { res.send(data) })
        .catch((err) => { next(err) })
})

router.get('/',(req,res,next) => {
    console.log("home Page");
    res.send("aa gya response");
})


router.get('/users',(req,res,next) => {
    return dbService.getUsers()
        .then(users=>res.json(users))
        .catch(err=>next(err))
})

router.get('/interests',(req,res,next) => {
    return dbService.getInterests()
        .then(interest=>res.json(interest))
        .catch(err=>next(err))
})

router.post('/register',(req,res,next) => {
    var credentials = new User(req.body);
    userService.registerUser(credentials).then(result => {
        if(result===true){
            res.status(200);
            res.json({"message":"New User Registered"});
        }
        else{
            res.status(401);
            console.log(result);
            res.json({"message":result});
        }
    })
})

router.post('/login',(req,res,next) => {
    var credentials = req.body;
    userService.loginUser(credentials).then(result => {
        if(result === "NoUserFound"){
            res.status(401);
            res.json({"message":"Email id not found"})
        }
        else if(result === "PasswordNotMatched"){
            res.status(401);
            res.json({"message":"Password Incorrect"})
        }
        else{
            res.status(200);
            res.json({obj:result,token:jwt.sign({id:result.userId},process.env.SecretKey)});
        }
    })
})

   router.get('/dashboard',(req,res,next) => {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.secretKey, function(err, user) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      return userService.getDashboard(user.id)
        .then(resObj=>res.json(resObj))
        .catch(err=>res.json(err))
    });
   })

module.exports = router;