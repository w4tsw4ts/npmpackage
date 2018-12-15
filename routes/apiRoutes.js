module.exports = function (app) {
    var axios = require("axios");
    var cityArray = require("../data/citys");

    // - Add 4 HTTP routes to the app object:
    // 	- GET using "api/weather" as the path will return a list of weather data for the cities in the current list/array with their weather data
    app.get("/api/weather", function (req, res) {
        let cityRes = [];
        console.log(cityArray);
        let i = 0;
        getWeather(cityArray,i);
        function getWeather(cityArray, i) {
            // console.log(cityArray);
            url = `https://api.openweathermap.org/data/2.5/weather?q=${cityArray[i]}&appid=0959df81750d3fc77a676bf4f3d2ac51`;
            // console.log(url);
            axios.get(url)
                .then(function (response) {
                    // console.log(response.data);
                    console.log('--------------------------------------------------------------------------')
                    cityRes.push(response.data);
                    console.log(cityRes);
                    i++;
                    if (i < cityArray.length) {
                        getWeather(cityArray, i);
                    } else {
                        return res.json(cityRes);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    return error;
                });

        }
        // return res.json(cityRes);
    });

    // // 	- POST using "api/weather" as the path will add a city/location to the list. Each entry should contain the following information: id (unique integer), city/location, unit format (standard, metric, or imperial)
    // app.post("api/weather", function (req, res) {
    //     // Add post function here.
    // })

    // // 	- UPDATE "PUT BILLY" using "api/weather" as the path will receive a JSON payload with the id of the place which will be updated, the new location and new metric values, then return the new place JSON data
    // app.update("api/weather")

    // // 	- DELETE using "api/weather/:id" as the path will remove an entry from the list, and return a boolean (true if successful, false if unsuccessful)

};