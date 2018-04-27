capApp.controller('ManageAdminsController', ['UserService', 'AdminService', '$http', '$location', function (UserService, AdminService, $http, $location) {
  var self = this;
  self.userService = UserService;
  self.adminService = AdminService;

  self.locations = AdminService.locations;

  self.registerUser = function () {
    if (self.user.username === '' || self.user.password === '' || self.user.first_name === '' || self.user.last_name === '' || self.user.email === '') {
      self.message = "Please complete all fields.";
    } else {
      $http.post('/api/user/register', self.user).then(function (response) {
          self.getAllAdmins();
          swal("Administrator added.", "", "success");
          self.user = {};
          $location.path('/admin/manageadmins');
        },
        function (response) {
          self.message = "Something went wrong. Please try again."
        });
    }
  }

  self.getAllAdmins = AdminService.getAllAdmins;

  self.getAllAdmins();

  self.deleteAdmin = AdminService.deleteAdmin;

  self.isCurrentPage = AdminService.isCurrentPage;
  self.isCurrentPage();

  self.clearLocationInfo = AdminService.clearLocationInfo;

}]);