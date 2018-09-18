
        

     angular
    .module("loginForm", [])
        .controller('LoginController', function () {
            var vm = this;
            vm.login = function () {
                if (vm.username == "sana" && vm.password == "sana")
                    window.location.href ="welcome.html";
                else
                    vm.error = "Wrong Credentials";
        }
});