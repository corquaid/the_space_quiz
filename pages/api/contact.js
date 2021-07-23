export default function (req, res) {
    require('dotenv').config()



    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
      secure: true,
         auth: {
              user: process.env.FROMEMAIL,
              pass: process.env.FROMPASSWORD,
           },
    });
    
    const mailData = {
        from: process.env.FROMEMAIL,
        to: process.env.TOEMAIL,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.send('success')
  }