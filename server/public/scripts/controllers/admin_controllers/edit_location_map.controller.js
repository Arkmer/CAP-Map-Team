capApp.controller('EditMapLocationController', ['UserService', 'AdminService', '$routeParams', function (UserService, AdminService, $routeParams) { 
    let self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.locations = AdminService.locations;


}]);