var upgradesbox = document.querySelector(".upgradesmenu");
var unitsarea = document.querySelector(".unitsarea");
var unitsmenubox = document.querySelector(".unitsmenu");
var upgradesarea = document.querySelector(".upgradesarea");
var buildingsmenubox = document.querySelector(".buildingsmenu");
var buildingsarea = document.querySelector(".buildingsarea");

var minemenu = document.querySelector(".minemenu");
var citymenu = document.querySelector(".citymenu");
var city = document.querySelector(".city");
var mine = document.querySelector(".mine");

upgradesbox.addEventListener('click', function(){
    unitsarea.style.display = "none"; 
    upgradesarea.style.display = "block";
    buildingsarea.style.display = "none";  
})

unitsmenubox.addEventListener('click', function(){
    unitsarea.style.display = "block";
    upgradesarea.style.display = "none";  
    buildingsarea.style.display = "none";  
})
buildingsmenubox.addEventListener('click', function(){
    buildingsarea.style.display = "block";
    upgradesarea.style.display = "none";  
    unitsarea.style.display = "none";  
})



minemenu.addEventListener('click', function(){
    mine.style.display = "none"; 
    city.style.display = "block";
})

citymenu.addEventListener('click', function(){
    mine.style.display = "block";
    city.style.display = "none"; 
})