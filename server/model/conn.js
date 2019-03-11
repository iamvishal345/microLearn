const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
mongoose.set("useCreateIndex",true);
require('dotenv').config();
let url = 'mongodb://127.0.0.1:27017/Micro';
const conn = {}
const userSchema = mongoose.Schema({
    userId:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
        // match:[/^[\d-()]{8-15}$/,'Please Enter Valid Format']
    },
    password:{
        type:String,
        required:true
    },
    interests:{
        type:Array,
        default:[]
    },
    curArticle:{
        type:String
    }

},{collection: 'Users', timestamps: true })

const articleSchema=mongoose.Schema({
    articleId:{
        type:String,
        required:true,
        unique:true
    },
    articleName:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    tags:{
        type:Array,
        required:true,
        default: []
    },
    references:{
        type:Array,
        default:[]
    },
    readBy:{
        type:Array,
        default:[]
    }
},{collection: 'Articles', timestamps: true })

const interestSchema = mongoose.Schema({
    interestId:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    related:{
        type:Array,
        required:true
    }
},{collection: 'Interests', timestamps: true})

const artUsrSchema = mongoose.Schema({
    articleId:{
        type:Number,
        required:true,
    },
    userId:{
        type:Number,
        required:true
    }
},{collection: 'ArtUsr', timestamps: true})

conn.articlesCollection = ()=>{
    return mongoose.connect(url, { useNewUrlParser: true })
        .then(db=>{return db.model("Articles",articleSchema)})
        .catch(err=>next(err))
}

conn.usersCollection = ()=>{
    return mongoose.connect(url, { useNewUrlParser: true })
        .then(db=>{return db.model("Users",userSchema)})
        .catch(err=>next(err))
}

conn.interestsCollection = ()=>{
    return mongoose.connect(url,{useNewUrlParser:true})
        .then(db=>{return db.model("Interests",interestSchema)})
        .catch(err=>next(err))
}

conn.artUsrCollection = ()=>{
    return mongoose.connect(url,{useNewUrlParser:true})
        .then(db=>{return db.model("ArtUsr",artUsrSchema)})
        .catch(err=>next(err))
}

module.exports = conn;