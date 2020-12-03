"use strict";

angular.module("zipCodeWeatherApp").config([
	"$routeProvider",
	function config($routeProvider) {
		$routeProvider
			.when("/weather", {
				template: "<weather></weather>",
			})
			.otherwise("/weather");
	},
]);
