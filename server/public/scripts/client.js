var capApp= angular.module('capApp', ['ngRoute']);

/// Routes ///
capApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('capApp -- config')
  $routeProvider
    .when('/', {
      redirectTo: 'guidelines'
    })
    .when('/guidelines',{
      templateUrl:'views/guest/guidelines.html',
      controller: 'GuidelinesController as vm',
    })
    .when('/events', {
      templateUrl: 'views/guest/guest_events.html',
      controller: 'GuestEventsController as vm',
    })
    .when('/map', {
      templateUrl: 'views/guest/map.html',
      controller: 'MapController as vm',
    })
    .when('/artifacts/:locationid', {
      templateUrl: 'views/guest/dot_artifacts.html',
      controller: 'DotArtifactsController as vm',
    })
    .when('/email', {
      templateUrl: 'views/guest/email_signup.html',
      controller: 'EmailSignupController as vm',
    })
    .when('/menu', {
      templateUrl: 'views/guest/guest_menu.html',
      controller: 'GuestMenuController as vm',
    })
    


    //ADMIN VIEWS HERE
    .when('/admin', {
      templateUrl: '/views/admin/admin_login.html',
      controller: 'LoginController as vm',
    })
    .when('/admin/menu', {
      templateUrl: '/views/admin/admin_menu.html',
      controller: 'AdminMenuController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/addlocation', {
      templateUrl: '/views/admin/add_location.html',
      controller: 'AddLocationController as vm', 
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/namelocation/:locationid', {
      templateUrl: '/views/admin/name_location.html',
      controller: 'NameLocationController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/editlocation', {
      templateUrl: '/views/admin/edit_location.html',
      controller: 'EditLocationController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/poems', {
      templateUrl: '/views/admin/artifacts/all_poems.html',
      controller: 'PoemsController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/anecdotes', {
      templateUrl: '/views/admin/artifacts/all_anecdotes.html',
      controller: 'AnecdotesController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/writings', {
      templateUrl: '/views/admin/artifacts/all_writings.html',
      controller: 'WritingsController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/multimedia', {
      templateUrl: '/views/admin/artifacts/all_multimedia.html',
      controller: 'MultimediaController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/sculptures', {
      templateUrl: '/views/admin/artifacts/all_sculptures.html',
      controller: 'SculpturesController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/textform', {
      templateUrl: '/views/admin/artifacts/text_form.html',
      controller: 'TextFormController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/multimediaform', {
      templateUrl: '/views/admin/artifacts/multimedia_form.html',
      controller: 'MultimediaFormController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/manageartifacts', {
      templateUrl: '/views/admin/manage_artifacts.html',
      controller: 'ManageArtifactsController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/editevents', {
      templateUrl: '/views/admin/edit_events.html',
      controller: 'EditEventsController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/manageusers', {
      templateUrl: '/views/admin/manage_users.html',
      controller: 'ManageUsersController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/manageadmins', {
      templateUrl: '/views/admin/manage_admins.html',
      controller: 'ManageAdminsController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    .when('/admin/manageguests', {
      templateUrl: '/views/admin/manage_guests.html',
      controller: 'ManageGuestsController as vm',
      // resolve: {
      //   getuser: function (UserService) {
      //     return UserService.getuser();
      //   }
      // }
    })
    // .when('/register', {
    //   templateUrl: '/views/templates/register.html',
    //   controller: 'LoginController as vm'
    // })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    // .when('/info', {
    //   templateUrl: '/views/templates/info.html',
    //   controller: 'InfoController as vm',
    //   resolve: {
    //     getuser : function(UserService){
    //       return UserService.getuser();
    //     }
    //   }
    // })
    .otherwise({
      template: '<h1>404</h1>'
    });
}]);
