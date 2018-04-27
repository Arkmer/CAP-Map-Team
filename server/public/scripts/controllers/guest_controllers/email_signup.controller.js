capApp.controller('EmailSignupController', ['UserService', 'GuestService', function (UserService, GuestService) {
    console.log('EmailSignupController created');
    var self = this;
    self.userService = UserService;
    self.guestService = GuestService;
    // self.adminService = AdminService;

    self.addGuest = GuestService.addGuest;
}]);