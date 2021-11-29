import {google} from 'googleapis';

//client info
const googleConfig = {
    clientId: '<Client_Id',
    clientSecret: '<Client_Secret',
    redirect: 'website url',
}

// Create the google auth object to talk to google's apis
function createConnection() {
    return new google.auth.OAuth2(
      googleConfig.clientId,
      googleConfig.clientSecret,
      googleConfig.redirect,
    );
  }

//tells google what imformation we want to request
const defaultScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
];

//Get a url to open the google sign-in page and request access
function getConnectionUrl(auth){
    return auth.generateAuthUrl({
        //access type and prompt make new token
        access_type: 'offline',
        prompt: 'consent',
        scope: defaultScope,
    });
}

//google url to send to client
function urlGoogle(){
    const auth = createConnection();
    const url = getConnectionUrl(auth);
    return url;
}

// Helper function to get the library with access to the google plus api.
function getGooglePlusApi(auth) {
    return google.plus({ version: 'v1', auth });
}
  
//Extract the email and id of the google account from the "code" parameter.
function getGoogleAccountFromCode(code) {
    
    // get the auth "tokens" from the request
    const data = await auth.getToken(code);
    const tokens = data.tokens;
    
    // add the tokens to the google api so we have access to the account
    const auth = createConnection();
    auth.setCredentials(tokens);
    
    // connect to google plus - need this to get the user's email
    const plus = getGooglePlusApi(auth);
    const me = await plus.people.get({ userId: 'me' });
    
    // get the google id and email
    const userGoogleId = me.data.id;
    const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;
  
    // return to login or sign up the user
    return {
      id: userGoogleId,
      email: userGoogleEmail,
      tokens: tokens, // you can save these to the user if you ever want to get their details without making them log in again
    };
}

