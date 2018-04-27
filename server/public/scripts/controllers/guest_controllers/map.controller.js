capApp.controller('MapController', ['UserService', 'GuestService', 'AdminService', '$scope', '$timeout', function (UserService, GuestService, AdminService, $scope, $timeout) {
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;
    self.guestService = GuestService;
    //--------------for getting all locations--------------
    self.getAllLocations = AdminService.getAllLocations;
    self.locations = AdminService.locations;
    //--------------for the person marker--------------
    let markerStore = {
        marker: null
    };
    //--------------for map overlay--------------
    let overlay;
    CaponiOverlay.prototype = new google.maps.OverlayView();

    //--------------files to display the markersgit as--------------
    const static = '../../styles/DarkGreen_Marker.png';

    const facility = '../../styles/Brown_Marker.png';

    const hiddenMarker = {
        path: '../../styles/Brown_Marker.png',
        scale: .0,
    };

    const found = '../../styles/Blue_Marker.png';

    //--------------instance of a marker that is centered --------------

    let markerImage = new google.maps.MarkerImage('../../styles/maps_marker_55px_halo.png',
        new google.maps.Size(55, 55),
        new google.maps.Point(0, 0),
        new google.maps.Point(27.5, 27.5));

    //--------------for the marker info windows--------------
    self.generateLink = (location) => `<a href="#!/artifacts/${location.id}">${location.location_name}</a>`;
    self.infowindow = new google.maps.InfoWindow();

    //--------------functions that control when hidden locations are shown--------------
    self.triggerMarkerShow = (location) => {
        for (let i = 0; i < self.locations.allLocations.length; i++) {
            if (self.locations.allLocations[i].reveal_type == hiddenMarker) {
                let boundTop = parseFloat(self.locations.allLocations[i].lat) + .00035;
                let boundBottom = self.locations.allLocations[i].lat - .00035;
                let boundRight = parseFloat(self.locations.allLocations[i].long) + .0005;
                let boundLeft = self.locations.allLocations[i].long - .0005;
                if (location.latitude > boundBottom && location.latitude < boundTop && location.longitude < boundRight && location.latitude > boundLeft) {
                    self.locations.allLocations[i].reveal_type = 'not hidden';
                    let newMarker = new google.maps.Marker({
                        position: new google.maps.LatLng(self.locations.allLocations[i].lat, self.locations.allLocations[i].long),
                        map: $scope.map,
                        icon: found,
                        animation: google.maps.Animation.DROP
                    })
                    google.maps.event.addListener(newMarker, 'click', (function (newMarker, i) {
                        return function () {
                            self.infowindow.setContent(self.generateLink(self.locations.allLocations[i]));
                            self.infowindow.open($scope.map, newMarker);
                        }
                    })(newMarker, i));
                }
            }
        }
    }
    //--------------functions that control when hidden locations are hid again--------------
    self.triggerMarkerHide = (location) => {
        for (let i = 0; i < self.locations.allLocations.length; i++) {
            if (self.locations.allLocations[i].reveal_type == 'not hidden') {
                let boundTop = parseFloat(self.locations.allLocations[i].lat) + .00035;
                let boundBottom = self.locations.allLocations[i].lat - .00035;
                let boundRight = parseFloat(self.locations.allLocations[i].long) + .0005;
                let boundLeft = self.locations.allLocations[i].long - .0005;
                if (location.latitude < boundBottom && location.latitude > boundTop && location.longitude > boundRight && location.latitude < boundLeft) {
                    self.locations.allLocations[i].reveal_type = hiddenMarker;
                    let newMarker = new google.maps.Marker({
                        position: new google.maps.LatLng(self.locations.allLocations[i].lat, self.locations.allLocations[i].long),
                        map: $scope.map,
                        icon: self.locations.allLocations[i].reveal_type
                    })
                    google.maps.event.addListener(newMarker, 'click', (function (newMarker, i) {
                        return function () {
                            self.infowindow.setContent(self.generateLink(self.locations.allLocations[i]));
                            self.infowindow.open($scope.map, newMarker);
                        }
                    })(newMarker, i));
                }
            }
        }
    }

    ////--------------location to get the guest's location, display it and display what hidden locations they see--------------
    self.findLocation = () => {
        $timeout(function () {
            success = (pos) => {
                let crd = pos.coords;
                if (markerStore.marker !== null) {
                    markerStore.marker.setPosition(new google.maps.LatLng(crd.latitude, crd.longitude));
                } else {
                    let personMarker = new google.maps.Marker({
                        position: new google.maps.LatLng(crd.latitude, crd.longitude),
                        map: $scope.map,
                        icon: markerImage,
                    })
                    markerStore.marker = personMarker;
                }
                self.triggerMarkerShow(crd);
                self.triggerMarkerHide(crd);
                $scope.$apply();

            }
            error = (err) => {
                alert("We were\'t able to get your location. Make sure you\'re on an HTTPS webpage!", "", "error");
            }
            options = {
                enableHighAccuracy: true,
                timeout: 7500,
                maximumAge: 0
            }

            navigator.geolocation.watchPosition(success, error, options);
        }, 700);
    }

    self.findLocation();

    ////--------------this function displays the map--------------
    self.initMap = () => {
        ////--------------gets the locations to display--------------
        self.getAllLocations();
        //--------------timeout so all locations are obtained before map renders-------------
        $timeout(function () {
            $scope.map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 44.8053,
                    lng: -93.1529663690302
                },
                zoom: 17,
                mapTypeId: 'satellite',
                streetViewControl: false,
                rotateControleOptions: false,
                fullscreenControl: false,
                tilt: 0
            })
            ////--------------sets bounds for the overlay--------------

            let bounds = new google.maps.LatLngBounds(
                new google.maps.LatLng(44.8000250, -93.157400000),
                new google.maps.LatLng(44.8080250, -93.1460700));

            //--------------source image for the overlay--------------

            let srcImage = '../../styles/CaponiArtParkOverlay2_Transparent_Resized.png';

            //--------------loops through all the locations and displays locations that should be displayed--------------
            for (let i = 0; i < self.locations.allLocations.length; i++) {
                if (self.locations.allLocations[i].reveal_type == 'static') {
                    self.locations.allLocations[i].reveal_type = static;
                } else if (self.locations.allLocations[i].reveal_type == 'proximity') {
                    self.locations.allLocations[i].reveal_type = hiddenMarker;
                } else {
                    self.locations.allLocations[i].reveal_type = facility;
                }

                //--------------creates markers for each location--------------
                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(self.locations.allLocations[i].lat, self.locations.allLocations[i].long),
                    map: $scope.map,
                    title: self.locations.allLocations[i].location_name,
                    icon: self.locations.allLocations[i].reveal_type
                })
                //--------------creates the info windows and sets event listener to route to artifact pages on click--------------
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                            self.infowindow.setContent(self.generateLink(self.locations.allLocations[i]));
                            self.infowindow.open($scope.map, marker);
                        }
                    })(marker, i));
            }
            //--------------overlay function for the overlay--------------
            overlay = new CaponiOverlay(bounds, srcImage, $scope.map);
        }, 700)

    }
    //--------------everything from here down is for the map overlay --------------

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
        this.setMap($scope.map);
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
    //--------------runs the map initiate to render the map--------------
    self.initMap();

    self.isCurrentPage = AdminService.isCurrentPage;
    self.isCurrentPage();

}]);