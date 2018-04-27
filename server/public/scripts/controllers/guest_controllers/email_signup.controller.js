capApp.controller('EmailSignupController', ['UserService', 'GuestService', 'AdminService', function (UserService, GuestService, AdminService) {
    var self = this;
    self.userService = UserService;
    self.guestService = GuestService;

    self.addGuest = GuestService.addGuest;
}]);