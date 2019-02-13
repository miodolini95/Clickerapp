var upgradeunit11 = document.querySelector(".upgradeunit11");

upgradeunit11.addEventListener('click', function(){
    upgradeunit1()
    setStats()
    roundamount()
});
//upgrades
var flag11 = true;
var costofupgrade11 = 1000;

function upgradeunit1(){
    if(flag11){
        if(amount > costofupgrade11){
            unit1 *= 1.3;
            unit1 = Math.floor(unit1);
            flag11 = false;
            upgradeunit11.style.opacity = "1";
            amount -= costofupgrade11;
            return unit1;
        }
    }
}

//hover

upgradeunit11.addEventListener('click', function(){
    upgradeunit1()
    setStats()
    roundamount()
});
