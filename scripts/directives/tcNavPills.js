taxCalculatorAppModule.directive('tcNavPills', function () {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    require: 'ngModel',
    templateUrl: '/scripts/directives/templates/tcNavPills.html',
    link: function (scope, element, attrs) {
      var navPills = element.children();

      scope.$watch(attrs.ngModel, function (newValue) {
        for(var i = 0, length = navPills.length; i < length; i++) {
          var pill = angular.element(navPills[i]);
          if(newValue == pill.attr('data-value')) {
            pill.addClass('active');
          } else {
            pill.removeClass('active');
          }
        }
      });

      for(var i = 0, length = navPills.length; i < length; i++) {
        var pill = angular.element(navPills[i]);
        angular.element(pill.find('a')[0]).on('click', function (e) {
          e.preventDefault();
        });
        (function (pill) {
          pill.on('click', function () {
            scope.$apply(function () {
              scope[attrs.ngModel] = pill.attr('data-value');
              return false;
            });
          });
        }(pill));
      }
    }
  };
});
