let config = {};

config.mailService = 'Gmail';

config.from = 'Team iOS Fusion';
config.subject = 'Ticket to iOS Fusion 3.0';
config.text = 'Hello!\nYou have been successfully registered in iOS Fusion 3.0. Your ticket is attached with the mail. Kindly carry it when you come for the event.\n\nRegards,\nTeam iOS Fusion';
config.attachment_name = 'ticket.png';

config.port = 4000 || process.env.PORT;

if(process.env.NODE_ENV === 'development'){
  config.db_url = 'mongodb://127.0.0.1:27017/users';
}

//config.db_url = 'mongodb://127.0.0.1:27017/';

module.exports = config;
