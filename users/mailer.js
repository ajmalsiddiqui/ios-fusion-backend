const nodeMailer = require('nodemailer');
const fs = require('fs');

const config = require('../config');
const User = require('./user');
const generateQr = require('../generate-qr');

const sendMail = function(userEmail, callback){

  fs.access('../secrets.js', err => {
    const secrets = err ? 0 : 1;

    const transport = nodeMailer.createTransport({
      service: config.mailService,
      auth: {
        user: secrets ? require('../secrets').mailId : process.env.MAIL_ID,
        pass: secrets ? require('../secrets').mailPass : process.env.MAIL_PASS
      }
    });

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
          filename: config.attachment_name,
          content: generateQr.generateQr(user)
        }
      ];

      transport.sendMail(mailOptions, (err, info) => {
        if(err) return callback(err);
        callback(null, info);
      });
    });
  });
}

exports.sendMail = sendMail;
