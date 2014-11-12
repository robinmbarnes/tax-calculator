taxCalculatorAppModule.directive('rbErrorClass', function () {

  function getElementAndDescendants(element) {
    element = angular.element(element);
    var children = Array.prototype.slice.call(element.children());
    var elements = [element];
    for(var i = 0, length = children.length; i < length; i++)  {
      elements = elements.concat(getElementAndDescendants(children[i]));
    }

    return elements;
  }

  function doElementsHaveErrors(elements) {
    return elements
      .map(function (element) {
        return element.data('$ngModelController');
      })
      .filter(function (modelController) {
        return modelController !== undefined;
      })
      .map(function (modelController) {
        return modelController.$invalid;
      })
      .reduce(function (isErrorAlreadyFound, isCurrentError) {
        return (isErrorAlreadyFound || isCurrentError);
      }, false);
  }

  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.$watch(function () {
        return doElementsHaveErrors(getElementAndDescendants(element));
      }, function (hasError) {
        if(hasError) {
          element.addClass(attrs.rbErrorClass);
        }  else {
          element.removeClass(attrs.rbErrorClass);
        }
      });
    }
  }
});
