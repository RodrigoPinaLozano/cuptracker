var observable = require("data/observable");
var MapModel = (function(_super) {
    __extends(MapModel, _super);

    function MapModel() {
        _super.call(this);
        this.set("latitude", 52.4983346);
        this.set("longitude", 13.3745195);
        this.set("zoom", 17);
        this.set("minZoom", 0);
        this.set("maxZoom", 22);
        this.set("bearing", 180);
        this.set("tilt", 35);
        this.set("padding", [80, 40, 40, 40]);
        this.set("mapAnimationsEnabled", true);
    }

    return MapModel;
})(observable.Observable);
exports.MapModel = MapModel;
exports.mainViewModel = new MapModel();