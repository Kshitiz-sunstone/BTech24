let key="0bab7dd1bacc418689b143833220304";
let baseUrl= "http://api.weatherapi.com/v1"
// http://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=Lucknow
// http://api.weatherapi.com/v1/current.json?key0bab7dd1bacc418689b143833220304&q=Kanpur
function getWeather(){
    let cityName=document.getElementById('city').value;
    console.log(cityName);
    let URL=baseUrl+"/current.json"+"?key="+key+"&q="+cityName;
    fetch(URL).then(res=>res.json()).then(data=>{console.log(data)
        document.getElementById('result').innerHTML=data.current.feelslike_c
    })
    
}
