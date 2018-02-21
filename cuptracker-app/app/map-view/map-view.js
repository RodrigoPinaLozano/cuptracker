var mapsModule = require("nativescript-google-maps-sdk");
var permissions = require("nativescript-permissions");
var application = require("application");
var vmModule = require("./main-view-model");

/* ***********************************************************
 * Use the "onNavigatingTo" handler to initialize the page binding context.
 *************************************************************/
function onNavigatingTo(args) {
    /* ***********************************************************
     * The "onNavigatingTo" event handler lets you detect if the user navigated with a back button.
     * Skipping the re-initialization on back navigation means the user will see the
     * page in the same data state that he left it in before navigating.
     *************************************************************/
    if (args.isBackNavigation) {
        return;
    }

    const page = args.object;
}

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
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

    console.log("onMapReady");
    mapView.settings.compassEnabled = true;
    mapView.settings.zoomGesturesEnabled = true;
    printUISettings(mapView.settings);

    console.log("Zooming in (no animation)...", JSON.stringify(vmModule.mainViewModel));
    mapView.latitude = "52.4983346";
    mapView.longitude = "13.3745195";
    mapView.compassEnabled = true;
    mapView.zoom = 19;
    //marker.showInfoWindow();

    console.log("Setting a marker...");
    var marker = new mapsModule.Marker();
    marker.position = mapsModule.Position.positionFromLatLng(52.4983346, 13.3745195);
    marker.title = "BCW 2018";
    marker.snippet = "Berlin";
    marker.color = 240;
    marker.userData = { index: 1 };
    mapView.addMarker(marker);


}

function onMarkerEvent(args) {
    console.log("Marker Event: '" + args.eventName +
        "' triggered on: " + args.marker.title +
        ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
}

function onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera));
}

exports.onMapReady = onMapReady;
exports.onMarkerEvent = onMarkerEvent;
exports.onCameraChanged = onCameraChanged;