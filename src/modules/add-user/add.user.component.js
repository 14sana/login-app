angular
    .module("addUser", [])
        .component('addUser', {
        templateUrl: 'modules/add-user/add.user.html',

        controller: function LoginController(){
            var vm = this;
            vm.addUser= function () {
              //add user code
            } 
        }
    });