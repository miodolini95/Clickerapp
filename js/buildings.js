//addbuilding1

var buildingtext1 = document.querySelector(".buildingtext1-1");
var addbuilding1 = document.querySelector(".addbuilding1");

var numberbuildings1 = 0;
var costofbuildings1 = 800;

addbuilding1.addEventListener("click", function(){
    buildings.addbuildingtext1()
    heightblrender(bulel1,numberbuildings1)
    setStats()
    roundamount()
})

//addbuilding2

var buildingtext2 = document.querySelector(".buildingtext2-2");
var addbuilding2 = document.querySelector(".addbuilding2");

var numberbuildings2 = 0;
var costofbuildings2 = 4000;

addbuilding2.addEventListener("click", function(){
    buildings.addbuildingtext2()
    heightblrender(bulel2,numberbuildings2)
    setStats()
    roundamount()
})

//addbuilding3

var buildingtext3 = document.querySelector(".buildingtext3-3");
var addbuilding3 = document.querySelector(".addbuilding3");

var numberbuildings3 = 0;
var costofbuildings3 = 8000;

addbuilding3.addEventListener("click", function(){
    buildings.addbuildingtext3()
    heightblrender(bulel3,numberbuildings3)
    setStats()
    roundamount()
})

//addbuilding4

var buildingtext4 = document.querySelector(".buildingtext4-4");
var addbuilding4 = document.querySelector(".addbuilding4");

var numberbuildings4 = 0;
var costofbuildings4 = 16000;

addbuilding4.addEventListener("click", function(){
    buildings.addbuildingtext4()
    heightblrender(bulel4,numberbuildings4)
    setStats()
    roundamount()
})

const buildings = {
    addbuildingtext1: function(e) {
      if(amount >= costofbuildings1){
        limit1 *= incraselimit;
        numberbuildings1++;
        amount = amount - costofbuildings1;
        costofbuildings1 *= 2.5;
        costofbuildings1 = Math.floor(costofbuildings1);
        limit1 = Math.floor(limit1);}
    },
    addbuildingtext2: function() {
      if(amount >= costofbuildings2){
        limit2 *= incraselimit;
        numberbuildings2++;
        amount = amount - costofbuildings2;
        costofbuildings2 *= 2.5;
        costofbuildings2 = Math.floor(costofbuildings2);
        limit2 = Math.floor(limit2);}
    },
    addbuildingtext3: function() {
      if(amount >= costofbuildings3){
        limit3 *= incraselimit;
        numberbuildings3++;
        amount = amount - costofbuildings3;
        costofbuildings3 *= 2.5;
        costofbuildings3 = Math.floor(costofbuildings3);
        limit3 = Math.floor(limit3);}
    },
    addbuildingtext4: function() {
      if(amount >= costofbuildings4){
        limit4 *= incraselimit;
        numberbuildings4++;
        amount = amount - costofbuildings4;
        costofbuildings4 *= 2.5;
        costofbuildings4 = Math.floor(costofbuildings4);
        limit4 = Math.floor(limit4);}}
    }