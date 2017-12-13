//define angular application
var dec =  angular.module('demo',[]);
    
/* controllers */
dec.controller('index', function($scope){
    $scope.welcome = "Hi there.";
    $scope.portfolio = "A Personal Portfolio";
    $scope.location = "Manila";

});

/* skills array */
dec.controller('skillsController', function($scope){
    $scope.skills = new Array("HTML", "CSS", "PHP", "MYSQLi", "Java", "New set of skills are yet to be unlocked!");
});

/* form controller */
dec.controller('formController', function($scope){
                    
    $scope.name = "";
    $scope.email = "";
    $scope.message = "";
});