capApp.controller('MultimediaFormController', ['UserService', 'AdminService', '$sce', '$mdDialog', 'Lightbox', function (UserService, AdminService, $sce, $mdDialog, Lightbox) {
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.locations = AdminService.locations;

    self.uploadnewPhoto = AdminService.uploadnewPhoto;
    self.uploadNewVideo = AdminService.uploadNewVideo;

    self.saveMultimedia = AdminService.saveMultimedia;

    self.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
    
    self.newMultimedia = AdminService.newMultimedia;
    self.editArtifact = AdminService.editArtifact;

    self.isCurrentPage = AdminService.isCurrentPage;
    self.isCurrentPage();

    self.clearLocationInfo = AdminService.clearLocationInfo;

}]);
