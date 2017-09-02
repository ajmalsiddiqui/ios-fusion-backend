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

    success response: {'status': false, 'message': <error_message>}
    failure response: {'status': true, 'message': <info>}
