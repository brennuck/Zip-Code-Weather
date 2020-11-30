"use strict";

angular.module("weather").component("weather", {
	templateUrl: "weather/weather.template.html",
	controller: [
		"$http",
        "$scope",
        "$sce",
		function WeatherController($http, $scope, $sce) {
            var self = this;

			$scope.callWeather = function () {
				$http({
					method: "GET",
					url:
						"https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode",
					params: { zip: $scope.zip },
					headers: {
						"x-rapidapi-key":
							"3acd025854mshb88d4616eac0063p19e3a5jsn722c3bcc8795",
						"x-rapidapi-host":
							"us-weather-by-zip-code.p.rapidapi.com",
					},
				}).then((response) => {
                    console.log(response.data);
                    self.warming = response.data;
				});
            };
            
            $scope.cityIcon = $sce.trustAsResourceUrl('../icons/icons8-city-buildings-50.png');
            $scope.tempIcon = $sce.trustAsResourceUrl('../icons/icons8-fahrenheit-symbol-50.png');
            $scope.conditionsIcon = $sce.trustAsResourceUrl('../icons/icons8-sun-50.png');
            $scope.windIcon = $sce.trustAsResourceUrl('../icons/icons8-wind-50.png');
            $scope.timeIcon = $sce.trustAsResourceUrl('../icons/icons8-day-and-night-50.png');
		},
	],
});
