const mailer = require('nodemailer')

const transport = mailer.createTransport({

    service: 'gmail',
    auth:{
        user:'taoufik.tababi@sesame.com.tn',
        pass:'09980721'
    }
})

const mailerOptions = {

    from:'taoufik.tababi@sesame.com.tn',
    to:'tabbabitawfic@gmail.com',
    subject:'nimport quoi',
    text:'nimport qoui mon pote'
}
transport.sendMail(mailerOptions,(err,rso) => {

    if(err) console.log('errror',err)
    else console.log('succes',rso.response)
})