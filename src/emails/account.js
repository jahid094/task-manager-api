const sgMail = require('@sendgrid/mail')
//const sendgridAPIKey ='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'
//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
//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

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'jahid.aust39@gmail.com' ,
//     from: 'jahid.aust39@gmail.com' ,
//     subject: 'This is my first creation!' ,
//     text: 'I hope this one actually get to you.'
// })

const sendWelcomeEmail =( email , name) => {
    sgMail.send({
        to: email ,
        from: 'jahid.aust39@gmail.com' ,
        subject: 'Thanks for joining in !' ,
        text: 'Welcome to the app , ${name} . Let me know you get along with the app.' 
    })
}

const sendCancelationEmail =( email , name) => {
    sgMail.send({
        to: email ,
        from: 'jahid.aust39@gmail.com' ,
        subject: 'Sorry to see you go!' ,
        text: 'Goodbye , ${name} . I hope to see you back sometime soon.' 
    })
}

module.exports = {
    sendWelcomeEmail ,
    sendCancelationEmail
}

