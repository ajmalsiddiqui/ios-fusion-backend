const qr = require('qr-image');
const fs = require('fs');

//returns a node stream
const generateQr = function(json){
  return qr.image(JSON.stringify(json), {
    type: 'png'
  });
}

exports.generateQr = generateQr;
