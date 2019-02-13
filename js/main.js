//App start
document.addEventListener("DOMContentLoaded",function(){
    setStartamount()
    setStats()
    setInterval(function(){ changecss(); }, 100)
    setInterval(function(){ updateamount(true); }, 100)
    mine.style.display = "none"; 
   })

//your amount
let amount = 1000000;

      function setStatunit(e,i,f,g,h){
        e.innerHTML = i + "("+ f+ "$) " +"ilosc: "+ g+"/"+h;
      }
      function setStatbuilding(e,i,f,g){
        e.innerHTML = i + "("+ f+ "$) " +"ilosc: "+ g;
      }

   function setStats(){
    //unit
    setStatunit(unittext1,"Żule ",costunit1,unit1,limit1)
    setStatunit(unittext2,"Złomiarze ",costunit2,unit2,limit2)
    setStatunit(unittext3,"Sąsiady ",costunit3,unit3,limit3)
    setStatunit(unittext4,"Biznesmeni ",costunit4,unit4,limit4)
    //power
    setStatbuilding(clickpowertext,"MOC: ",costofpower,clickpower)
  

    // buildings
    setStatbuilding(buildingtext1,"Chatki żuli ",costofbuildings1,numberbuildings1)
    setStatbuilding(buildingtext2,"Chatki złomiarzy ",costofbuildings2,numberbuildings2)
    setStatbuilding(buildingtext3,"Chatki sąsiadów ",costofbuildings3,numberbuildings3)
    setStatbuilding(buildingtext4,"Domy biznesmenów ",costofbuildings4,numberbuildings4)
  }
  
  function updateamount(e){
    {
      amount = amount + ((unit1*0.1) + (unit2*0.5) + (unit3*1) + (unit4*2));;
      amounttext.innerHTML = "pieniądze " + Math.floor(amount) + "$";
    }
  }
  
  function setStartamount(){
    amounttext.innerHTML = "pieniądze " + amount + "$";
  }

