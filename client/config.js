// ./client/config.js
const AUTH0_CONFIG = {
 domain: "dev-05gev6hk.us.auth0.com", // your tenant
 clientID: "4pvqeeqqJ7ETz4Rqat6dcJp4ehry0p51", // your application client id
 audience: "https://voice-it-demo", // your identifier
 responseType: "token id_token",
 scope: "openid profile",
 redirectUri: window.location.origin
};