capApp.controller('AnecdotesController', ['UserService', 'AdminService', function (UserService, AdminService) {
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.newText = AdminService.newText;
    self.newText.type = 'anecdote';

    self.locations = AdminService.locations;
    self.getAllAnecdotes = AdminService.getAllAnecdotes;
    self.getAllAnecdotes();

    self.saveAssociation = AdminService.saveAssociation;
    self.deleteArtifact = AdminService.deleteArtifact;
    self.getArtifactToEdit = AdminService.getArtifactToEdit;
    
    self.clearArtifact = AdminService.clearArtifact;
    self.clearArtifact();

    self.isCurrentPage = AdminService.isCurrentPage;
    self.isCurrentPage();

    self.clearLocationInfo = AdminService.clearLocationInfo;

}]);