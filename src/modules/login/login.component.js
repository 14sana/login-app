angular
    .module("loginForm", [])
        .component('myLogin', {
        templateUrl: 'modules/login/login.template.html',

        controller:['$http','$routeParams', function LoginController($http,$routeParams){
            var vm = this;
            vm.login = function () {
                if (vm.username == "sana" && vm.password == "sana")
                window.location.href = "#!/adduser";
                else {
                    $http.get('http://localhost:3000/users')
                    .then(function(response) {
                     var   obj = response.data;
                        for (i = 0; i < obj.length; i++) {
                            result = obj[i];

                             if (vm.username == result.username && vm.password == result.password)
                                window.location.href = "#!/profile/"+result.name;
                            else
                                self.error = "Incorrect Credentials!!"
                        }
                    });
                }
                 

            } 


          
        }
        ]});