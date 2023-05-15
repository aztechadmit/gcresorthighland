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
  const apDisplay = document.getElementById('apDisp');
  const prkHrs = document.getElementById('apHrs');
  const cityHrs = document.getElementById('csHrs');
        
  //determine ticket pricing from ticket tier
        tkInfDisp1.innerHTML = "<li>Ticketing Tier: " + tdayTier + "</li>";
        switch(parseInt(tdayTier)){
          case 0:
            tkInfDisp1.innerHTML += "<li>Standard Admission: $75</li> <li>GC-VIP Admission: $109</li>";
            apDisplay.innerHTML = "<li>Resident Passport: <span style='color:green'>Good to Go</span></li>\
                                    <li>Adventure Passport: <span style='color:green'>Good to Go</span></li>\
                                    <li>Platinum VIP Passport: <span style='color:green'>Good to Go</span></li>";
            prkHrs.innerHTML = "<b>Adventure Park</b><br>10AM - 7PM";
            cityHrs.innerHTML = "<b>City-Shop</b><br>11AM - 10PM";
            break;
          case 1:
            tkInfDisp1.innerHTML += "<li>Standard Admission: $75</li> <li>GC-VIP Admission: $109</li>";
            apDisplay.innerHTML = "<li>Resident Passport: <span style='color:green'>Good to Go</span></li>\
                                    <li>Adventure Passport: <span style='color:green'>Good to Go</span></li>\
                                    <li>Platinum VIP Passport: <span style='color:green'>Good to Go</span></li>";
            prkHrs.innerHTML = "<b>Adventure Park</b><br>10AM - 7PM";
            cityHrs.innerHTML = "<b>City-Shop</b><br>11AM - 10PM";
            break;
          case 2:
            tkInfDisp1.innerHTML += "<li>Standard Admission: $85</li> <li>GC-VIP Admission: $199</li>";
            apDisplay.innerHTML = "<li>Resident Passport: <span style='color:green'>Good to Go</span></li>\
                                    <li>Adventure Passport: <span style='color:green'>Good to Go</span></li>\
                                    <li>Platinum VIP Passport: <span style='color:green'>Good to Go</span></li>";
            prkHrs.innerHTML = "<b>Adventure Park</b><br>10AM - 9PM";
            cityHrs.innerHTML = "<b>City-Shop</b><br>11AM - 11PM";
            break;
          case 3:
            tkInfDisp1.innerHTML += "<li>Standard Admission: $99</li> <li>GC-VIP Admission: $209</li>";
            apDisplay.innerHTML = "<li>Resident Passport: <span style='color:red'>Blocked Out</span></li>\
                                    <li>Adventure Passport: <span style='color:green'>Good to Go</span></li>\
                                    <li>Platinum VIP Passport: <span style='color:green'>Good to Go</span></li>";
            prkHrs.innerHTML = "<b>Adventure Park</b><br>10AM - 10PM";
            cityHrs.innerHTML = "<b>City-Shop</b><br>11AM - 11PM";
            break;
          case 4:
            tkInfDisp1.innerHTML += "<li>Standard Admission: $109</li> <li>GC-VIP Admission: $259</li>";
            apDisplay.innerHTML = "<li>Resident Passport: <span style='color:red'>Blocked Out</span></li>\
                                    <li>Adventure Passport: <span style='color:red'>Blocked Out</span></li>\
                                    <li>Platinum VIP Passport: <span style='color:green'>Good to Go</span></li>";
            prkHrs.innerHTML = "<b>Adventure Park</b><br>9AM - 11PM";
            cityHrs.innerHTML = "<b>City-Shop</b><br>11AM - 12AM";
            break;
          case 5:
            tkInfDisp1.innerHTML += "<li>Standard Admission: $115</li> <li>GC-VIP Admission: $299</li>";
            apDisplay.innerHTML = "<li>Resident Passport: <span style='color:red'>Blocked Out</span></li>\
                                    <li>Adventure Passport: <span style='color:red'>Blocked Out</span></li>\
                                    <li>Platinum VIP Passport: <span style='color:green'>Good to Go</span></li>";
            prkHrs.innerHTML = "<b>Adventure Park</b><br>9AM - 11PM";
            cityHrs.innerHTML = "<b>City-Shop</b><br>10AM - 12AM";
            break;
          case 6:
            tkInfDisp1.innerHTML += "<li>Standard Admission: $75</li> <li>GC-VIP Admission: $109</li>";
            apDisplay.innerHTML = "<li>Resident Passport: <span style='color:green'>Good to Go</span></li>\
                                    <li>Adventure Passport: <span style='color:green'>Good to Go</span></li>\
                                    <li>Platinum VIP Passport: <span style='color:green'>Good to Go</span></li>";
            prkHrs.innerHTML = "<b>Adventure Park</b><br>10AM - 6PM";
            cityHrs.innerHTML = "<b>City-Shop</b><br>11AM - 11PM";
            break;
          default:
            console.info("Error with switch statement");
        }//end of switch
  
  //retrieve todays special events and promotions
  const sesa = document.getElementById('eAndSdisp');
  sesa.innerHTML = determineSpecialEvent(srchq);
  
  doneInitiating();
  
}// end of function resortinfo

function doneInitiating(){
    finishLoading();
}

//Display current crowd information
function determineCrowds(){
  switch(curTime){
    case 1: //Before 9AM or after Closing
      break;
    case 2: //10AM
      break;
    case 3: //11AM
      break;
    case 4: //12PM - beggining of peak
      break
    case 5: //1PM - moderate
      break
    case 6: //2PM - moderate
      break;
    case 7: //3PM HEAVIEST CROWDS
      break;
    case 8: //4PM 
      break;
    case 9: //5PM
      break;
    case 10: //6PM
      break;
    case 11: //7PM
      break;
      
  }
}

/*
function finishLoading(){
  loadingSymbol.style.display = 'none';
} */
