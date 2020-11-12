'use strict';

angular.module('core.weather').factory('Weather', ['$resource',
    function($resource) {
        return $resource('https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode', {}, {
            query: {
                method: 'GET',
                params: {zip: '94111'},
                headers: {
                    'x-rapidapi-key': '3acd025854mshb88d4616eac0063p19e3a5jsn722c3bcc8795',
                    'x-rapidapi-host': 'us-weather-by-zip-code.p.rapidapi.com'
                },
                isArray: true
            }
        })
    }
])
