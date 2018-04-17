capApp.controller('GuidelinesController', ['UserService', 'GuestService', 'AdminService', function (UserService, GuestService, AdminService) {
    console.log('GuidelinesController created');
    var self = this;
    self.userService = UserService;
    self.guestService = GuestService;
    self.adminService = AdminService;

    self.information = GuestService.information

    self.getInformation = GuestService.getInformation;

    self.getInformation();

    self.getAllLocations = AdminService.getAllLocations;

    self.getAllLocations();
    
}]);


