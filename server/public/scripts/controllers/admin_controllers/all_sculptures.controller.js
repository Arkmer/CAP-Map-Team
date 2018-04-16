capApp.controller('SculpturesController', ['UserService', 'AdminService', function (UserService, AdminService) {
    console.log('SculpturesController created');
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.saveSculpture = AdminService.saveSculpture;
    self.newSculpture = AdminService.newSculpture;

    self.saveAssociation = AdminService.saveAssociation;
    self.deleteArtifact = AdminService.deleteArtifact;

    self.getArtifactToEdit = AdminService.getArtifactToEdit;

    self.clearArtifact = AdminService.clearArtifact;
    self.clearArtifact();

    self.editArtifact = AdminService.editArtifact;

    self.isCurrentPage = AdminService.isCurrentPage;
    self.isCurrentPage();
}]);