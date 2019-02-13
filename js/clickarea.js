//clickpower selectors

var addclickpower = document.querySelector(".addclickpower");
var addclickpower10 = document.querySelector(".addclickpower10");
var clickunit = document.querySelector(".clickunit");
var clickpowertext = document.querySelector(".clickpower");

//clickpower
var clicktext = "";
var costofpower = 10;
var clickpower = 1;


clickunit.addEventListener('click', function(){
    clickaddamount()
    setStats()
   }) 
addclickpower.addEventListener('click', function(){
    addpower()
    setStats()
    })

function clickaddamount(){
    amount = amount + clickpower;
    return amount;
}
function addpower(){
    if(amount >= costofpower){
        amount = amount - costofpower;
        clickpower++;
        costofpower *= 1.2;
        costofpower = Math.floor(costofpower);
        return costofpower;}
}

//add 10 power
addclickpower10.addEventListener('click', function(){
    addpower10()
    setStats()
    })


function addpower10(){
for(i=0;i<10;i++){
    if(amount >= costofpower){
        amount = amount - costofpower;
        costofpower *= 1.2;
        clickpower += 1;
        costofpower = Math.floor(costofpower);
        amount = Math.floor(amount);
    }}       
}

