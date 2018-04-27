capApp.controller('IndividualLocationController', ['UserService', 'AdminService', '$routeParams', '$sce', function (UserService, AdminService, $routeParams, $sce) {
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.locations = AdminService.locations;
    self.indLocation = AdminService.indLocation;
    self.getIndividualLocation = AdminService.getIndividualLocation;
    self.deleteLocation = AdminService.deleteLocation;

    let locationid = $routeParams.locationid;
    self.getIndividualLocation(locationid);
    

    self.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
      }

    self.deleteAssociation = AdminService.deleteAssociation;
    self.saveAssociation = AdminService.saveAssociation;
    self.isMainPhoto = AdminService.isMainPhoto;
    self.getArtifactToEdit = AdminService.getArtifactToEdit; 

    self.isCurrentPage = AdminService.isCurrentPage;
    self.isCurrentPage();

    self.isMainPhoto = AdminService.isMainPhoto;

    self.clearLocationInfo = AdminService.clearLocationInfo;
    self.changeEdit = AdminService.changeEdit;

}]);