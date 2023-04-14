
async function callApis(city){
    const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=a345dbedbe9946a4999223617230804&q=${city}&aqi=no`);
    const result= await response.json();
    await console.log(result);
   
    const cityName=document.getElementById("cityName");
    const localTime=document.getElementById("local-time");
    const cloud=document.getElementById("cloud");
    const humidity=document.getElementById("humidity");
    const windMph=document.getElementById("wind-mph");
    
    const theme=document.getElementById("image");
    const body=document.getElementsByTagName("body")[0];
    if(result.current.is_day===0){
        body.className="night";
        theme.src="moon.png";
        
    }else{
        body.className="day";
        theme.src="sun.png";
    }
    cityName.innerHTML=`${result.location.name}: ${result.current.temp_c} °C`;
    localTime.innerHTML=`LOCAL TIME:  ${result.location.localtime}`;
    cloud.innerHTML=`CLOUDS: ${result.current.cloud}`;
    humidity.innerHTML=`HUMIDITY: ${result.current.humidity}`;
    windMph.innerHTML=`WIND: ${result.current['wind_mph']} MPH`;


}


const btnSearch=document.getElementById("btnSearch");


btnSearch.addEventListener("click",async function (){
    let city=document.getElementById("search-bar").value;
    callApis(city);
});
(()=>{
    callApis("karachi")
})();
