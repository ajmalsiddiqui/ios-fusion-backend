const nodeMailer = require('nodemailer');

const config = require('../config');
const User = require('./user');
const generateQr = require('./generate-qr');

const transport = nodeMailer.createTransport({
  service: config.mailService,
  auth: {
    user: config.mailId,
    pass: config.mailPass
  }
});

const sendMail = function(userEmail, callback){

  let mailOptions = {
    from: config.from,
    subject: config.subject,
    text: config.text,
    to: userEmail
  };

  User.findOne({email: userEmail}, (err, user) => {
    if(err) return callback(err);

    //returns a stream with png of qr code
    mailOptions.attachments = [
      {
        filename: 'ticket.png',
        content: generateQr.generateQr(user)
      }
    ];

    transport.sendMail(mailOptions, (err, info) => {
      if(err) return callback(err);
      callback(null, info);
    });
  });
}

exports.sendMail = sendMail;
