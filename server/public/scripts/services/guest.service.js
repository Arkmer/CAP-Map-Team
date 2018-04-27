capApp.service('GuestService', ['$http', '$location', function($http, $location){
    console.log('GuestService Loaded');
    var self = this;
    
    self.user = {
        guest: {
            name: '',
            email: '',
        }
    }

    self.information = {
        allEvents: [],
        guidelines: [],
        allArtifactsForLocation: [],
        currentLocationId: '',
        mapInfo: true,
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
        showMore: false,
        sculptureTitle: '',
    }
    
    self.addGuest = function(guest){
        $http({
            method: 'POST',
            url:'/api/user/guest',
            data: guest,
        }).then((result)=>{
            swal("Thank you for signing up for the Caponi Art Park mailing list!", "", "success");
            self.user.guest.name = '';
            self.user.guest.email = '';
            $location.url('/guidelines');
        }).catch((error)=>{
            console.log('/api/user/guest', error); 
        })
    }

    self.getInformation = function(){
        $http({
            method: 'GET',
            url: `/information/get`,
        }).then((result)=>{
            self.information.guidelines = result.data;
        }).catch((error)=>{
            console.log('/information/get', error);
        })
    }

    self.getEvents = function () {
        $http({
            method: 'GET',
            url: `/events/get`,
        }).then((result) => {
            self.information.allEvents = result.data;
            self.information.allEvents.showMore = false;
        }).catch((error) => {
            console.log('/events/get', error);
        })
    }

    self.getIndividualLocation = function(locationid){
        $http({
            method: 'GET',
            url: `/map/artifact/${locationid}`
        }).then((result)=>{
            self.information.allArtifactsForLocation = result.data;
            self.information.currentLocationId = locationid;
            self.indLocation.showMore = true;
            self.indLocation.sculptureTitle = '';
            for (let artifact of self.information.allArtifactsForLocation){
                if (artifact.type == 'sculpture'){
                    self.indLocation.showMore = false;
                    self.indLocation.sculptureTitle = artifact.title.toUpperCase();
                }
            }
        }).catch((error)=>{
            console.log(`/map/artifact/${locationid}`, error);
        })
    }

    self.xoutofalert = function () {
        self.information.mapInfo = false;
      }
    

}]);