capApp.controller('AnecdotesController', ['UserService', 'AdminService', function (UserService, AdminService) {
    console.log('AnecdotesController created');
    var self = this;
    self.userService = UserService;
    self.adminService = AdminService;

    self.newText = AdminService.newText;
    self.newText.type = 'anecdote';

    self.locations = AdminService.locations;
    self.getAllAnecdotes = AdminService.getAllAnecdotes;
    self.getAllAnecdotes();

    self.saveAssociation = AdminService.saveAssociation;

}]);