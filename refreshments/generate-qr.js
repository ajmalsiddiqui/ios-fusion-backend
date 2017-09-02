const qr = require('qr-image');
const fs = require('fs');

//returns a node stream
const generateQr = function(refreshment){
  return qr.image(JSON.stringify(refreshment), {
    type: 'png'
  });
}

exports.generateQr = generateQr;
