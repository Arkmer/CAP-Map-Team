capApp.service('AdminService', ['$http', '$location',  function($http, $location){
    console.log('AdminService Loaded');
    var self = this;
    self.currentPage = {list:[]};
    self.locations = {
        newLocation: {},
        allLocations: [],
        allEvents: [],
        newEvent:{},
        events: [],
        allArtifactsForLocation: [],
        allAnecdotes: [],
        allWritings: [],
        allPoems: [],
        allMultimedia: [],
        information: {},
        currentLocationId: '',
        guestList: [],
        newGuest:{},
        allAdmins: [],
        allRevealTypes: [{type:'static'}, {type:'proximity'}, {type:'bathroom'}],
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
        reveal_type: '',
    }

    self.newText = {
        type: '',
    }

    self.newMultimedia = {
        media_url: '',
        type: '',
        description: '',
    }

    self.newSculpture = {};

    self.isMainPhoto = {
        boolean: false,
        type: '',
    };

    self.client = filestack.init("AI5OhtlsWSsiO7mmCbw06z");

    self.uploadnewPhoto = function(){
        console.log('in uploadNewPhoto');
        self.newMultimedia.type = 'photo';
        self.client.pick({
            accept: 'image/*',
            maxFiles: 1
        }).then(function(result){
            console.log('in upload,', result.filesUploaded[0].url);
            self.newMultimedia.media_url = result.filesUploaded[0].url;
            self.locations.newEvent.photo_url = result.filesUploaded[0].url;
            self.newMultimedia.uploaded = true;
            alert("successful upload!");
        }).catch((error)=>{
            alert("Please try again.");
        })
    }

    self.uploadNewVideo = function(){
        console.log('in uploadNewVideo', self.newMultimedia.media_url);
        self.newMultimedia.type = 'video';
        self.newMultimedia.uploaded = true;
        self.newMultimedia.media_url = `https://www.youtube.com/embed/${self.newMultimedia.media_url}`
    }

    self.saveMultimedia = function(){
        console.log('in save media,', self.newMultimedia);
        $http({
            method: 'POST',
            url: '/artifacts/save',
            data: {
                type: self.newMultimedia.type,
                media_url: self.newMultimedia.media_url,
                description: self.newMultimedia.description
            }
        }).then((result)=>{
            console.log('new multimedia saved');
            self.newMultimedia = {}
            history.back();
        }).catch((error)=>{
            console.log('error saving new multimedia', error);
        })
    }
//---START EVENTS AJAX---
    self.getEvents = function(){
        console.log('getEvents');
        $http({
            method:'GET', 
            url:`/events/get`,
        }).then((result)=>{
            console.log('Events:', result.data);
            self.locations.allEvents = result.data;
        }).catch((error)=>{
            console.log('getEvents', error);
        })
    }

    self.addEvent = function(dataObj){
        console.log('Add Event', dataObj);
        console.log(self.locations.newEvent);
        
        dataObj.time = dataObj.time.toString().substring(16, 24);
        $http({
            method: 'POST',
            url:`/events/post`,
            data: dataObj
        }).then((result)=>{
            console.log('Event added');
            self.getEvents();
            self.emptyEventsInputs();
        }).catch((error)=>{
            console.log('addEvent error', error);
        })
    }

    self.editEvent = function(dataObj){
        console.log('Edited item', dataObj);
        $http({
            method: 'PUT',
            url: `/events/edit`,
            data: dataObj
        }).then((result)=>{
            // Redisplay DOM
            self.getEvents();
        }).catch((error)=>{
            console.log('editEvent', error);
        })
    }

    self.deleteEvent = function(dataObj){
        $http({
            method: 'DELETE',
            url: `/events/delete/${dataObj.id}`
        }).then((result)=>{
            // Redisplay DOM
            self.getEvents();
        }).catch((error)=>{
            console.log('Delete Event', error);
        })
    }

    self.emptyEventsInputs = function(){
        self.locations.newEvent.title = '';
        self.locations.newEvent.date = '';
        self.locations.newEvent.time = '';
        self.locations.newEvent.description = '';
        self.locations.newEvent.notes = '';
        self.locations.newEvent.category = '';
        self.locations.newEvent.photo_url = '';
        self.locations.newEvent.age_group = '';
        self.locations.newEvent.price = '';
    }
    //-----END EVENTS AJAX----
    //-----Start Locations----
    self.addLocation = function(location){
        $http({
            method: 'POST',
            url: '/map/post',
            data: {
                location_name: location.name,
                lat: location.lat,
                long: location.long
            }
        }).then((response) =>{
                console.log('location sent to the database');
                alert('Location successfully uploaded!');
                location.name = '';
            })
            .catch((error) => {
                console.log('error on post: ', error); 
                alert('That did not work. Try refreshing and running again');
            })
    }//end addd location

    self.getAllLocations = function(){
        self.locations.allLocations = [];
        $http({
            method: 'GET',
            url: '/map/all'
        }).then((result)=>{
            self.locations.allLocations = result.data;
            self.indLocation.isBeingEdited = false;
            console.log('success getting all locations', self.locations.allLocations);
        }).catch((error)=>{
            console.log('error getting all locations');
        })
    }

    self.deleteLocation = function(){
        $http({
            method: 'DELETE',
            url: `/map/delete/${id}`
        }).then((result)=>{
            self.getAllLocations();
        }).catch((error)=>{
            console.log('/map/delete/:id', error);
        })
    } // ---------------------I don't have a button---------------------

    self.editLocation = function(){
        $http({
            method: 'PUT',
            url: `/map/edit`,
            data: putObj
        }).then((result)=>{
            self.getAllLocations();
        }).catch((error)=>{
            console.log('/map/edit', error);
        })
    } // ---------------------I don't have a button---------------------

    self.getIndividualLocation = function(id){
        console.log('in getIndividualLocation function');
        $http({
            method: 'GET',
            url: `map/artifact/${id}`
        }).then((result)=>{
            self.locations.allArtifactsForLocation = result.data;
            self.locations.currentLocationId = id;
            console.log('current location id:', self.locations.currentLocationId)
            console.log(`success getting artifacts for location id:${id}`, self.locations.allArtifactsForLocation);
            self.indLocation.indSculpture = {};
            self.indLocation.indMainPhoto = {};
            self.indLocation.indPhotos = [];
            self.indLocation.indPoems = [];
            self.indLocation.indWritings = [];
            self.indLocation.indAnecdotes = [];
            self.indLocation.indVideos = [];
            self.indLocation.reveal_type = '';
            self.determineType();
        }).catch((error)=>{
            console.log('error getting all locations');
        })
    }
    //-----End Locations----
    //----BEGIN Information AJAX-----//
    self.addInformation = function(dataObj){
        $http({
            method:'POST', 
            url: `/information/post`,
            data: dataObj
        }).then((result)=>{
            console.log('Information added');
            self.getInformation();
        }).catch((error)=>{
            console.log('Add information', error);
        })
    }

    self.getInformation = function(){
        $http({
            method: 'GET',
            url: `/information/get`,
        }).then((result)=>{
            console.log('Information:', result.data);
            self.locations.information = result.data;
        }).catch((error)=>{
            console.log('guidelines', error);
        })
    }

    self.editInformation = function(dataObj){
        $http({
            method: 'PUT',
            url: `/information/edit/${dataObj.id}`,
            data: dataObj,
        }).then((result)=>{
            console.log('Information updated');
            self.getInformation();
        }).catch((error)=>{
            console.log('Information', error);
        })
    }

    self.deleteInformation = function(dataObj){
        $http({
            method: 'DELETE',
            url: `/information/delete/${dataObj.id}`
        }).then((result)=>{
            self.getInformation();
        }).catch((error)=>{
            console.log('delete information', error);
        })
    }
//-----END INFORMATION AJAX-------
//-----Start Artifacts-------
    //-----Start Multimedia------
    self.getAllMultimedia = function(){
        console.log('in getAllMultimedia function');
        $http({
            method: 'GET',
            url: '/artifacts/media'
        }).then((result)=>{
            self.locations.allMultimedia = result.data;
        }).catch((error)=>{
            console.log('/artifacts/media', error);
        })
    }
    //-----End Multimedia------
    //-----Start Sculptures------
    self.saveSculpture = function(){
        let newSculpture = self.newSculpture; 
        console.log('in saveSculpture,', newSculpture);
        $http({
            method: 'POST',
            url: `/artifacts/save`,
            data: {
                title: newSculpture.title,
                year: newSculpture.year,
                artist_name: newSculpture.artist_name,
                material: newSculpture.material,
                description: newSculpture.description,
                extended_description: newSculpture.extended_description,
                type: 'sculpture',
            }
        }).then((result)=>{
            console.log('new sculpture saved');
            alert('sculpture added!');
            let artifact_id = result.data[0].id //return id from database!!!!
            console.log('artifact_id:' , artifact_id)
            self.saveAssociation(artifact_id, false);
        }).catch((error)=>{
            console.log('error saving new sculpture', error);
        })
    }

    self.getAllSculptures = function(){
        $http({
            method: 'GET',
            url: '/artifacts/sculpture'
        }).then((result)=>{
            self.locations.allSculptures = result.data;
        }).catch((error)=>{
            console.log('/artifacts/sculpture', error);
        })
    }
    //-----End Sculptures------
    //-----Start Other Artifacts-----
    self.saveText = function(){
        let newText = self.newText;
        console.log('in saveText,', newText);
        $http({
            method: 'POST',
            url: `/artifacts/save`,
            data: {
                title: newText.title,
                year: newText.year,
                description: newText.description,
                type: newText.type,
            }
        }).then((result)=>{
            console.log('new text saved');
            self.clearArtifact();
            history.back();
        }).catch((error)=>{
            console.log('error saving new text', error);
        })
    }

    self.getAllWritings = function(){
        console.log('in getAllWritings function');
        $http({
            method: 'GET',
            url: '/artifacts/writing'
        }).then((result)=>{
            self.locations.allWritings = result.data;
        }).catch((error)=>{
            console.log('/artifacts/writing', error);
        })
    }

    self.getAllAnecdotes = function(){
        console.log('in getAllAnecdotes function');
        $http({
            method: 'GET',
            url: '/artifacts/anecdote'
        }).then((result)=>{
            self.locations.allAnecdotes = result.data;
        }).catch((error)=>{
            console.log('/artifacts/anecdote', error);
        })
    }

    self.getAllPoems = function(){
        console.log('in getAllPoems function');
        $http({
            method: 'GET',
            url: '/artifacts/poem'
        }).then((result)=>{
            self.locations.allPoems = result.data;
            console.log(self.locations.allPoems);
        }).catch((error)=>{
            console.log('/artifacts/poem', error);
        })
    }
    //-----End Other Artifacts-----
    //-----Start Misc Artifact Functions-----
    self.editArtifact = function(artifact){
        console.log('Edit Artifact', artifact);
        
        $http({
            method: 'PUT',
            url: '/artifacts/edit',
            data: artifact
        }).then((result)=>{
            self.getDecider(artifact);
            console.log('Artifact updated', result);
            self.clearArtifact();
            history.back();
        }).catch((error)=>{
            console.log('/artifacts/edit', error);
        })
    }

    self.clearArtifact = function(){
        // self.newText.type = '';
        self.newText.year = '';
        self.newText.material = '';
        self.newText.artist_name = '';
        self.newText.title = '';
        self.newText.description = '';
        self.newText.extended_description = '';
        self.newText.media_url = '';
        self.newText.editing = false;
        self.newMultimedia.media_url = '';
        self.newMultimedia.description = '';
        self.newMultimedia.extended_description = '';
        self.newMultimedia.editing = false;
    }
    
    self.determineType = function(){
        self.indLocation.reveal_type = self.locations.allArtifactsForLocation[0].reveal_type;
        for(let artifact of self.locations.allArtifactsForLocation){
            if(artifact.type == 'sculpture'){
                self.indLocation.indSculpture = artifact;
            }else if(artifact.type == 'photo' && !artifact.main_photo){
                self.indLocation.indPhotos.push(artifact);
            }else if(artifact.type == 'poem'){
                self.indLocation.indPoems.push(artifact);
            }else if(artifact.type == 'writing'){
                self.indLocation.indWritings.push(artifact);
            }else if(artifact.type == 'anecdote'){
                self.indLocation.indAnecdotes.push(artifact);
            }else if(artifact.type == 'video'){
                self.indLocation.indVideos.push(artifact);
            }else if(artifact.main_photo){
                self.indLocation.indMainPhoto = artifact;
            }
        }
    }


    self.getAllWritings = function(){
        console.log('in getAllWritings function');
        $http({
            method: 'GET',
            url: '/artifacts/writing'
        }).then((result)=>{
            self.locations.allWritings = result.data;
        }).catch((error)=>{
            console.log('/artifacts/writing', error);
        })
    }

    self.getAllAnecdotes = function(){
        console.log('in getAllAnecdotes function');
        $http({
            method: 'GET',
            url: '/artifacts/anecdote'
        }).then((result)=>{
            self.locations.allAnecdotes = result.data;
        }).catch((error)=>{
            console.log('/artifacts/anecdote', error);
        })
    }

    self.getAllPoems = function(){
        console.log('in getAllPoems function');
        $http({
            method: 'GET',
            url: '/artifacts/poem'
        }).then((result)=>{
            self.locations.allPoems = result.data;
            console.log(self.locations.allPoems);
        }).catch((error)=>{
            console.log('/artifacts/poem', error);
        })
    }

    self.saveAssociation = function(artifact_id, main_photo){
        let location_id = Number(self.locations.currentLocationId);
        console.log('in saveAssociation function--artifact_id, main_photo, location_id:', artifact_id, main_photo, location_id);
        $http({
            method: 'POST',
            url: '/map/join/insert',
            data: {
                artifact_id: artifact_id,
                location_id: self.locations.currentLocationId,
                main_photo: self.isMainPhoto.boolean,
            }
        }).then((result)=>{
            console.log('association saved');
            history.back();
        }).catch((error)=>{
            console.log('error saving association', error);
        })
    }

    self.deleteAssociation = function(artifact_id){
        let location_id = Number(self.locations.currentLocationId);
        console.log('in deleteAssociation', artifact_id, location_id);
        $http({
            method: 'DELETE',
            url: `/artifacts/join/delete/${artifact_id}/${location_id}`
        }).then((result)=>{
            self.getIndividualLocation(location_id);
        }).catch((error)=>{
            console.log(`/artifacts/join/delete/${id}: ${result}`);
        })
    }
    
    self.saveRevealType = function(reveal_type){

    }

    self.deleteArtifact = function(artifact){
        $http({
            method: 'DELETE',
            url: `/artifacts/delete/${artifact.id}`
        }).then((result)=>{
            self.getDecider(artifact);
        }).catch((error)=>{
            console.log('/artifacts/delete/:id', error);
        })
    }

    self.getDecider = function(artifact){
        switch(artifact.type){
            case 'photo':
            case 'video':
                self.getAllMultimedia();
                break;
            case 'writing':
                self.getAllWritings();
                break;
            case 'anecdote':
                self.getAllAnecdotes();
                break;
            case 'poem':
                self.getAllPoems();
                break;
        }
    }

    self.formDecider = function(artifact){
        switch(artifact.type){
            case 'photo':
            case 'video':
                $location.path('/admin/multimediaform');
                break;
            case 'writing':
            case 'anecdote':
            case 'poem':
                $location.path('/admin/textform');
                break;
            case 'sculpture':
                $location.path('/admin/sculptures');
                break;
        }
    }

    self.getArtifactToEdit = function(id){
        console.log('Editing artifact', id);
        $http({
            method: 'GET',
            url: `/artifacts/single/${id}`,
        }).then((result)=>{
            console.log('individual result:', result.data);
            self.newText.id = result.data[0].id;
            self.newText.type = result.data[0].type;
            self.newText.title = result.data[0].title;
            self.newText.year = result.data[0].year;
            self.newText.description = result.data[0].description;
            self.newText.editing = true;
            self.newMultimedia.id = result.data[0].id;
            self.newMultimedia.type = result.data[0].type;
            self.newMultimedia.media_url = result.data[0].media_url;
            self.newMultimedia.description = result.data[0].description;
            self.newMultimedia.extended_description = result.data[0].extended_description;
            self.newMultimedia.editing = true;
            self.newSculpture.id = result.data[0].id;
            self.newSculpture.title = result.data[0].title;
            self.newSculpture.artist_name = result.data[0].artist_name;
            self.newSculpture.material = result.data[0].material;
            self.newSculpture.year = result.data[0].year;
            self.newSculpture.description = result.data[0].description;
            self.newSculpture.extended_description = result.data[0].extended_description;
            self.newSculpture.view_count = result.data[0].view_count;
            self.newSculpture.type = result.data[0].type;
            self.newSculpture.media_url = result.data[0].media_url;
            self.newSculpture.editing = true;
            self.formDecider(result.data[0]);
        }).catch((error)=>{
            console.log('Could not get individual artifact', error);
        })
    }
    //-----End Misc Artifact Functions-----
//-----End Artifacts-------
//----Start Guest Management----
    self.getAllGuests = function(){
        $http({
            method:'GET', 
            url: `/api/user/guest/all`
        }).then((result)=>{
            console.log('guest emails', result.data);
            self.locations.guestList = result.data;
        }).catch((error)=>{
            console.log('could not get guest emails', error);
        })
    }

    self.deleteGuest = function(guest){
        $http({
            method:'DELETE',
            url:`/api/user/guest/delete/${guest.id}`
        }).then((result)=>{
            console.log('Guest deleted',);
            self.getAllGuests();
        }).catch((error)=>{
            console.log('Could not delete guest');
        })
    }

    self.addGuest = function(guest){
        console.log('In addGuest');
        console.log(guest);
        $http({
            method: 'POST',
            url: '/api/user/guest',
            data: guest,
        }).then((result)=>{
            console.log('guest email added');
            self.getAllGuests();
            self.emptyGuestInputs();
        }).catch((error)=>{
            console.log('Could not add guest email');
        })
    }

    self.emptyGuestInputs = function(){
        self.locations.newGuest.name = '';
        self.locations.newGuest.email = '';
    }
//------End Guest Management----
//-----Begin Admin Management----
    self.getAllAdmins = function(){
        $http({
            method: 'GET',
            url: '/api/user/admin/all'
        }).then((result) => {
            console.log('Got all admins', result.data);
            self.locations.allAdmins = result.data;
        }).catch((error)=>{
            console.log('/api/user/admin/all', error);
        })
    }

    self.deleteAdmin = function(id){
        $http({
            method: 'DELETE',
            url: `/api/user/admin/delete/${id.id}`
        }).then((result)=>{
            self.getAllAdmins();
        }).catch((error)=>{
            console.log(`/api/user/admin/delete/${id.id}`, error);
        })
    }
//-----End Admin Management----
    self.isCurrentPage = function(path){
        return path === $location.path();
    }
}]);