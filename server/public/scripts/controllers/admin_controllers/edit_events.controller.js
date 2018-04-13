capApp.controller('EditEventsController', ['UserService', 'AdminService', function (UserService, AdminService) {
    console.log('EditEventsController created');
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.viewEditEvents = function(event){
        event.editing=true;
    }
    
    self.locations = AdminService.locations;
    self.locations.newEvent.title = AdminService.locations.newEvent.title;
    self.getEvents = AdminService.getEvents;
    self.addEvent = AdminService.addEvent;
    self.editEvent = AdminService.editEvent;
    self.deleteEvent = AdminService.deleteEvent;
    self.emptyEventsInputs = AdminService.emptyEventsInputs;
   
    self.getEvents();

    self.uploadnewPhoto = AdminService.uploadnewPhoto;
}]);