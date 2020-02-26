
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const address = process.argv[2];


if(!address){
    console.log("Cannot provide weather without location");
}

else {
    geocode(address, (error, {latitude, longitude, location}) =>{
        if(error){
            return console.log(error); 
        }
        // we can convert the below code to destructured code where
        //{latitude, longitude} = data , so we dont have to write it as data.latitude and data.longitude
        
        // forecast(data.latitude,data.longitude,(error, forecastdata) => { we remove the dot
       
        forecast(latitude,longitude,(error, forecastdata) => {
            if(error){
                return console.log(error);
            }
    
    
           console.log(location); //remove data.location here
           console.log(forecastdata); 
        });
    });

}



//command = (process.argv[2]);
//console.log(command);