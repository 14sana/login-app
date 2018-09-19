angular
    .module("profileForm", [])
        .component('myProfile', {
        template: 'TBD: Detail view for <span>{{$ctrl.name}}</span>',
        controller:['$routeParams', function ProfileController($routeParams){
           var self=this;
            self.name = $routeParams.result;
       
       alert($routeParams.result);
       
       
        }
    ]});
