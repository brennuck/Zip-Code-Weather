"use strict";

angular.module("weather").component("weather", {
	templateUrl: "weather/weather.template.html",
	controller: ["$http", "$scope", function WeatherController($scope, $http) {
        $scope.callWeather = function() {
            $http({
                method: "GET",
                url: "https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode",
                params: {zip: '94111'},
                headers: {
                    'x-rapidapi-key': '3acd025854mshb88d4616eac0063p19e3a5jsn722c3bcc8795',
                    'x-rapidapi-host': 'us-weather-by-zip-code.p.rapidapi.com'
                }
            }).then((response) => {
                console.log(response)
            })
            console.log("HELLO")
        }
    }]
});
