
const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/bef8ee370327b1331cd8aea4b62cc7f1/'+ latitude + ',' + longitude;
    ;
    
    //converting this to short hand syntax would be like - url: url becomes url
    request({url, json :true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather data', undefined);
        }
        else if(body.error){ //instead of response.body.error
            callback('Unable to find location, enter another location', undefined);
        }
        else{
            callback(undefined,  console.log(`${body.daily.data[0].summary}.it is currently ${body.currently.temperature} degrees out and ${body.currently.precipProbability} % chance of rain`));
        }
    })
}



module.exports = forecast;
