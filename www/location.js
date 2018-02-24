// This is a JavaScript file

document.addEventListener("deviceready", function(){
   
     var onSuccess = function(position){
      document.getElementById("show_position").innerHTML = 
       "Longitude:" + position.coords.longitude + "\n" +  // 経度
       "Latitude:" + position.coords.latitude;  // 緯度
     };
    
     var onError = function(message){
      alert("Failed to get the current position.");
     };
    
     var option = {
      frequency: 5000,
      timeout: 6000
     };
     
    navigator.geolocation.getCurrentPosition(onSuccess, onError, option);
});