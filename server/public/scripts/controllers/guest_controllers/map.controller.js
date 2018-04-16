capApp.controller('MapController', ['UserService', 'GuestService', 'AdminService', '$scope', function (UserService, GuestService, AdminService, $scope) {
    console.log('MapController created');
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;
    self.guestService = GuestService;


    self.locations = AdminService.locations;


    self.initMap = () => {
        
        let map = new google.maps.Map(document.getElementById('map'), {
             center : {
                 lat: 44.80526000, 
                 lng: -93.15375000
             }, 
             zoom: 18,
             mapTypeId: 'satellite'
         })
        
        //  let bounds = new google.maps.LatLngBounds(
        //      new google.maps.LatLng(44.8048, -93.1577000),
        //      new google.maps.LatLng(44.8085000, -93.1457900));
     
        //  let srcImage = '../../styles/northMap.png';

        let generateLink = (location) => {
            return `<a href="#!/artifacts/${location._id}">${location.location_name}</a>`;
        }

         self.infowindow = new google.maps.InfoWindow();
         
         
         //need to add something to differentiate between display types
         for(let i = 0; i <self.locations.allLocations.length; i ++) {
            let marker = new google.maps.Marker({
                position: new google.maps.LatLng(self.locations.allLocations[i].lat,self.locations.allLocations[i].long ),
                map: map,
                title: self.locations.allLocations[i].location_name,
         })

         google.maps.event.addListener(marker, 'click', (function (marker, i) {
             return function () {
                 self.infowindow.setContent(generateLink(self.locations.allLocations[i]));
                 self.infowindow.open(map, marker);
             } 
         })(marker, i));
         
        }
         
    } 

    self.initMap();

}]);