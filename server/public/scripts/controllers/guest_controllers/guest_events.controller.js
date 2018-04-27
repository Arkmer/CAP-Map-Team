capApp.controller('GuestEventsController', ['UserService', 'GuestService','AdminService', function (UserService, GuestService, AdminService) {
    var self = this;
    self.userService = UserService;
    self.guestService = GuestService;
    self.adminService = AdminService;
  
    
    self.getEvents = GuestService.getEvents;
    self.information = GuestService.information;

    self.getEvents();
}]);