let config = {};

config.mailService = 'Gmail';
config.from = 'Team iOS Fusion';
config.subject = 'Ticket to iOS Fusion 3.0';
config.text = 'Hello!\nYou have been successfully registered in iOS Fusion 3.0. Your ticket is attached with the mail. Kindly carry it when you come for the event.\n\nRegards,\nTeam iOS Fusion';
config.attachment_name = 'ticket.png';

config.refreshment_types = ['snacks', 'coffee'];

config.port = process.env.PORT || 4000;

//config.db_url = 'mongodb://127.0.0.1:27017/';

module.exports = config;
