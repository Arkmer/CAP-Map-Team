capApp.controller('EmailSignupController', ['UserService', 'GuestService', 'AdminService', function (UserService, GuestService, AdminService) {
    var self = this;
    self.userService = UserService;
    self.guestService = GuestService;
    self.adminService = AdminService;

    self.addGuest = GuestService.addGuest;
}]);