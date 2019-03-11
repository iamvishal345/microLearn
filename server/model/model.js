const conn = require('./conn');
const crypto = require('crypto');
const dbModel = {}
dbModel.getUsers = ()=>{
    return conn.usersCollection().then(userModel=>{
        return userModel.find().then(users=>{
            return users;
        })
    })
}

dbModel.getUser = (userId)=>{
    return conn.usersCollection().then(userModel=>{
        return userModel.findOne({userId:userId}).then(user=>{
            if(user!=null)return user;
            else{
                let err=new Error("User Not Found !");
                err.status = 404;
                throw err;
            }
        })
    })
}

dbModel.isArtcileSent= (articleId,userId)=>{
    return conn.usersCollection().then(userModel=>{
        return userModel.find({$and:[{userId:userId},{$nin:{read:articleId}}]}).then(users=>{
            return users;
        })
    })
}

dbModel.getArticle = (userId,interests)=>{
    return conn.articlesCollection().then(articleModel=>{
        return articleModel.findOne({$and:[{readBy:{$nin:[userId]}},{tags:{$in:interests}}]}).then(article=>{
            if(article!=null) return article;
            else return false;
        })
    })
}
dbModel.setUserArticle = (userId,articleId)=>{
    return conn.usersCollection().then(model=>{
        return model.updateOne({userId:userId},{$set:{curArticle:articleId}}).then(isSet=>{
            if(isSet.nModified>0) {
                return conn.articlesCollection().then(artColl=>{
                    return artColl.updateOne({articleId:articleId},{$push:{readBy:userId}}).then(isAdded=>{
                        if(isAdded.nModified>0) return true;
                        else return false;
                    })
                })
            }
            else false;
        })
    })
}
dbModel.getAllArticle = ()=>{
    return conn.articlesCollection().then(articleModel=>{
        return articleModel.find().then(article=>{
            if(article.length>0) return article;
            else return false;
        })
    })
}

//----------------------------------------


dbModel.generateId = () => {
    return conn.usersCollection().then((model) => {
        return model.distinct("userId").then((ids) => {
            if(ids.length===0){
                userId=0;
            }else{
                userId = Math.max(...ids);
            }
            return userId + 1;
        })
    })
}
dbModel.checkEmailId = (emailId) => {
    return conn.usersCollection().then(model => {
        return model.findOne({emailId:emailId}).then(data => {
            if(data) return true
            else return false
        })
    })
}
dbModel.registerUser = (userObj) => {
    console.log(userObj);
    return conn.usersCollection().then(model => {
        this.salt = crypto.randomBytes(16).toString('hex');
        this.hash = crypto.pbkdf2Sync(userObj.password, this.salt,1000, 64, `sha512`).toString(`hex`); 
        return dbModel.generateId().then(userId => {
            userObj.userId = userId;
            userObj.password = this.salt+'.'+this.hash;
            return model.create(userObj).then(insertedData => {
                if(insertedData) return true
                else return false
            })
        })
    })
}

// dbModel.passwordEncrypt = password => {
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt,1000, 64, `sha512`).toString(`hex`); 
//     return this.hash
// }

dbModel.checkPassword = (emailId,password) => {
    return conn.usersCollection().then(model => {
        return model.findOne({emailId:emailId}).then(data => {
            if(data){
                let pwd = data.password.split(".");
                var salt = pwd[0];
                var hash = crypto.pbkdf2Sync(password,salt, 1000, 64, `sha512`).toString(`hex`); 
                if (pwd[1] === hash) {
                    return data
                }
                else return false
            }
        })
    })
}

module.exports = dbModel;