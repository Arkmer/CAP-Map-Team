capApp.controller('ManageAdminsController', ['UserService', 'AdminService', '$http', '$location', function (UserService, AdminService, $http, $location) {
    console.log('ManageAdminsController created');
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.locations = AdminService.locations;

    self.registerUser = function () {
        if (self.user.username === '' || self.user.password === '' || self.user.first_name === '' || self.user.last_name === '' || self.user.email === '') {
          self.message = "Please complete all fields.";
        } else {
          console.log('sending to server...', self.user);
          $http.post('/api/user/register', self.user).then(function (response) {
            console.log('success');
            self.getAllAdmins();
            $location.path('/admin/manageadmins');
          },
            function (response) {
              console.log('error');
              self.message = "Something went wrong. Please try again."
            });
        }
      }

    self.getAllAdmins = AdminService.getAllAdmins;
    
    self.getAllAdmins();

    self.deleteAdmin = AdminService.deleteAdmin;

}]);