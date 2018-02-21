require("./bundle-config");
<<<<<<< HEAD
const application = require("application");

if (application.ios) {
    GMSServices.provideAPIKey("AIzaSyBpCBZTRmUsRHqQgfDEaLprkqqYTxZjFQs");
=======
var application = require("application");

if (application.ios) {
    GMSServices.provideAPIKey("AIzaSyAtRVvG3Be3xXiZFR7xp-K-9hy4nZ4hMFs");
>>>>>>> rodrigo
}

application.start({ moduleName: "home/home-page" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/