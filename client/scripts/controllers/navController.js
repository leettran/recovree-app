myApp.controller('NavController', ['$scope', '$http', '$location', '$mdDialog', 'UserService', function($scope, $http, $location, $mdDialog, UserService) {
    $scope.user = UserService.user;
    $scope.$location = $location;
    $scope.logout = logout;
    $scope.sessionObject = UserService.sessionObject;
    $scope.reflections = $scope.sessionObject.allReflections;

    function logout(user) {
        user.username = '';
        user.password = '';
        UserService.logout(user);
    }

    $scope.goHome = goHome;

    function goHome() {
        $location.path('/home');
    }

    $scope.goToGratitude = function() {
        $scope.sessionObject = UserService.sessionObject;
        $scope.reflections = $scope.sessionObject.allReflections;
        console.log('Gratitude button clicked!');
        $location.path('/gratitude');
        console.log($scope.reflections);
    };

    $scope.goToResources = function() {
        console.log('Resources button clicked!');
        $location.path('/resources');
    };

    $scope.goToContactUs = function() {
        console.log('Contact Us button clicked!');
        $location.path('/contact-us');
    };


    $scope.showConfirm = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
            .title('Are you sure you want to logout?')
            .targetEvent(ev)
            .ok('Yes')
            .cancel('Go Back');

        $mdDialog.show(confirm).then(function() {
            $scope.logout($scope.user, $scope.logout);
        }, function() {});
    };


}]);