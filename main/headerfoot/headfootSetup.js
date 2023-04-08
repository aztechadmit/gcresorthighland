const headerHTML = document.getElementById('headerDiv');
const footerHTML = document.getElementById('footerDiv');
const sideBarHTML = document.getElementById('headerMenuBar');

var bOp = 0;

function initiateHeadFoot(pgNum) {
  
  head_pgNum=pgNum;
  
  //Step 1: Create the header
  createFooter();
  resizeHeader();
  
  //step 2, get the page number 0 is the index. Null means no page will be highlighted
  //This function is to display the page the viewer is currently on as bold in the header
  
  
  
}//end of initiateHeadFoot

function headerboldPageButton(pgNum){
  var idToSet = 'null';
  
  switch(pgNum){
    case 0:idToSet='head.home';break;
    case 1:idToSet='head.pts';break;
    case 'null':break;
  }//end of switch
  
  if(idToSet != 'null'){
  document.getElementById(idToSet).style.fontWeight = "bold";
  }
}

function createHeader(typ) {
  if(typ == 0){ //normal desktop header
    //remember to put in order of first item will be the right most, last item will be the left most
    headerHTML.innerHTML = "<a href='https://aztechadmit.github.io/gcresorthighland'><img class='headerLogo' src='https://aztechadmit.github.io/gcresorthighland/main/images/gcresortlogo.png'></a>"
    
    headerHTML.innerHTML += "<button id='headtknpsbtn'>Tickets and Passes</button>\
                            <a class='headerLink' id='head.ttd'>MORE &#9660;</a>\
                            <a class='headerLink' href='https://aztechadmit.github.io/gcresorthighland/places-to-stay' id='head.pts'>PLACES TO STAY</a>\
                            <a class='headerLink' id='head.ttd'>THINGS TO DO &#9660;</a>\
                            <a class='headerLink' href='https://aztechadmit.github.io/gcresorthighland' id='head.home'>HOME</a>";
    
    headerboldPageButton(head_pgNum);
    
  }else if(typ==1){ //mobile view header
    headerHTML.style.height = 60;
    headerHTML.innerHTML = "<button id='headerMenuButton' onclick='openSideBar()'>☰</button>\
                            <a href='https://aztechadmit.github.io/gcresorthighland'><img class='headerLogo' style='width:200px;height:auto;float:left;' src='https://aztechadmit.github.io/gcresorthighland/main/images/gcresortlogo.png'></a>";
    
  }
  
}//end of createHeader

function resizeHeader() {
  if (window.innerWidth < 1010){
    createHeader(1);
  }else{createHeader(0);}
}//end of resizeHeader
  
//Open header sidebar (for small screen width)
function openSideBar() {
  
  if(bOp==0){
  
    sideBarHTML.style.display = 'block';
    sideBarHTML.style.width = 300;
    
    document.getElementById('headerMenuButton').innerHTML = 'X';

    setTimeout(openHeadElem, 400);
    
    bOp=1;
    
  }else if(bOp==1){
    
    //document.getElementById('headerElements').style.opacity=0;
    
    sideBarHTML.style.width = 0;
    document.getElementById('headerElements').style.display = 'none';
    sideBarHTML.style.display = 'none';
    
    //setTimeout(function(){ sideBarHTML.style.display = 'none';  }, 500);
    
    document.getElementById('headerMenuButton').innerHTML = '☰';
    
    bOp=0;
    
  }
  
}

function openHeadElem(){
  sideBarHTML.innerHTML = "<div id='headerElements'></div>";
  const headElemHTML = document.getElementById('headerElements');
  
  headElemHTML.innerHTML = "<button id='headtknpsbtn' style='float:left;margin-left:0;width:260px;'>Tickets and Passes</button>\
                            <a class='headerMenuLinks' href='https://aztechadmit.github.io/gcresorthighland' id='head.home'>Home</a>\
                            <a class='headerMenuLinks' href='' id='head.ttd'>Things to Do  &#9660;</a>\
                            <a class='headerMenuLinks' href='https://aztechadmit.github.io/gcresorthighland/places-to-stay' id='head.pts'>Places to Stay</a>";
  
  headElemHTML.style.opacity = 1;
  headerboldPageButton(head_pgNum);
}

// Adjust the header if the window is resized
window.onresize = resizeHeader;

function createFooter() {
  footerHTML.innerHTML = "<div class='footerLineBreak'></div>\
    <div style='position:relative;margin:auto;'>\
    <div class='footerGroup'>\
    <b>Adventure Park</b><br>\
    <a class='footerLink'>Tickets and Passes</a><br>\
    <a class='footerLink'>GC-VIP</a><br>\
    <a class='footerLink'>Annual Passports</a><br>\
    <a class='footerLink'>Group Admission (10+)</a><br>\
    <a class='footerLink'>Special Events</a><br>\
    <a class='footerLink'>Attractions and Entertainment</a><br>\
    <a class='footerLink'>Places to Eat</a><br>\
    <a class='footerLink'>Shopping</a><br>\
    </div>   \
    <div class='footerGroup'>\
    <b>City Shop</b><br>\
    <a class='footerLink'>About</a><br>\
    <a class='footerLink'>Restauraunts and Dining</a><br>\
    <a class='footerLink'>Shopping and Attractions</a><br>\
    <a class='footerLink'>City-Shop Parking</a><br>\
    <a class='footerLink'>Event Venues</a><br>\
    <a class='footerLink'>Performance Opurtunities</a><br>\
    <br><b>Other</b><br>\
    <a class='footerLink'>Corporate Partners</a><br>\
    <a class='footerLink'>MCPBO Documents</a><br>\
    </div>\
    <div class='footerGroup'>\
    <b>Information</b><br>\
    <a class='footerLink'>About Us</a><br>\
    <a class='footerLink'>Resort Information</a><br>\
    <a class='footerLink'>Guidelines and Rules</a><br>\
    <a class='footerLink'>News and Updates</a><br>\
    <a class='footerLink'>Resort Calendar</a><br>\
    <br><b>Resort Hotels</b><br>\
    <a class='footerLink'>Lakeside Hotel</a><br>\
    <a class='footerLink'>The Aztech Resort</a><br>\
    <a class='footerLink'>Vacation Packages</a><br>\
    </div>\
    <div class='footerGroup'>\
    <b>Resort Services</b><br>\
    <a class='footerLink'>Contact a Representative</a><br>\
    <a class='footerLink'>Guest Satisfaction Survey</a><br>\
    <a class='footerLink'>Accessility Information</a><br>\
    <a class='footerLink'>Lockers and Rentals</a><br>\
    <a class='footerLink'>Security</a><br>\
    <br><b>Jobs</b><br>\
    <a class='footerLink'>Career Portal</a><br>\
    </div>\
    </div> \
    <div class='footerLineBreak' style='margin-top:0px;'></div> \
    <p style='text-align:center;'><b>Get in Touch</b><br>(312) 872 2212<br><a href='mailto:guestservices.gcrh@gcpr.net'>guestservices.gcrh@gcpr.net</a></p>\
    <div class='footerLineBreak' style='margin-top:25px;'></div>\
    <p style='text-align:center;font-size:12px;color:dimgray;'>&#169; 2023 Globe-City Parks and Resorts LLC.<br>A Division of R and R Industries</p>";
}//end of createFooter
