capApp.controller('AdminMenuController', ['UserService', 'AdminService', function (UserService, AdminService) {
    console.log('AdminMenuController created');
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;
    self.logout = UserService.logout;

    self.isCurrentPage = AdminService.isCurrentPage;
    self.isCurrentPage();

    self.clearLocationInfo = AdminService.clearLocationInfo;
}]);