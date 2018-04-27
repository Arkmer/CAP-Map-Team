capApp.controller('TextFormController', ['UserService', 'AdminService', function (UserService, AdminService) {
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.locations = AdminService.locations;
    self.newText = AdminService.newText;
    self.saveText = AdminService.saveText;

    self.editText = AdminService.editText;
    self.editArtifact = AdminService.editArtifact;

    self.isCurrentPage = AdminService.isCurrentPage;
    self.isCurrentPage();

    self.clearLocationInfo = AdminService.clearLocationInfo;

}]);