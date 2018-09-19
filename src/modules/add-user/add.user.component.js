angular
    .module("addUser", [])
        .component('addUser', {
        templateUrl: 'modules/add-user/add.user.html',

        controller:['$http', function addController($http){
            var self = this;
    
            self.addUser = function () {
              
                
                var dataObj = {
                    name :  self.name,
                  
                    username : self.username,
                    password : self.password  ,
                    role : self.role
    
            };
           $http.post('http://localhost:3000/users', dataObj).
            then(function(data, status, headers, config) {
                self.message = data;
            },
            function(data, status, headers, config) {
                alert( "failure message: " + JSON.stringify({data: data}));
            });
            } 
        }
        ]});