capApp.controller('UserController', ['UserService', function(UserService) {
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;
}]);
