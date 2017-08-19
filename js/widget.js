//Change background depending on time of display
var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 10) {
    if (document.body) {
        document.body.background = "img/backgrounds/sunrise.jpg";
    }
}
if (10 <= currentTime && currentTime < 17) {
    if (document.body) {
        document.body.background = "img/backgrounds/sun-is-up.jpg";
    }
}
if (17 <= currentTime && currentTime < 21) {
    if (document.body) {
        document.body.background = "img/backgrounds/sunset.jpg";
    }
}
if (21 <= currentTime && currentTime < 24) {
    if (document.body) {
        document.body.background = "img/backgrounds/night.jpg";
    }
}

if (24 <= currentTime && currentTime < 07) {
    if (document.body) {
        document.body.background = "img/backgrounds/night.jpg";
    }
}

//Get/display weather data and appropriate pic

           $.getJSON("//api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&APPID=fd674d20076b6e22dfc2b10f9599998e",function(json){
                var weatherData = json.weather[0].main;
                var temp = Math.round(json.main.temp);
                $("#Box-weather").append('Today\'\s temperature is: ' + temp + ' ' + 'C' + '<br>');
                $("#Box-weather").append('It is recommended that you bring the following:' + '<br>');
                console.log(weatherData);

                function clothesRoulette () {
                  if (weatherData === 'Clear') {
                    $("#Box-weather").append('<img src="img/weather/Sunglasses.png">');
                  } else if(weatherData === 'Thunderstorm') {
                    $("#Box-weather").append('<img src="img/weather/Raincoat.png">');
                  }  else if (weatherData === 'Rain' || 'Drizzle') {
                    $("#Box-weather").append('<img src="img/weather/Umbrella.jpeg">');
                  } else if (weatherData === 'Snow') {
                      $("#Box-weather").append('<img src="img/weather/Mittens.jpg">');
                  } else if (weatherData === 'Atmosphere') {
                      $("#Box-weather").append('<img src="img/weather/Misc.png">');
                  } else if (weatherData === 'Clouds') {
                      $("#Box-weather").append('<img src="img/weather/Jacket.jpg">');
                  } else if (weatherData === 'Extreme') {
                      $("#Box-weather").append('<img src="img/weather/Skull.jpg">');
                  } else if (weatherData === 'Additional') {
                      $("#Box-weather").append('<img src="img/weather/Misc.png">');
                    }
              };

              clothesRoulette();
          });

//Get/display today's doggo
document.addEventListener('DOMContentLoaded', function() {

    request = new XMLHttpRequest;
    request.open('GET', '//api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cute+dog', true);
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 400) {
          data = JSON.parse(request.responseText).data.image_url;
          console.log(data);
          document.getElementById("imageContainer").innerHTML = '<center><img src = "' + data + '"  title="GIF via Giphy"></center>';
        } else {
          console.log('reached giphy, but API returned an error');
        }
      }
    }
    request.onerror = function() {
      console.log('connection error');
    };

    request.send();

});
