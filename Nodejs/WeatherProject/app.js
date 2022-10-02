const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    const city = req.body.cityName;
    const apiKey = 'ce70eb7b004cea07d50de7389ac5c284'
    const unit = 'metric';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=' + unit + '';
    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const wDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const urlIcon = 'https://openweathermap.org/img/wn/' + icon + '@2x.png'
            res.write('<p>The weather is currently ' + wDescription + '</p>');
            res.write('<h1>The temperature in ' + city + ' is ' + temp + ' degrees Celcius.</h1>');
            res.write('<img src=' + urlIcon + ' ></img>');
            res.send();
        })
    })
});






app.listen(3000, function () {
    console.log('Server is running on port 3000.');
});

