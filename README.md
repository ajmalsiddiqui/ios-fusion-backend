# ios-fusion-backend
Backend for the iOS Fusion app for graVITas 2017

### API Reference

`Base URL: https://ios-fusion.herokuapp.com/`

## /users

#### /signup

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

#### /new

    request type: POST
    request body: {
      type: <refreshment_type>,
      userId: <unique_mongo_id>
    }

    failure response: {'status': false, 'message': <error_message>}
    success response: <qr_code_png>
