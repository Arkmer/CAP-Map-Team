capApp.controller('GuestMenuController', ['UserService', 'GuestService', function (UserService, GuestService) {
    var self = this;
    self.userService = UserService;
    self.guestService = GuestService;

}]);