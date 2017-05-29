myApp.controller('AdminExportController', ['$scope', '$http', '$location', 'AdminService', function($scope, $http, $location, AdminService) {
  console.log('AdminExportController sourced!');

  $scope.demographicExport = function() {
    console.log('demographicExport button clicked!');
    AdminService.getRegistrationInfo();
  };

  $scope.reflectionExport = function() {
    console.log('reflectionExport button clicked!');
    AdminService.getReflections();

  };
  $scope.adminObject = AdminService.adminObject;

  AdminService.countMembers();
  AdminService.countReflectionsByDay();
  // AdminService.buildAdminGraphs();

  $scope.adminObject = AdminService.adminObject;
}]); //end controller
