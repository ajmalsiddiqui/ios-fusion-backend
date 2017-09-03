# ios-fusion-backend
Backend for the iOS Fusion app for graVITas 2017

### API Reference

`Base URL: https://ios-fusion.herokuapp.com/`

## /users

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

## /refreshments

#### /claimRefreshment/<refreshment_id>

Sets the 'claimed' field of the refreshment corresponding to <refreshment_id> to true if it is false.

    request type: GET

    failure response: {'status': false, 'message': <error_message>}
    success response: {'status': true, 'message': <info>}

#### /new

Generates a new QR code for a refreshment, which is returned as a .png file.

    request type: POST
    request body: {
      type: <refreshment_type>,
      userId: <unique_mongo_id>
    }

    failure response: {'status': false, 'message': <error_message>}
    success response: <qr_code_png>
