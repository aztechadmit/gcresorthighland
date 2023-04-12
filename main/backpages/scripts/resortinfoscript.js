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

resortParkingRates = ["<p>$15 - $28</p>","<p>$24 - $35</p>","<p>$24 - $35</p>","<p>$30 - $50</p>","<p>$30 - $55</p>"];

// Functions:

const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const days = ['Sunday','Monday','Teusday','Wedensday','Thursday','Friday','Saturday'];

function runResortInfo() {
  
  const dateDisplay = document.getElementById('datedisptxt');
  
  const tdate = new Date();
 
  const tmonth = months[tdate.getMonth()];
  const tday = tdate.getDate();
  const tyear = tdate.getFullYear();
  const dayOfWeek = days[tdate.getDay()+1];
  
  dateDisplay.innerHTML = "<p style='margin-top:0'>"+dayOfWeek+", "+tmonth+" "+tday+" "+tyear+"</p>";
  
}
