capApp.controller('PoemsController', ['UserService', 'AdminService', function (UserService, AdminService) {
    console.log('PoemsController created');
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.newText = AdminService.newText;
    self.newText.type = 'poem';
    self.locations = AdminService.locations;
    self.getAllPoems = AdminService.getAllPoems;
    self.getAllPoems();

    self.saveAssociation = AdminService.saveAssociation;
    self.deleteArtifact = AdminService.deleteArtifact;
    self.getArtifactToEdit = AdminService.getArtifactToEdit;
    
    self.clearArtifact = AdminService.clearArtifact;
    self.clearArtifact();
}]);