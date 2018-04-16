capApp.controller('ManageArtifactsController', ['UserService', 'AdminService', function (UserService, AdminService) {
    console.log('ManageArtifactsController created');
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.locations = AdminService.locations;
    self.locations.currentLocationId = '';

    self.isCurrentPage = AdminService.isCurrentPage;
    self.isCurrentPage();

}]);