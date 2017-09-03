#!/bin/bash

echo "This will generate the secrets.js file for you. Answer the questions that follow and ensure that the answers are accurate to avoid crashing of app during local development. Refer to the README.md file of the GitHub repo for this project for instructions to configure the Heroku production deployment with the secret credentials."

echo "Enter the email address that will send the confirmation emails. If using a Gmail address, turn on, \"Allow access for less secure apps\" from security settings."

read email

echo "Enter password for this email address"

read pass

echo "Enter the url of your mongodb deployment or enter \"d\" for default value of \'mongodb://127.0.0.1:27017/\'"

read mongo

if [ $mongo = "d" ]
then
  mongo="mongodb://127.0.0.1:27017/"
fi

filetext="let config = {};

config.db_url = '"$mongo"';

config.mailId = '"$email"';
config.mailPass = '"$pass"';


module.exports = config;"

cd ..

touch secrets.js

echo "$filetext" > secrets.js

echo "Successfully created/updated secrets.js. You should NOT commit this file to version control."
