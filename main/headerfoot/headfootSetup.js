const footerHTML = document.getElementById('footerDiv');

var windowSize = 0; var menuMade = 0;
    
const hdCnt = document.getElementById('headerContents');
    
    function finishLoading() {return false;}    // Maybe eventually this will be a loading symbol

    function initiateHeader() {
        
    	headerContents.innerHTML = "<div id='headerMain'></div><div id='headerSpacer'></div><div id='headerMenu'></div><div id='hideHeaderMenuBtn' onclick='openHeaderMenu()'></div>";
        
        head = document.getElementById('headerMain');
        
        //Determine how the header is formatted depending on screen width
        if(window.innerWidth < 900){createHeaderSmall();}else{createHeaderLarge();}
      
        createFooter();
        
    }
    
    // WINDOW GREATER THAN 900
    function createHeaderLarge() {
    	head.innerHTML = "<img id='headerLogo' src='https://aztechadmit.github.io/gcresorthighland/main/images/gcresortlogo.png' onclick='loadHomePg()'>"; //load in header logo
        head.innerHTML += "<button id='headerTicketsButton' onclick='window.open("+'"https://aztechadmit.github.io/gcresorthighland/parktickets","_self"'+")'>Tickets and Passes</button>";
    	head.innerHTML += "<button class='headerBtnLink' onclick=''>More &#9660;</button>";
        head.innerHTML += "<button class='headerBtnLink' onclick='window.open("+'"https://aztechadmit.github.io/gcresorthighland/hotels/places-to-stay","_self"'+")'>Hotels and Resorts</button>";
        head.innerHTML += "<button class='headerBtnLink' onclick=''>Things to Do &#9660;</button>";
        head.innerHTML += "<button class='headerBtnLink' onclick='window.open("+'"https://aztechadmit.github.io/gcresorthighland/","_self"'+")'>Home</button>";
    }
    
    // WINDOW LESS THAN 900
    function createHeaderSmall(){
    	head.innerHTML = "<img id='headerLogo' src='https://aztechadmit.github.io/gcresorthighland/main/images/gcresortlogo.png' onclick='loadHomePg()'>"; //load in header logo
    	head.innerHTML += "<button id='openHeaderMenuBtn' onclick='openHeaderMenu()'>☰</button>";
    }
    
    function openHeaderMenu(){
    	const headMenu = document.getElementById('headerMenu');
        
        if(headMenu.style.display == 'block'){
        	
       		headMenu.style.width = 0;
            document.getElementById('openHeaderMenuBtn').innerHTML = '☰';
            document.getElementById('hideHeaderMenuBtn').style.display = 'none';
            
            document.getElementById('headerMenuContentsB').style.display = 'none';
            
       		setTimeout(function(){headMenu.style.display = 'none';},400);
        
        }else{
 
            document.getElementById('openHeaderMenuBtn').innerHTML = 'X';
            document.getElementById('hideHeaderMenuBtn').style.display = 'block';
        
        	headMenu.style.display = 'block';
            
            if(menuMade == 0){
            headMenu.innerHTML = '<div id="headerMenuContentsB" style="display:block;opacity:0;margin-left:10px;margin-top:10px;">Error :(</div>';
            
            const hdMenCnt = document.getElementById('headerMenuContentsB');
        
        	setTimeout(function(){headMenu.style.width = '310px';},1);
            
            setTimeout(function(){hdMenCnt.style.opacity=1;},300);
            
            // CREATE THE CONTENTS OF THE HEADER MENU
            
            hdMenCnt.innerHTML = "<button id='headerTicketsButton' onclick='window.open("+'"https://aztechadmit.github.io/gcresorthighland/parktickets","_self"'+")'>Tickets and Passes</button>";
            hdMenCnt.innerHTML += "<a class='headerMenuLinks' href='https://aztechadmit.github.io/gcresorthighland'>Home</a>";
            hdMenCnt.innerHTML += "<button class='headerMenuLinks' onclick='openTtdMen(1)'>Things to Do &#9660;</button>";
            hdMenCnt.innerHTML += "<div class='hmlIndent' style='display:none' id='ttdmen'><b>Adventure Park</b><br><a class='headerMenuLinks'>Attractions and Entertainment</a><a class='headerMenuLinks'>Places to Eat</a><a class='headerMenuLinks'>Shopping</a><br>\
            						<b>City-Shop</b><br><a class='headerMenuLinks'>About</a><a class='headerMenuLinks'>Restaurants and Dining</a><a class='headerMenuLinks'>Retail and More</a>\
                                    <br></div>";
            
            
             hdMenCnt.innerHTML += "<a class='headerMenuLinks' href='https://aztechadmit.github.io/gcresorthighland/hotels/places-to-stay'>Hotels and Resorts</a>";
             
             hdMenCnt.innerHTML += "<button class='headerMenuLinks' onclick='openTtdMen(2)'>More &#9660;</button>";
             hdMenCnt.innerHTML += "<div class='hmlIndent' style='display:none' id='moremenhd'>\
            						<a class='headerMenuLinks'>GC-VIP Admission</a>\
                                	<a class='headerMenuLinks'>Annual Passports</a>\
                               	 	<a class='headerMenuLinks'>Special Events</a>\
                                	<a class='headerMenuLinks'>Hours and Information</a>\
                                	<a class='headerMenuLinks'>Park Map</a>\
            						<br></div>";
            
            
            menuMade = 1;
            }else{
            
              const hdMenCnt = document.getElementById('headerMenuContentsB');

              setTimeout(function(){headMenu.style.width = '310px';},1);

              setTimeout(function(){hdMenCnt.style.opacity=1; document.getElementById('headerMenuContentsB').style.display = 'block';},300);
              
              

            }//end of creating header menu
            
            
        }
    }//end of function openHeaderMenu
    
    function loadHomePg(){window.open('https://aztechadmit.github.io/gcresorthighland','_self');}
    
    // Change the header depending on the width of the view window
    window.onresize = function(){if(windowSize != window.innerWidth){initiateHeader();windowSize=window.innerWidth;menuMade=0;}};
    
    // FOR BUTTONS THAT HAVE A DROPDOWN
    function openTtdMen(num){
    
    	if(num == 1){
          const varToOp = document.getElementById('ttdmen');

          if(varToOp.style.display == 'block'){varToOp.style.display = 'none';}
          else{varToOp.style.display = 'block';}
        
        }
      	else if(num == 2){
       		const varToOp = document.getElementById('moremenhd');

            if(varToOp.style.display == 'block'){varToOp.style.display = 'none';}
            else{varToOp.style.display = 'block';}
       }
    }
 
    





function createFooter() {
  footerHTML.innerHTML = "<div class='footerLineBreak'></div>\
    <div style='position:relative;margin:auto;'>\
    <div class='footerGroup'>\
    <b>Adventure Park</b><br>\
    <a class='footerLink' href='https://aztechadmit.github.io/gcresorthighland/parktickets'>Tickets and Passes</a><br>\
    <a class='footerLink' href='https://aztechadmit.github.io/gcresorthighland/parktickets/gcvip'>GC-VIP</a><br>\
    <a class='footerLink' href='https://aztechadmit.github.io/gcresorthighland/parktickets/annualpassports'>Annual Passports</a><br>\
    <a class='footerLink'>Group Admission (10+)</a><br>\
    <a class='footerLink'>Special Events</a><br>\
    <a class='footerLink' href='https://aztechadmit.github.io/gcresorthighland/things-to-do/adventurepark/attractions-and-entertainment'>Attractions and Entertainment</a><br>\
    <a class='footerLink'>Places to Eat</a><br>\
    <a class='footerLink'>Shopping</a><br>\
    </div>   \
    <div class='footerGroup'>\
    <b>City Shop</b><br>\
    <a class='footerLink' href='https://aztechadmit.github.io/gcresorthighland/city-shop'>About</a><br>\
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
    <a class='footerLink' href='https://aztechadmit.github.io/gcresorthighland/information'>Resort Information</a><br>\
    <a class='footerLink' href='https://aztechadmit.github.io/gcresorthighland/resortsafety'>Guidelines and Rules</a><br>\
    <a class='footerLink' href='https://aztechadmit.github.io/gcresorthighland/things-to-do/resortmap.html'>Resort Map</a><br>\
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

/*

//this function will check if a user clicked inside of a menu. If not, the menu will hide.
document.addEventListener('click', (evt) => {
  if (headMenOpen != 0) {
    
    let targetE1 = evt.target;
    
    switch(headMenOpen){
      case 1:
    }
       
  }//end of if
  
});

*/
