angular.module('directivePractice')
.directive('lessonHider', function() {

  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function( $scope, mainSrv ) {
      $scope.getSchedule = mainSrv.getSchedule();
    },
    link: function( scope, element, attributes ) {

      scope.getSchedule.then(function( response ) {
        scope.schedule = response.data;

        scope.schedule.forEach(function( scheduleDay ) {
          if (scheduleDay.lesson === scope.lesson) {
            element.css('text-decoration', 'line-through');
            scope.lessonDay=scope.schedule.weekday;
            return;
          }
        });
      });

    }
  };

});
//`$scope` of your directive, html element that wraps your directive, object containing all the properties and values of the attributes on
//your directive in the DOM

// Isolate Scope cuts the directive off from the parent controller (lessonCtrl in
// this case) and only allows the directive to use data we explicitly pass to it.
/*
scope: {
  twoWayDataBinding: '=',
  stringBinding: '@',
  functionBinding: '&'
}

*/
