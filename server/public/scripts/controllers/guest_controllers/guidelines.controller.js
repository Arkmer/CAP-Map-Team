capApp.controller('GuidelinesController', ['UserService', 'GuestService', 'AdminService', function (UserService, GuestService, AdminService) {
    var self = this;
    self.userService = UserService;
    self.guestService = GuestService;
    self.adminService = AdminService;

    self.information = GuestService.information

    self.getInformation = GuestService.getInformation;
    self.xoutofalert = GuestService.xoutofalert;

    self.getInformation();
}]);


