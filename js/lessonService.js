angular.module('directivePractice').service('mainSrv',function($http,$q) {

  this.getSchedule = function() {
    return $http({
      method:'GET',
      url:'schedule.json'
    });

  };
});
