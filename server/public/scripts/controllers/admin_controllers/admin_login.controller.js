capApp.controller('LoginController', ['$http', '$location', 'UserService', function($http, $location, UserService) {
    var self = this;
    self.user = {
      username: '',
      password: ''
    };
    self.message = '';

    self.login = function () {
      if (self.user.username === '' || self.user.password === '') {
        self.message = "Enter your username and password!";
      } else {
        // console.log('sending to server...', self.user);
        $http.post('/api/user/login', self.user).then(
          function (response) {
            if (response.status == 200) {
              // console.log('success: ', response.data);
              // location works with SPA (ng-route)
              $location.path('/admin/editlocation');
            } else {
              // console.log('failure error: ', response);
              self.message = "Incorrect credentials. Please try again.";
            }
          },
          function (response) {
            // console.log('failure error: ', response);
            self.message = "Incorrect credentials. Please try again.";
          });
      }
    };

}]);
