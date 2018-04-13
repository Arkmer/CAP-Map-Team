capApp.service('GuestService', ['$http', '$location', function($http, $location) {
    console.log('GuestService Loaded');
    var self = this;
    
    self.user = {
        guest: { }
    }

    self.information = {
        allEvents: [],
        guidelines: [],
        allArtifactsForLocation: [],
        currentLocationId: '',
    }

    self.indLocation = {
        indSculpture: {},
        indMainPhoto: {},
        indPhotos: [],
        indPoems: [],
        indWritings: [],
        indAnecdotes: [],
        indVideos: [],
        isBeingEdited: false,
    }
    
    self.addGuest = function(guest) {
        console.log('In addGuest');
        console.log(guest);
        $http({
            method: 'POST',
            url:'/api/user/guest',
            data: guest,
        }).then((result) => {
            // console.log('guest email added');
            self.emptyGuestInputs();
            alert("Thank you for joining the Caponi Art Park Email List!");
            // self.emptyGuestInputs();
        }).catch((error) => {
            console.log('Could not add guest email'); 
        })
    }

    self.emptyGuestInputs = function() {
        self.user.guest.name = '';
        self.user.guest.email = '';
    }

    self.getInformation = function() {
        console.log('Get Guidelines');
        $http({
            method: 'GET',
            url: `/information/get`,
        }).then((result) => {
            console.log('Information:', result.data);
            self.information.guidelines = result.data;
        }).catch((error) => {
            console.log('guidelines', error);
        })
    }

    self.getEvents = function() {
        console.log('getEvents');
        $http({
            method: 'GET',
            url: `/events/get`,
        }).then((result) => {
            console.log('Events:', result.data);
            self.information.allEvents = result.data;
        }).catch((error) => {
            console.log('getEvents', error);
        })
    }

    self.getIndividualLocation = function(locationid) {
        console.log('in getIndividualLocation function');
        $http({
            method: 'GET',
            url: `map/artifact/${locationid}`
        }).then((result) => {
            self.information.allArtifactsForLocation = result.data;
            self.information.currentLocationId = locationid;
            console.log('current location id:', self.information.currentLocationId);
            console.log(`success getting artifacts for location id:${locationid}`, self.information.allArtifactsForLocation);
            self.indLocation.indSculpture = {};
            self.indLocation.indMainPhoto = {};
            self.indLocation.indPhotos = [];
            self.indLocation.indPoems = [];
            self.indLocation.indWritings = [];
            self.indLocation.indAnecdotes = [];
            self.indLocation.indVideos = [];
            self.indLocation.isBeingEdited = false;
            self.determineType();
        }).catch((error) => {
            console.log('error getting all locations', error);
        })
    }
}]);