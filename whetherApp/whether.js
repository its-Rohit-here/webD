let mylocatonAccess=document.querySelector(".grantBtn");
const mylocation=document.querySelector(".myLocation");
const wholeInfoDisplay=document.querySelector(".LocationWhether");
const PermissionBox=document.querySelector(".grantAccessBox");
const otherCityBox=document.querySelector(".searchLocation");
const SearchBoxCity=document.querySelector(".SearchedLocationWhether");
const tabSection=document.querySelector(".tab-section");
const locationText=document.querySelector(".cityDescription");
const flag=document.querySelector(".countryFlag");
const tempValue=document.querySelector(".tempValue");
const btnSearch=document.querySelector(".SubmitOtherLocationbtn");
const input=document.querySelector(".searchCityinput");

const windS=document.querySelector('.ws');
const cloudI=document.querySelector('.ci');
const humidity=document.querySelector('.h');

let lat;
let lon;



mylocatonAccess.addEventListener('click',getMyLocation());




function getMyLocation(){

  const successCallback = (position) => {
      PermissionBox.classList.add("Invisible");
      wholeInfoDisplay.classList.remove("Invisible");
      tabSection.classList.remove("Invisible");
      // console.log(position.coords.latitude);
      // console.log(position.coords.longitude);
     lat=position.coords.latitude;
      lon=position.coords.longitude;     
      
       getmycurrentdata();
    };

    const errorCallback = (error) => {
      console.log(error);
    };
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
 
  }


const API_KEY='af2530d9ef53a19b9a98063699d3971f'

// let URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

let res;
let data;
let countryCode;


  async function getmycurrentdata(){
    console.log(lat);
          console.log(lon);
          let mylat=lat;
          let mylon=lon;
          console.log(mylat);
          console.log(mylon);
         res= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylon}&appid=af2530d9ef53a19b9a98063699d3971f&units=metric`);
        // res= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=58.6&lon=86.6&appid=af2530d9ef53a19b9a98063699d3971f&units=metric`);
  
  data = await res.json();  //json ko js object mein conversion
  console.log(data);
  locationText.innerHTML=data.name + " , "+ data.sys.country;
  // countryCode=data.sys.country;
  
  let c = await fetch('https://dog.ceo/api/breeds/image/random');
  let m=await c.json();
  // let k=await c.blob();
  // const imageObjectURL = URL.createObjectURL(k);
  flag.src=m.message;
  // console.log(flag.src);
  // console.log(c);
  
  tempValue.innerHTML=data.main.temp+" C";
  windS.innerHTML=data.wind.speed+"km/hr";
  humidity.innerHTML=data.main.humidity+" %";

cloudI.innerHTML=data.clouds.all+" %";

  
  }


  otherCityBox.addEventListener("click", ()=>{
    SearchBoxCity.classList.remove("SpaceOccupiedInvisible");
    mylocation.classList.remove("active");
    // alert("message");
    otherCityBox.classList.add("active");
});


// function getSearchedCityInfo(){
//     mylocation.classList.remove("active");
//     SearchBoxCity.classList.remove("Invisible");
//     otherCityBox.classList.add("active");
// }

mylocation.addEventListener("click",()=>{
    mylocation.classList.add("active");
    otherCityBox.classList.remove("active");
    SearchBoxCity.classList.add("SpaceOccupiedInvisible");
    getLocation();
});

// const getMytab =()=>{
//     mylocation.classList.add("active");
//     otherCityBox.classList.remove("active");
//     SearchBoxCity.classList.add("SpaceOccupiedInvisible");
// }














btnSearch.addEventListener('click',()=>{

let variable =input.value;
  console.log(input.value);
if(variable==""){
  console.log('helo');
}

else{
  gettingData(variable);
}



async function gettingData(variable){
  let fetched= await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${variable}&appid=5b1f841fba561dd9258470943433fbcb`);

  let pure=await fetched.json();
  console.log(pure);

  lat=pure[0].lat;
  lon=pure[0].lon;

  console.log(lat);
  console.log(lon);
  getmycurrentdata();
}
});





























// // let box=document.getElementById('hello');

// // const { json } = require("express/lib/response");

// // // async function getapi(){
// // //     const url=`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;
// // //     const response = await fetch(url);
// // //     const data= await response.json();
// // //     console.log(data);
// // //     box.innerText=`${data.current_weather.temperature}`;
// // // }
// // // getapi();



// // let data = {"squadName":"Super hero",
// //  "squadhomeTown": "Metro City",
// //  "formed": 2016,
// //  "secretBase":"Super tower"};

// // // const res= JSON.parse('{"name":"John", "age":30, "city":"New York"}');
// // async function getdata(data){
// //     // const res= await JSON.parse('{"name":"John", "age":30, "city":"New York"}');
// //     const res= await data.json();
// //     console.log(res) ;
// // }
// // getdata(data);


  
