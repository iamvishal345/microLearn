const userDb = require('../model/model');
const conn = require('../model/conn');
var userService = {}

userService.registerUser = (credentials) => {
    let emailId = credentials.emailId;
    let password = credentials.password;
    return userDb.checkEmailId(emailId).then(result => {
        if(!result){
            return userDb.registerUser(credentials).then(registered => {
                return registered
            })
        }
        else{
            return "UserAlreadyRegistered"
        }
    })


}
userService.loginUser = (credentials) => {
    let emailId = credentials.email;
    let password = credentials.password;
    return userDb.checkEmailId(emailId).then(result => {
        if(result == true){
            return userDb.checkPassword(emailId,password).then(resultPass => {
                resultPass.password="";
                if(resultPass == false) return "PasswordNotMatched"
                else return resultPass
            })
        }
        else{
            return "NoUserFound"
        }
        
    })
}

userService.getDashboard = (userId)=>{
    return conn.usersCollection().then(model=>{
        return model.findOne({userId:userId}).then(user=>{
            return conn.articlesCollection().then(articles=>{
                return articles.findOne({articleId:user.curArticle}).then(article=>{
                    var resObj = {
                        user:{
                            id:user.userId,
                            name:user.name,
                            email:user.emailId
                        },
                        article:{
                            id:article.articleId,
                            name:article.articleName,
                            content:article.content,
                            tags:article.tags,
                            references:article.references
                        }
                    }
                    return resObj;
                })
            })
        })
    })
}


module.exports = userService;