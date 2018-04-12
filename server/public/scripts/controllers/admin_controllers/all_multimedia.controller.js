capApp.controller('MultimediaController', ['UserService', 'AdminService', '$sce', function (UserService, AdminService, $sce) {
    console.log('MultimediaController created');
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.locations = AdminService.locations;
    self.newMultimedia = AdminService.newMultimedia

    self.getAllMultimedia = AdminService.getAllMultimedia;
    self.getAllMultimedia();

    self.saveAssociation = AdminService.saveAssociation;

    self.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
      }

    self.deleteArtifact = AdminService.deleteArtifact;
    
    self.getArifactToEdit = AdminService.getArifactToEdit;
    
    self.clearArtifact = AdminService.clearArtifact;
    self.clearArtifact();

}]);