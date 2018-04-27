capApp.service('UserService', ['$http', '$location', function ($http, $location) {
  var self = this;
  self.userObject = {};

  self.getuser = function () {
      $http.get('/api/user').then(function (response) {
        if (response.data.username) {
          self.userObject.userName = response.data.username;
        } else {
          $location.path("/admin/menu");
        }
      }, function (response) {
        $location.path("/admin");
      });
    },

    self.logout = function () {
      $http.get('/api/user/logout').then(function (response) {
        $location.path("/admin");
      });
    }
}]);