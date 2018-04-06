capApp.controller('EditLocationController', ['UserService', 'AdminService', function (UserService, AdminService) {
    console.log('EditLocationController created');
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.locations = UserService.locations;
    self.getAllLocations = UserService.getAllLocations;
}]);