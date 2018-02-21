<<<<<<< HEAD
const frameModule = require("ui/frame");

const HomeViewModel = require("./home-view-model");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    /* ***********************************************************
    * The "onNavigatingTo" event handler lets you detect if the user navigated with a back button.
    * Skipping the re-initialization on back navigation means the user will see the
    * page in the same data state that he left it in before navigating.
    *************************************************************/
=======
var frameModule = require("ui/frame");
var mapsModule = require("nativescript-google-maps-sdk");
var permissions = require("nativescript-permissions");
var application = require("application");
var HomeViewModel = require("./home-view-model");
var style = require('./map-style.json');
var fetchModule = require("fetch");

/* ***********************************************************
 * Use the "onNavigatingTo" handler to initialize the page binding context.
 *************************************************************/
function onNavigatingTo(args) {
    /* ***********************************************************
     * The "onNavigatingTo" event handler lets you detect if the user navigated with a back button.
     * Skipping the re-initialization on back navigation means the user will see the
     * page in the same data state that he left it in before navigating.
     *************************************************************/
>>>>>>> rodrigo
    if (args.isBackNavigation) {
        return;
    }

<<<<<<< HEAD
    const page = args.object;
=======
    var page = args.object;
>>>>>>> rodrigo
    page.bindingContext = new HomeViewModel();
}

/* ***********************************************************
 * According to guidelines, if you have a drawer on your page, you should always
 * have a button that opens it. Get a reference to the RadSideDrawer view and
 * use the showDrawer() function to open the app drawer section.
 *************************************************************/
function onDrawerButtonTap(args) {
<<<<<<< HEAD
    const sideDrawer = frameModule.topmost().getViewById("sideDrawer");
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
=======
    var sideDrawer = frameModule.topmost().getViewById("sideDrawer");
    sideDrawer.showDrawer();
}

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new HomeViewModel();
}

function printUISettings(settings) {
    console.log("Current UI setting:\n" + JSON.stringify({
        compassEnabled: settings.compassEnabled,
        indoorLevelPickerEnabled: settings.indoorLevelPickerEnabled,
        mapToolbarEnabled: settings.mapToolbarEnabled,
        myLocationButtonEnabled: settings.myLocationButtonEnabled,
        rotateGesturesEnabled: settings.rotateGesturesEnabled,
        scrollGesturesEnabled: settings.scrollGesturesEnabled,
        tiltGesturesEnabled: settings.tiltGesturesEnabled,
        zoomControlsEnabled: settings.zoomControlsEnabled,
        zoomGesturesEnabled: settings.zoomGesturesEnabled
    }, undefined, 2));
}

function onMapReady(args) {
    var mapView = args.object;
    mapView.setStyle(style);
    mapView.settings.compassEnabled = true;
    mapView.settings.zoomGesturesEnabled = true;

    // Locating BCW 2018 Venue
    mapView.latitude = "52.4983346";
    mapView.longitude = "13.3745195";
    mapView.compassEnabled = true;
    mapView.zoom = 19;

    getAndDisplayCoffeeCupsIn(mapView);

}

function getAndDisplayCoffeeCupsIn(mapView) {
    fetchModule.fetch("http://100.104.3.6:8070/", {
            method: "GET"
        })
        .then(function(response) {
            console.log("Coffee Cups: " + JSON.stringify(response));
            setMarkerWithLatLongAndTitle(mapView, "52.49864", "13.375129", "Cup #1");
            setMarkerWithLatLongAndTitle(mapView, "52.498683", "13.374658", "Cup #2");
        }, function(error) {
            console.error(JSON.stringify(error));
        });
}

function onMarkerEvent(args) {
    console.log("Marker Event: '" + args.eventName +
        "' triggered on: " + args.marker.title +
        ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
}

function setMarkerWithLatLongAndTitle(mapView, latitude, longitude, title) {
    console.log("Setting a marker for a coffee cup...");
    var marker = new mapsModule.Marker();
    marker.position = mapsModule.Position.positionFromLatLng(latitude, longitude);
    marker.title = title;
    marker.snippet = "BCW 2018";
    marker.icon = 'Coffee-24';
    marker.userData = { index: 1 };
    mapView.addMarker(marker);
}

function onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera));
}

exports.onMapReady = onMapReady;
exports.onMarkerEvent = onMarkerEvent;
exports.onCameraChanged = onCameraChanged;

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
>>>>>>> rodrigo
