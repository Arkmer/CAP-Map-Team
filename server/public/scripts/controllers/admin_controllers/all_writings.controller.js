capApp.controller('WritingsController', ['UserService', 'AdminService', function (UserService, AdminService) {
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.newText = AdminService.newText;
    self.newText.type = 'writing';
    self.locations = AdminService.locations;
    self.getAllWritings = AdminService.getAllWritings;
    self.getAllWritings();

    self.saveAssociation = AdminService.saveAssociation;
    self.deleteArtifact = AdminService.deleteArtifact;
    self.editText = AdminService.editText
    self.getArtifactToEdit = AdminService.getArtifactToEdit;
    
    self.clearArtifact = AdminService.clearArtifact;
    self.clearArtifact();

    self.isCurrentPage = AdminService.isCurrentPage;
    self.isCurrentPage();

    self.clearLocationInfo = AdminService.clearLocationInfo;

}]);