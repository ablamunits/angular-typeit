(function () {
	angular.module('ngTypeit', []).directive('ngTypeit', function() {
		return {
			restrict: 'A',
			scope: {
				typeitStrings: '=',
				typeitLoop: '=',
				typeitLoopDelay: '=',
				typeitBreakLines: '=',
				typeitSpeed: '=',
				typeitLifeLike: '=',
				typeitCursor: '=',
				typeitCursorSpeed: '='
			},
			controller: function ($scope, $element, $attrs) {
				var typeItElement = $($element);

				try {
					typeItElement.typeIt({
						strings: $scope.typeitStrings,
						loop: $scope.typeitLoop,
						loopDelay: $scope.typeitLoopDelay,
						breakLines: $scope.typeitBreakLines,
						speed: $scope.typeitSpeed,
						lifeLike: $scope.typeitLifeLike,
						cursor: $scope.typeitCursor,
						cursorSpeed: $scope.typeitCursorSpeed
					});
				} catch (e) {
					console.error('OH NO! ngTypeit requires typeit.js on your page - do you have it loaded?');
				}
			}
		};
	});
})();
