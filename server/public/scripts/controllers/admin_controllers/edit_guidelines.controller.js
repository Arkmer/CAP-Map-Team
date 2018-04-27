capApp.controller('EditGuidelinesController', ['UserService', 'AdminService', function (UserService, AdminService) {
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;
    self.locations = AdminService.locations

    self.viewEditInformation = function (information) {
        information.editing = true;
    }

    self.getInformation = AdminService.getInformation;
    self.addInformation = AdminService.addInformation;
    self.editInformation = AdminService.editInformation;
    self.deleteInformation = AdminService.deleteInformation;

    self.getInformation();

    self.isCurrentPage = AdminService.isCurrentPage;
    self.isCurrentPage();

    self.clearLocationInfo = AdminService.clearLocationInfo;


}]);