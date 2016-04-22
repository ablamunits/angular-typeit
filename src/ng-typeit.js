(function () {
	angular.module('ngTypeit', []).directive('ngTypeit', function() {
		return {
			restrict: 'A',
			scope: {
				typeitStrings: '=',
				typeitLoop: '=',
				typeitBreaklines: '=',
				typeitSpeed: '=',
			},
			controller: function ($scope, $element, $attrs) {
				var typeItElement: any = $($element);

				try {
					typeItElement.typeIt({
						strings: $scope.typeitStrings || [],
						loop: $scope.typeitLoop || false,
						breakLines: $scope.typeitBreaklines || false,
						speed: $scope.typeitSpeed || 50
					});
				} catch (e) {
					console.error('ngTypeit requires typeit.js - do you have it loaded?');
				}
			}
		};
	});
})();
