const footerHTML = document.getElementById('footerDiv');

var windowSize = 0; var menuMade = 0;
    
const hdCnt = document.getElementById('headerContents');

var preInitiated = 0;
    
    function finishLoading() {loaderDiv.style.opacity = 0; setTimeout(function(){loaderDiv.style.display='none';},500); }    // Maybe eventually this will be a loading symbol

    function initiateHeader() {
        
        if(preInitiated == 0){
    	headerContents.innerHTML = "<div id='loaderContainer'><div id='loaderBackground'></div><div id='loader'></div></div> <div id='headerMain'></div><div id='headerSpacer'></div><div id='headerMenu'></div><div id='hideHeaderMenuBtn' onclick='openHeaderMenu()'></div>";
            preInitiated = 1;
        }else{
            headerContents.innerHTML = "<div id='headerMain'></div><div id='headerSpacer'></div><div id='headerMenu'></div><div id='hideHeaderMenuBtn' onclick='openHeaderMenu()'></div>";
        }
        
        loaderDiv = document.getElementById('loaderContainer');
        head = document.getElementById('headerMain');
        
        //Determine how the header is formatted depending on screen width
        if(window.innerWidth < 900){createHeaderSmall();}else{createHeaderLarge();}
      
        createFooter();
        
        setTimeout(function(){if(loaderDiv.style.display != 'none'){finishLoading();}},4000);
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
            hdMenCnt.innerHTML += "<div class='hmlIndent' style='display:none' id='ttdmen'><b>Adventure Park</b><br><a class='headerMenuLinks' href='https://aztechadmit.github.io/gcresorthighland/things-to-do/attractions-and-entertainment.html'>Attractions and Entertainment</a><a class='headerMenuLinks'>Places to Eat</a><a class='headerMenuLinks'>Shopping</a><br>\
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
    
    footerHTML.innerHTML = "<br><div class='lineBreak' style='margin:0;'></div><br>";
    
    //Footer Links
    footerHTML.innerHTML += "<div id='footerLinks'>\
    \
                        <div class='footerColumn'>\
                            <b>Adventure Park</b>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/parktickets'>Tickets and Passes</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/parktickets/gcvip'>GC-VIP Admission</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/parktickets/annualpassports'>Annual Passports</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/parktickets/group-admission'>Group Admission(10+)</a>\
                            <a href=''>Special Events</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/things-to-do/attractions-and-entertainment'>Attractions and Entertainment</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/things-to-do/restaurants-and-dining'>Places to Eat</a>\
                            <a href=''>Shopping</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/main/pages/gc-photopass'>GC Photo Pass</a>\
                            <a href=''>Themepark Parking</a>\
                        </div>\
\
                        <div class='footerColumn'>\
                            <b>City-Shop</b>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/city-shop'>About</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/things-to-do/restaurants-and-dining'>Restaurants and Dining</a>\
                            <a href=''>Shopping and Attractions</a>\
                            <a href=''>Event Venues</a>\
                            <a href=''>Performance Oppurtunities</a>\
                            <a href=''>City-Shop Parking</a>\
\
                            <br><b>Other</b>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/main/backpages/business/corporate-sponsors'>Coporate Partners</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/main/backpages/business/business-opportunities'>Buisness Opurtunities</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/main/backpages/business/surplus-sales'>Surplus Sales</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/main/backpages/business/mcbpo-documents'>MCPBO Documents</a>\
                        </div>\
\
                        <div class='footerColumn'>\
                            <b>Information</b>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/main/pages/about'>About Us</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/information'>Live Information</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/resortsafety'>Guidelines and Rules</a>\
                            <a href=''>Resort Map</a>\
                            <a href=''>News and Updates</a>\
                            <a href=''>Resort Calendar</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/faq'>Frequently Asked Questions</a>\
\
                            <br><b>Resort Hotels</b>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/hotels/lakeside-hotel'>Lakeside Hotel</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/hotels/aztech-resort'>The Aztech Resort</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/hotels/places-to-stay#vp'>Vacation Packages</a>\
                        </div>\
\
                        <div class='footerColumn'>\
                            <b>Resort Services</b>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/main/pages/accessibility-information'>Accessibility Information</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/main/pages/resort-services/rentals'>Lockers and Rentals</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/main/pages/resort-services/lost-and-found'>Resort Lost and Found</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/main/pages/resort-services/child-care-center'>Child Care Center</a>\
                            <a href='https://aztechadmit.github.io/gcresorthighland/main/pages/resort-services/first-aid'>First-Aid Stations</a>\
                            <a href=''>Contact a Representative</a>\
                            <a href=''>Guest Satisfaction Survey</a>\
                            <br><b>Jobs</b>\
                            <a href=''>Career Portal</a>\
                        </div></div>";
    // end of footer links
    
    footerHTML.innerHTML += "<br><div class='lineBreak' style='margin:0;'></div>";
    footerHTML.innerHTML += "<div style='width:100%;text-align:center;line-height:2;'><p style='margin:20px;'><b>Get In Touch</b><br>(312) 988 1005<br><a>guestservices.gcrh@gcpr.net</a></p></div>";
    footerHTML.innerHTML += "<div class='lineBreak' style='margin:0;'></div>";
    footerHTML.innerHTML += "<br><div style='width:100%;text-align:center;font-size:12px;color:gray;'><p>&#169;2023 Globe-City Parks and Resorts LLC.</p><p>Subsidiary of Globe-City Entertainment LLC. and R and R Industries<sup>tm</sup></div><br>";
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
