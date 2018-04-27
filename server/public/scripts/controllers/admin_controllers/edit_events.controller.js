capApp.controller('EditEventsController', ['UserService', 'AdminService', function (UserService, AdminService) {
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.locations = AdminService.locations;
    self.locations.newEvent.title = AdminService.locations.newEvent.title;
    self.getEvents = AdminService.getEvents;
    self.addEvent = AdminService.addEvent;
    self.editEvent = AdminService.editEvent;
    self.deleteEvent = AdminService.deleteEvent;
    self.emptyEventsInputs = AdminService.emptyEventsInputs;
    self.viewEditEvents = AdminService.viewEditEvents;

    self.getEvents();

    self.uploadnewPhoto = AdminService.uploadnewPhoto;

    self.isCurrentPage = AdminService.isCurrentPage;
    self.isCurrentPage();

    self.clearLocationInfo = AdminService.clearLocationInfo;

}]);