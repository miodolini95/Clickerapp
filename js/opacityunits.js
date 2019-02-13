
//units
var unitbox1 = document.querySelector(".unitboxbox1");
var unitbox2 = document.querySelector(".unitboxbox2");
var unitbox3 = document.querySelector(".unitboxbox3");
var unitbox4 = document.querySelector(".unitboxbox4");
var powerbox = document.querySelector(".powerbox");


//buildings
var building1css = document.querySelector(".building1");
var building2css = document.querySelector(".building2");
var building3css = document.querySelector(".building3");
var building4css = document.querySelector(".building4");

function changeopacity(unit,cost){
    if(amount < cost){
        unit.style.opacity = 0.5;
    }
    else{
        unit.style.opacity = 1;       
    }
}


function changecss(){
    changeopacity(powerbox,costofpower)

    changeopacity(unitbox1,costunit1)
    changeopacity(unitbox2,costunit2)
    changeopacity(unitbox3,costunit3)
    changeopacity(unitbox4,costunit4)

    changeopacity(building1css,costofbuildings1)
    changeopacity(building2css,costofbuildings2)
    changeopacity(building3css,costofbuildings3)
    changeopacity(building4css,costofbuildings4)
}

