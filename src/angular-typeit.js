(function () {
	angular.module('ab.Typeit', []).directive('abTypeit', function() {
		return {
			restrict: 'A',
			scope: {
				typeitStrings: '=abTypeit',
				typeitLoop: '=',
				typeitLoopDelay: '=',
				typeitBreakLines: '=',
				typeitSpeed: '=',
				typeitLifeLike: '=',
				typeitCursor: '=',
				typeitCursorSpeed: '=',
				typeitStartDelay: '=',
				typeitBreakDelay: '='
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
						cursorSpeed: $scope.typeitCursorSpeed,
						startDelay: $scope.typeitStartDelay,
						breakDelay: $scope.typeitBreakDelay
					});
				} catch (e) {
					console.error('OH NO! angular-typeit requires typeit.js on your page - do you have it loaded?');
				}
			}
		};
	});
})();
