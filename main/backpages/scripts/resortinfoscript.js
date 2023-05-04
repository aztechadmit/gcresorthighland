resortInfoTags = [
  "<p style='color:red;'>Closed</p>",
  "<p style='color:green;'>Light Crowds</p>",
  "<p style='color:orange;'>Moderate</p>",
  "<p style='color:red;'>Busy</p>",
  //For Parking Lots:
  "<p style='color:red;'>Closed</p>",
  "<p style='color:green;'>Lots of Space</p>",
  "<p style='color:orange;'>Filling Up</p>",
  "<p style='color:red;'>Limited Space</p>"
];

resortParkingRates = ["$15 - $28","$24 - $35","$24 - $35","$30 - $50","<p>$30 - $55", "$5 - $25"];

const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const monthsShortened = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const days = ['Sunday','Monday','Teusday','Wedensday','Thursday','Friday','Saturday'];


function runResortInfo() {
  
  const dateDisplay = document.getElementById('datedisptxt');
  
  const tdate = new Date();
 
  const tmonth = months[tdate.getMonth()];
  const tday = tdate.getDate();
  const tyear = tdate.getFullYear();
  const dayOfWeek = days[tdate.getDay()];
  
  dateDisplay.innerHTML = "<p style='margin-top:0'>"+dayOfWeek+", "+tmonth+" "+tday+" "+tyear+"</p>";
  
  //Get the Date Tier and Entertainment Schedule
  const srchq = monthsShortened[tdate.getMonth()]+"-"+tday;
  console.info("The Formatted Date is: "+srchq);
  
  tdayTier = determineTier(srchq);
  tdayEnt = determineEntertainment(srchq);
  
  console.info("Today's Tier: "+tdayTier);
  console.info("Today's Entertainment: \n"+tdayEnt);
  
  document.getElementById('entSchedDiv').innerHTML = tdayEnt;
  
  const tkInfDisp1 = document.getElementById('tkInfDisp');
        
  //determine ticket pricing from ticket tier
        tkInfDisp1.innerHTML = "<li>Ticketing Tier: " + tdayTier + "</li>";
        switch(tdayTiers){
          case 1:
            tkInfDisp1.innerHTML += "<li>Standard Admission: $75</li> <li>GC-VIP Admission: $109</li>";
            break;
          case 2:
            tkInfDisp1.innerHTML += "<li>Standard Admission: $85</li> <li>GC-VIP Admission: $199</li>";
            break;
          case 3:
            tkInfDisp1.innerHTML += "<li>Standard Admission: $99</li> <li>GC-VIP Admission: $209</li>";
            break;
          case 4:
            tkInfDisp1.innerHTML += "<li>Standard Admission: $109</li> <li>GC-VIP Admission: $259</li>";
            break;
          case 5:
            tkInfDisp1.innerHTML += "<li>Standard Admission: $115</li> <li>GC-VIP Admission: $299</li>";
            break;
        }//end of switch
  
  doneInitiating();
  
}// end of function resortinfo

function doneInitiating(){
    finishLoading();
}


/*
function finishLoading(){
  loadingSymbol.style.display = 'none';
} */
