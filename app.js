let button = document.querySelector('.submit');
let input = document.querySelector('.inputValue');
let names = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');


button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=60eb8beecedbecba521dd64a4f13333e')
     .then(response => response.json())
     .then(data =>{
         let nameValue = data['name'];
         let tempValue = data['main']['temp'];
         let descValue = data['weather'][0]['description'];
         names.innerHTML = nameValue;
         temp.innerHTML = tempValue;
         desc.innerHTML = descValue;

     }
        )
  
     .catch(err=> alert("Wrong city name"))

     

})
