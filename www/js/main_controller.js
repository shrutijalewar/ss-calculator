(function(){
  'use strict';

  angular.module('ss-calculator')
    .controller('MainCtrl', ['$scope', function($scope){

      $scope.display = '0';

      $scope.answer = function(){
        var x = $scope.memory * 1,
            y = $scope.display * 1,
          ans = 0;

        switch($scope.operator){
          case '+' :
            ans = x + y;
            break;
          case '-' :
            ans = x - y;
            break;
          case '*' :
            ans = x * y;
            break;
          case '/' :
            ans = x / y;
            break;
        }
        $scope.display = ans;
        $scope.operator = $scope.memory = '';
      };
      $scope.calc = function(op){
        $scope.operator = op;
        $scope.memory = $scope.display;
        $scope.clear();
      };
      $scope.clear = function(){
        $scope.display = '0';
      };

      $scope.number = function(num){
        num = num.toString();
        if(num === '.' && $scope.display.indexOf('.') > -1) {return;}
        if($scope.display === '0' && num !== '.'){
          $scope.display = num;
        }else{
        $scope.display  += num;
        console.log(num);
      }
      };
    }]);
})();
