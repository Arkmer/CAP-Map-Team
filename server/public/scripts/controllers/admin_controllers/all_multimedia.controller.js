capApp.controller('MultimediaController', ['UserService', 'AdminService', '$sce', function (UserService, AdminService, $sce) {
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
    
    self.getArtifactToEdit = AdminService.getArtifactToEdit;
    
    self.clearArtifact = AdminService.clearArtifact;
    self.clearArtifact();

    self.isCurrentPage = AdminService.isCurrentPage;
    self.isCurrentPage();

    self.isMainPhoto = AdminService.isMainPhoto;
    console.log(self.isMainPhoto);

    self.clearLocationInfo = AdminService.clearLocationInfo;

}]);