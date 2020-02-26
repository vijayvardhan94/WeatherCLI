
const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoidGFkaW1ldHYiLCJhIjoiY2s2cjVyb2kxMDJuMzNsbGxhOTZxdnE4cCJ9.nVAx_it2t4hbJWuVwuMKlw&limit=500';
    
    request({url, json :true }, (error, { body }) => {
        if(error) {
            callback('Unable to obtain location data', undefined);
        }
        else if(body.features.length === 0){
            callback('Unable to find location, enter another location', undefined);
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[1], //remove all responses because of {body}
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}



module.exports = geocode;
