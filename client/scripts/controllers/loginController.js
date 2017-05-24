myApp.controller('LoginController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
    $scope.user = UserService.user;
    $scope.message = '';
    var userObject = UserService.userObject;


    $scope.login = function() {
      if($scope.user.username === '' || $scope.user.password === '') {
        $scope.message = "Enter your username and password!";
      } else {
        console.log('sending to server...', $scope.user);
        $http.post('/', $scope.user).then(function(response) {
          if(response.data.username) {
            console.log('success: ', response.data);
            userObject.userName = response.data.username;
            userObject.id = response.data.id;
            userObject.memberID = response.data.memberID;
            // location works with SPA (ng-route)
            $location.path('/home');
          } else {
            console.log('failure: ', response);
            $scope.message = "Username or password is incorrect.";
          }
        });
      }
    };

    $scope.registerUser = UserService.registerUser;


  // SENDS USER DEMOGRAPHIC INFO TO SERVER (No username or password)
  $scope.registration = UserService.registration;
  $scope.userDemographics = UserService.userDemographics;


  // REGISTRATION FORM

      // Generate State Dropdown Options
      $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function(state) {
          return {abbrev: state};
       });

      // Generate Gender Dropdown Options
      var comma = ',';
      $scope.genders = ('Female,Male,Trans,Other,Prefer Not to Answer').split(comma).map(function(gender) {
          return {gender: gender};
       });

     // Generate Birth Year Dropdown Options

        $scope.years = [];

        $scope.getYearDropdown = function(){
        var currentYear = new Date().getFullYear();
        console.log(currentYear);
        for(var i = 0; i < 100; i++){
          $scope.years.push(currentYear - i);
        }
        console.log($scope.years);
        return $scope.years;
      };

     // Generate Drugs of Choice Dropdown Options
     $scope.drugs = ('Alcohol,Amphetamine,Benzodiazepines,Cocaine,Crack,Ecstasy,Heroin,Inhalants,Marijuana-Hashish,Methamphetamine,Opiates,PCP,Synthetics,Other').split(comma).map(function(drug) {
         return {drug: drug};
      });

      // Generate Program Payment Options
      $scope.payments = ('Personal Financing,Insurance,Public Assistance,Treatment Program Scholarships').split(comma).map(function(payment) {
          return {payment: payment};
       });

    // Capture Into MemberSchema

    // Capture Into RegistrationSchema

}]);
