capApp.controller('EditEventsController', ['UserService', 'AdminService', function (UserService, AdminService) {
    console.log('EditEventsController created');
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.viewEditEvents = function(event){
        event.editing=true;
    }

    self.getEvents = AdminService.getEvents;
    self.addEvent = AdminService.addEvent;
    self.editEvent = AdminService.editEvent;
    self.deleteEvent = AdminService.deleteEvent;
    self.emptyEventsInputs = AdminService.emptyEventsInputs;

    
}]);