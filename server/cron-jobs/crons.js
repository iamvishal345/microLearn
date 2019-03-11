const crons = require('node-cron');
const dbModel = require('../model/model');
const nodemailer = require('nodemailer');


crons.schedule("*/5 * * * * *",()=>{
    return dbModel.getUsers().then(users=>{
        for(let i=0;i<users.length;i++){
            userId = users[i].userId;
            interests = users[i].interests;
            setter(userId,interests);
        }
    })
})

let setter=(userId,interests)=>{
    return dbModel.getArticle(userId,interests).then(article=>{
        if(!article){
            return 0;
        }
        return dbModel.setUserArticle(userId,article.articleId).then(isSet=>{
            if(isSet) console.log(`Article ${article.articleId} set for User ${userId}`);
            else console.log("Already Set or Sent");
        })
    })
}
let sendArticle = (user,article)=>{
    let to = user.emailId;
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account');
            return process.exit(1);
        }
    
        console.log('Credentials obtained, sending message...');
        let transporter = nodemailer.createTransport(
            {
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass
                },
                logger: true,
                debug: true // include SMTP traffic in the logs
            },
            {
                from: 'SmartUp <no-reply@smartup.com>',
                headers: {
                    'X-Laziness-level': 1000 // Email header
                }
            }
        );
        let message = {
            // Comma separated list of recipients
            to: `${user.name} <${user.emailId}>`,
            subject: `Daily Smart Up Artcile: ${article.name}`,    
            html:``,    
            list: {
                // List-Help: <mailto:admin@example.com?subject=help>
                help: 'info@smartup.com?subject=help',
    
                // List-Unsubscribe: <http://example.com> (Comment)
                unsubscribe: [
                    {
                        url: `http://localhost:3000/unsubscribe/${user.userId}`,
                        comment: 'If you wish to unsubscribe click here'
                    },
                    'unsubscribe@smartup.com'
                ],

            }
        };
    
        transporter.sendMail(message, (error, info) => {
            if (error) {
                console.log('Error occurred');
                console.log(error.message);
                return process.exit(1);
            }
    
            console.log('Message sent successfully!');
            console.log(nodemailer.getTestMessageUrl(info));
    
            // only needed when using pooled connections
            transporter.close();
            return true;
        });
    });
}