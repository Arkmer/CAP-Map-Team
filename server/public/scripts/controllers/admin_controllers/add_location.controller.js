capApp.controller('AddLocationController', ['UserService', 'AdminService', function (UserService, AdminService) {
    var self = this;
    self.adminService = AdminService;

    self.addLocation = AdminService.addLocation;

    self.locations = AdminService.locations;

    self.getMapLocation = AdminService.getMapLocation;

    self.editLocation = AdminService.editLocation;

    self.locationName;
    let overlay;
    CaponiOverlay.prototype = new google.maps.OverlayView();

    self.initMap = () => {
        if (self.locations.currentLocationId !== null) {
            self.getMapLocation(self.locations.currentLocationId);
        }

        setTimeout(function mapDelay() {

            let map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 44.80526000,
                    lng: -93.15375000
                },
                zoom: 18,
                mapTypeId: 'satellite',
                streetViewControl: false,
                rotateControleOptions: false,
                fullscreenControl: false,
                tilt: 0
            })

            let bounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(44.8000250, -93.157400000),
                new google.maps.LatLng(44.8080250, -93.1460700));

            //--------------source image for the overlay--------------

            let srcImage = '../../styles/CaponiArtParkOverlay2_Transparent_Resized.png';

            if (self.locations.currentLocationId !== null) {

                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(self.locations.locationToEdit[0].lat, self.locations.locationToEdit[0].long),
                    map: map,
                    title: self.locations.locationToEdit.name,
                    draggable: true,
                    animation: google.maps.Animation.DROP
                })

                google.maps.event.addListener(marker, 'dragstart', function () {})

                google.maps.event.addListener(marker, 'drag', function () {})

                google.maps.event.addListener(marker, 'dragend', function () {
                    self.locations.locationToEdit[0].lat = marker.getPosition().lat();
                    self.locations.locationToEdit[0].long = marker.getPosition().lng();
                })

            } else {
                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(44.80457827564791, -93.15323458993169),
                    map: map,
                    title: self.locations.newLocation.name,
                    draggable: true,
                    animation: google.maps.Animation.DROP
                })

                google.maps.event.addListener(marker, 'dragend', function () {
                    self.locations.newLocation.lat = marker.getPosition().lat();
                    self.locations.newLocation.long = marker.getPosition().lng();    

                })
            }

            overlay = new CaponiOverlay(bounds, srcImage, map);

        }, 150)
    }
    /** @constructor */
    function CaponiOverlay(bounds, image, map) {

        // Initialize all properties.
        this.bounds_ = bounds;
        this.image_ = image;
        this.map_ = map;

        // Define a property to hold the image's div. We'll
        // actually create this div upon receipt of the onAdd()
        // method so we'll leave it null for now.
        this.div_ = null;

        // Explicitly call setMap on this overlay.
        this.setMap(map);
    }

    /**
     * onAdd is called when the map's panes are ready and the overlay has been
     * added to the map.
     */
    CaponiOverlay.prototype.onAdd = function () {

        var div = document.createElement('div');
        div.style.borderStyle = 'none';
        div.style.borderWidth = '0px';
        div.style.position = 'absolute';

        // Create the img element and attach it to the div.
        var img = document.createElement('img');
        img.src = this.image_;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.position = 'absolute';
        img.style.opacity = '.75';
        div.appendChild(img);

        this.div_ = div;

        // Add the element to the "overlayLayer" pane.
        var panes = this.getPanes();
        panes.overlayLayer.appendChild(div);
    };

    CaponiOverlay.prototype.draw = function () {

        // We use the south-west and north-east
        // coordinates of the overlay to peg it to the correct position and size.
        // To do this, we need to retrieve the projection from the overlay.
        var overlayProjection = this.getProjection();

        // Retrieve the south-west and north-east coordinates of this overlay
        // in LatLngs and convert them to pixel coordinates.
        // We'll use these coordinates to resize the div.
        var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
        var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

        // Resize the image's div to fit the indicated dimensions.
        var div = this.div_;
        div.style.left = sw.x + 'px';
        div.style.top = ne.y + 'px';
        div.style.width = (ne.x - sw.x) + 'px';
        div.style.height = (sw.y - ne.y) + 'px';
    };

    // The onRemove() method will be called automatically from the API if
    // we ever set the overlay's map property to 'null'.
    CaponiOverlay.prototype.onRemove = function () {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    };
    self.initMap();

    self.isCurrentPage = AdminService.isCurrentPage;
    self.isCurrentPage();
}]);