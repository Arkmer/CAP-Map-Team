capApp.controller('ManageGuestsController', ['UserService', 'AdminService', function (UserService, AdminService) {
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.deleteGuest = AdminService.deleteGuest;
    self.getAllGuests = AdminService.getAllGuests;
    self.addGuest = AdminService.addGuest;
    self.locations = AdminService.locations;
    
    self.getAllGuests();

    self.isCurrentPage = AdminService.isCurrentPage;
    self.isCurrentPage();

    self.clearLocationInfo = AdminService.clearLocationInfo;

}]);