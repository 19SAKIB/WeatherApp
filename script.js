 // const link = `https://api.openweathermap.org/data/2.5/weather?q=muzaffarnagar&appid=777aa28a239dde3541a0d4c0ae233e10`;
          const link = `https://api.weatherapi.com/v1/current.json?key=011757d9f2604792a4c171552232709&q=Muzaffarnagar&aqi=no`;
          const request = new XMLHttpRequest();
          request.open('GET', link, true);
          request.onload = function () {
               let obj = JSON.parse(this.response);

               document.getElementById('location').innerHTML = obj.location.name;
               document.getElementById('weather').innerHTML = obj.current.condition.text;
               document.getElementById('tem').innerHTML = obj.current.temp_c;
               document.getElementById('icon').src = obj.current.condition.icon;
          }

          request.send();
  
