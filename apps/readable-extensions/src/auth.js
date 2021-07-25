var auth_url = 'https://accounts.google.com/o/oauth2/auth?';
var client_id = '87250999771-ofgbn4h1e387dcfhfgt7cdi17cncnqar.apps.googleusercontent.com'; // must be Web Application type
var redirect_url = chrome.identity.getRedirectURL(); // make sure to define Authorised redirect URIs in the Google Console such as https://<-your-extension-ID->.chromiumapp.org/

var auth_params = {
  client_id: client_id,
  redirect_uri: redirect_url,
  response_type: 'token',
  scope: 'https://mail.google.com/',
  login_hint: 'real_email@gmail.com', // fake or non-existent won't work
};

const url = new URLSearchParams(Object.entries(auth_params));
url.toString();
auth_url += url;

chrome.identity.launchWebAuthFlow({ url: auth_url, interactive: true }, function (responseUrl) {
  console.log(responseUrl);
});
