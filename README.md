# ios-fusion-backend
Backend for the iOS Fusion app for graVITas 2017

Click [here](#configuring-for-local-and-heroku-deployments) to learn how to configure for local and Heroku deployments.

## API Reference

`Base URL: https://ios-fusion.herokuapp.com/`

1. [/users](#forum)


### /users

#### /markVerified/<user_id>

Sets the 'verified' field of the user corresponding to <user_id> to true if it is false.

    request type: GET

    failure response: {'status': false, 'message': <error_message>}
    success response: {'status': true, 'message': <info>}

#### /signup

Signs up a new user by mailing a master QR code to the registered email address.

    request type: POST
    request body: {
      name: <name>,
      mobile: <mobile_no>,
      email: <email>,
      regno: <regno>
    }

    failure response: {'status': false, 'message': <error_message>}
    success response: {'status': true, 'message': <info>}

### /refreshments

#### /claimRefreshment/<refreshment_id>

Sets the 'claimed' field of the refreshment corresponding to <refreshment_id> to true if it is false.

    request type: GET

    failure response: {'status': false, 'message': <error_message>}
    success response: {'status': true, 'message': <info>}

#### /new

Generates a new QR code for a refreshment, which is returned as a .png file.

    request type: POST
    request body: {
      type: <refreshment_type>, //the type of refreshment: coffee, snacks, etc
      userId: <user_id>
    }

    failure response: {'status': false, 'message': <error_message>}
    success response: <qr_code_png>


### /forum

#### /new

Creates a new post.

    request type: POST
    request body: {
      content: <post_content>,
      userId: <user_id>,
      tags: <tags_for_post> //the tags for the given post as an array; optional as of now
    }

    failure response: {'status': false, 'message': <error_message>}
    success response: {'status': true, 'message': <info>}

#### /getAll

Get all the posts in the forum.


    request type: GET

    failure response: {'status': false, 'message': <error_message>}
    success response: {'status': true, 'message': <info>}

#### /byUser/<user_id>

Get all the posts made in the forum by user corresponding to <user_id>.

    request type: GET

    failure response: {'status': false, 'message': <error_message>}
    success response: {'status': true, 'message': <info>}

#### /byPost/<post_id>

Get *one* post corresponding to <post_id>.

    request type: GET

    failure response: {'status': false, 'message': <error_message>}
    success response: {'status': true, 'message': <info>}

#### /byTags

Get all posts that contain the tags sent as an array in the post request.

    request type: POST

    request body: {
      tags: <array_of_tags>
    }

    failure response: {'status': false, 'message': <error_message>}
    success response: {'status': true, 'message': <info>}


## Configuring for Local and Heroku Deployments

### Local Deployments

The local deployment relies on a secrets.js file that contains credentials of the sender email account and the mongoDB url. These are secret and should not be committed to version control. In order to generate the secrets.js on a Linux/OSX machine, run the following command from the root directory of the repo:

`npm run secrets-linux`

### Heroku Deployment

The Heroku server is a production server and it does **not** use the secrets.js file as it is not tracked by version control and Heroku uses Git. Instead, the Heroku server uses environment variables to get credentials. Click [here](https://devcenter.heroku.com/articles/config-vars) to learn how to configure Heroku environment variables.

Your deployment should have the following 3 environment variables set to the appropriate credentials:

1. MAIL_ID : The email address you are using
2. MAIL_PASS : The password of the said email address
3. DB_URL : The URL of the MongoDB instance you are using
