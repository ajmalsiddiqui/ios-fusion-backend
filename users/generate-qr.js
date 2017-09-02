const qr = require('qr-image');
const fs = require('fs');

//returns a node stream
const generateQr = function(user){
  return qr.image(JSON.stringify(user), {
    type: 'png'
  });
}

exports.generateQr = generateQr;
