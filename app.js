window.addEventListener('load', ()=> {
    let long;
    let lat;
    
    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureDescription = document.querySelector(".temperature-description");
    let locationTimezone = document.querySelector(".location-timezone");
    let iconImage = document.querySelector(".icon");
    let Town = document.querySelector(".town");
    let Country = document.querySelector(".country");
    
  //  let temperatureDegree = document.querySelector(".temperature-degree");

    if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(position =>{
                long = position.coords.longitude;
                lat = position.coords.latitude;
                console.log(long,lat);
               const api =`https://api.weatherapi.com/v1/current.json?key=6fff7b02a4e34935abe155920212307&q=${lat},${long}`;
               fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then( data =>{
                    console.log(data);
                    const {temp_c} = data.current;
                    
                    temperatureDegree.textContent = temp_c;
                    
                    const { name, country} = data.location;
                    Town.textContent = name , country;
                    Country.textContent = country;


                    const {text,icon} = data.current.condition;
                    temperatureDescription.textContent = text;
                    iconImage.src = icon;
                });
           });

           
    }
    
});
