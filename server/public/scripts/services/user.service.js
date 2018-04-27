capApp.service('UserService', ['$http', '$location', function($http, $location){
  var self = this;
  self.userObject = {};
  

  self.getuser = function(){
    $http.get('/api/user').then(function(response){
        if(response.data.username){
            // user has a curret session on the server
            self.userObject.userName = response.data.username;
            // console.log('UserService -- getuser -- User Data: ', self.userObject.userName);
        }else{
            // console.log('UserService -- getuser -- failure');
            // user has no session, bounce them back to the login page
            $location.path("/admin/menu");
        }
    },function(response){
      // console.log('UserService -- getuser -- failure: ', response);
      $location.path("/admin");
    });
  },

  self.logout = function(){
    $http.get('/api/user/logout').then(function(response){
      $location.path("/admin");
    });
  }
}]);