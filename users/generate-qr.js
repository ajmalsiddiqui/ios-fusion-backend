const qr = require('qr-image');

const fs = require('fs');

//returns a node stream
const generateQr = function(user){
  return qr.image(JSON.stringify(user), {
    type: 'png'
  });
}

/*generateQr(
  {
	"email": "ajmalsiddiqui21@gmail.com",
	"name": "Ajmal",
	"regno": "16BCE0216",
	"mobile": "7530005569"
}
).pipe(fs.createWriteStream('ticket.png'));*/

exports.generateQr = generateQr;
