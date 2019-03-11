class User{
    constructor(obj){
        this.userId = obj.userId;
        this.name = obj.fullName;
        this.emailId = obj.regEmail;
        this.phone = obj.regPhone;
        this.password = obj.regPassword;
        this.interests = obj.interests;
        this.curArticle = obj.curArticle;
    }
}
module.exports = User