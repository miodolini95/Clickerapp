// cost of units
var costunit1 = 100;
var costunit2 = 500;
var costunit3 = 1000;
var costunit4 = 2000;

    //unittexts
    var unittext1 = document.querySelector(".unittext1");
    var unittext2 = document.querySelector(".unittext2");
    var unittext3 = document.querySelector(".unittext3");
    var unittext4 = document.querySelector(".unittext4");
        //amount
    var amounttext = document.querySelector(".amount");
        //addunits
    var addunit1 = document.querySelector(".addunit1");
    var addunit2 = document.querySelector(".addunit2");
    var addunit3 = document.querySelector(".addunit3");
    var addunit4 = document.querySelector(".addunit4");
        //addunits 10
    var addunit110 = document.querySelector(".addunit1-10");
    var addunit210 = document.querySelector(".addunit2-10");
    var addunit310 = document.querySelector(".addunit3-10");
    var addunit410 = document.querySelector(".addunit4-10");
    
    // unit count
    let unit1 = 0;
    var unit2 = 0;
    var unit3 = 0;    
    var unit4 = 0;  
    // limit units
    var incraselimit = 1.4;

    var limit1 = 10;
    var limit2 = 10;
    var limit3 = 10;
    var limit4 = 10;
//units event
addunit1.addEventListener('click', function(){     
    units.addunittext1()
     setStats()
     roundamount()
   }) 
addunit2.addEventListener('click', function(){
    units.addunittext2()
     setStats()
     roundamount()
   }) 
addunit3.addEventListener('click', function(){
    units.addunittext3()
     setStats()
     roundamount()
   }) 
addunit4.addEventListener('click', function(){
    units.addunittext4()
     setStats()
     roundamount()
   }) 


function roundamount(){
    amount = Math.floor(amount);
    return amount;
}

const units = {
  addunittext1: function() {
    if(unit1 < limit1){
        if(amount >= costunit1){
            unit1++;
            amount = amount - costunit1;
            costunit1 *= 1.15;
            costunit1 = Math.floor(costunit1);
            return unit1, costunit1;}
        return amount;
    }},
  addunittext2: function() {
    if(unit2 < limit2){
        if(amount >= costunit2){
            unit2++;
            amount = amount - costunit2;
            costunit2 *= 1.15;
            costunit2 = Math.floor(costunit2);
            return unit2, costunit2;}
    }},
  addunittext3: function() {
    if(unit3 < limit3){
        if(amount >= costunit3){
            unit3++;
            amount = amount - costunit3;
            costunit3 *= 1.15;
            costunit3 = Math.floor(costunit3);
            return unit3, costunit3;}
    }},
  addunittext4: function() {
    if(unit4 < limit4){
        if(amount >= costunit4){
            unit4++;
            amount = amount - costunit4;
            costunit4 *= 1.15;
            costunit4 = Math.floor(costunit4);
            return unit4, costunit4;}}}
    }

//units event 10
addunit110.addEventListener('click', function(){
    units10.addunittext1()
     setStats()
     roundamount()
   }) 
addunit210.addEventListener('click', function(){
    units10.addunittext2()
     setStats()
     roundamount()
   }) 
addunit310.addEventListener('click', function(){
    units10.addunittext3()
     setStats()
     roundamount()
   }) 
addunit410.addEventListener('click', function(){
    units10.addunittext4()
     setStats()
     roundamount()
   }) 

//count costofunit10




const units10 = {
    addunittext1: function() {
        for(i=0;i<10;i++){
            if(unit1 < limit1){
                if(amount >= costunit1){
                    amount = amount - costunit1;
                    costunit1 *= 1.2;
                    unit1 += 1;
                    costunit1 = Math.floor(costunit1);
            }}}     
  },
    addunittext2: function() {
        for(i=0;i<10;i++){
            if(unit2 < limit2){
                if(amount >= costunit2){
                    amount = amount - costunit2;
                    costunit2 *= 1.2;
                    unit2 += 1;
                    costunit2 = Math.floor(costunit2);
            }}}
  },
    addunittext3: function() {
        for(i=0;i<10;i++){
            if(unit3 < limit3){
                if(amount >= costunit3){
                    amount = amount - costunit3;
                    costunit3 *= 1.2;
                    unit3 += 1;
                    costunit3 = Math.floor(costunit3);
            }}}
    },
    addunittext4: function() {
        for(i=0;i<10;i++){
            if(unit4 < limit4){
                if(amount >= costunit4){
                    amount = amount - costunit4;
                    costunit4 *= 1.2;
                    unit4 += 1;
                    costunit4 = Math.floor(costunit4);
            }}}}}



