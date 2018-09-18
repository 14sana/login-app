angular
    .module("loginForm", [])
        .component('myLogin', {
        templateUrl: 'modules/login/login.template.html',

        controller: function LoginController(){
            var vm = this;
            vm.login = function () {
                if (vm.username == "sana" && vm.password == "sana")
                    alert('welcome');
                else
                    vm.error = "Wrong Credentials";

            } 
        }
    });