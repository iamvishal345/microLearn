// const Validator = require('../utilities/validator');
const dbModel = require('../model/model');
const dbService = {};

dbService.getUser = (userID)=>{
    // Validator.validateUserId(userId);
    return dbModel.getUser(userId).then(user=>{
        if(user !== null) return user;
        else{
            let err = new Error("User Doesn't Exist");
            err.status = 404;
            throw err;
        }
    })
}
dbService.getUsers = ()=>{
    // Validator.validateUserId(userId);
    return dbModel.getUsers().then(users=>{
        return users;
    })
}
dbService.getInterests = () => {
    return dbModel.getAllArticle().then(articles => {
        return articles;
    })
}

module.exports = dbService;