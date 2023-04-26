const tdate = new Date();

const tmonth = tdate.getMonth();

const headDiv = document.getElementById('homePageHeaderDiv');
const spotlightDiv = document.getElementById('homePageSpotlightDiv');

function setUpHomePage() {
	
	// CREATE THE VIDEO HEADER

	if(tmonth >= 0 && tmonth < 5){ // JANUARY - MAY



	}else if(tmonth >= 5 && tmonth < 8){ // JUNE - AUGUST



	}else if(tmonth >= 8 && tmonth < 10) {//SEPTEMBER - OCTOBER



	}else if(tmonth >= 11) { // NOVEMBER - DECEMBER



	}
	
	// CREATE THE SPOTLIGHT
	
	var title1; 	var title2;	 	var title3;
	var imgLnk1; 	var imgLnk2;	var imgLnk3;
	var content1;	var content2;	var content3;
	var link1; 		var link2;	 	var link3;
	var linkTxt1;	var linkTxt2;	var linkTxt3;
	
	
	switch(tmonth) {
		case 0:	// January
			
			break;
		case 1: // February 
			
			break;
		case 2: // March
			
			break;
		case 3: // April
			
			title1 = 'The New and Improved gcresort website!';	
			content1 = 'Welcome to our refreshed website complete with new UI and awesome new functionality! Stay a while and explore all the cool stuff we have to offer :)';
			imgLnk1 = 'https://aztechadmit.github.io/gcresorthighland/main/images/banner1.jpg'; 
			linkTxt1 = '';	link1 = '';
			
			title2 = 'Bring on Spring';	content2 = 'This spring season, crowds are small and ticket prices are low AKA the perfect time for a mid-spring trip to the park!';	
			imgLnk2 = 'https://aztechadmit.github.io/gcresorthighland/main/images/banner6.jpg'; 
			linkTxt2 = 'View Tickets';	link2 = 'parktickets';
			
			title3 = "We're Hiring";	content3 = 'Become a part of the adventure and help bring magic and memories to millions of guests every year!';	
			imgLnk3 = 'https://aztechadmit.github.io/gcresorthighland/main/images/banner5.jpg'; 
			linkTxt3 = 'View Career Portal';	link3 = 'https://sites.google.com/view/gcresorthighland/backpages/employee-portal';
			
			break;
		case 4: // May
			
			title1 = "Mother's Day Treats and More <3";	
			content1 = "Treat your mother to a thrilling day with all new mothers-day sweet and treats plus discounted admission! Then continue the celebration at City-Shop";
			imgLnk1 = "https://4.bp.blogspot.com/-3Vtm461c4Y4/XMaIpWIi9EI/AAAAAAAA4xA/h8rjxenWd0URwL_4Y06y-k5YP2qFCo9PACLcBGAs/s1600/TikilandDayDL-101.jpg"; 
			linkTxt1 = "View Special Event";	link1 = "things-to-do/events/specialevents";
			
			title2 = "New Flex-Eat<sup>tm</sup> Menus";	
			content2 = "We are proud to announce a partnership with Flex-Eat<sup>tm</sup> Minecraftia to bring affordable low-calorie menu items to many of our in-park restaurants for Adventurers on a diet.";
			imgLnk2 = "https://www.travelandleisure.com/thmb/kDzGk9PyniwDgv5VaA8vuMeehLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TL_mickey-waffle_HERO_DISNEYFOOD1022-11a85361f080449a8e80c62fcb0a6407.jpg"; 
			linkTxt2 = "View Places to Eat";	link2 = "https://aztechadmit.github.io/gcresorthighland/things-to-do/restaurants-and-dining";

			title3 = "The Globe-City Marching Band";	
			content3 = "This month we would like to give a shoutout to the GC Marching Band!";
			imgLnk3 = "https://www.widener.edu/sites/default/files/2019-07/marching-band.jpg"; 
			linkTxt3 = "View Attraction";	link3 = "things-to-do/adventuepark/entertainment/gc-marching-band";
			
			break;
		case 5: // June
			
			title1 = "Changes to Annual Passports";	
			content1 = "We have updated our annual passport calendar. Days of visit will now depend on the ticketing tier for each day.";
			imgLnk1 = "https://aztechadmit.github.io/gcresorthighland/main/images/banner1.jpg"; 
			linkTxt1 = "Learn More";	link1 = "parktickets/annualpassports";
			
			title2 = "The Return of Globe-City's Summerfest!";	
			content2 = "Per popular demand, Globe-City's Summerfest has returned! Get ready for the ultimate summer fun";
			imgLnk2 = "https://lh3.googleusercontent.com/drive-viewer/AFGJ81r3983dCyjUGwOYdHDQSOBbtOplw4TwSQr42usKh1HWrCOzYDlLb4sVl0gOf4Wzss7ljwyxj3t8ci-GEv_S36ODXBPCaA=s1600"; 
			linkTxt2 = "View Special Event";	link2 = "";

			title3 = "Let us help you plan your visit!";	
			content3 = "Our advanced resort itinerary planner can help you craft your perfect adventure after just a few questions";
			imgLnk3 = "https://lh3.googleusercontent.com/drive-viewer/AFGJ81pkXSnjkqfjP3vW2NDy0bm3-3LKOUWGGiEBu5Ch8s1fhN_QUKE7iOWX94XovMutRJ692vkcbjH9UZY_Jn7SeujD3hZ5CQ=s1600"; 
			linkTxt3 = "Create Itinerary";	link3 = "";
			
			break;
		case 6: // July
			
			break;
		case 7: // August
			
			break;
		case 8: // September
			
			break;
		case 9: // October
			
			break;
		case 10: // November
			
			break;
		case 11: // December
			
			break;
	}
	
	// Build the Resort Spotlight Section
	spotlightDiv.innerHTML = "<h1>Resort Spotlight</h1><p style='margin-top:0px;'>April "+tdate.getFullYear()+"</p>";
	spotlightDiv.innerHTML += "<div class='tileSection'>\
							<div class='tileContainer'><img src='" + imgLnk1 + "'\><div class='tileText'><h3>" + title1 + "</h3><p>" + content1 + "</p><br><a href='" + link1 + "'>" + linkTxt1 + "</a></div></div> \
      							<div class='tileContainer'><img src='" + imgLnk2 + "'\><div class='tileText'><h3>" + title2 + "</h3><p>" + content2 + "</p><br><a href='" + link2 + "'>" + linkTxt2 + "</a></div></div> \
							<div class='tileContainer'><img src='" + imgLnk3 + "'\><div class='tileText'><h3>" + title3 + "</h3><p>" + content3 + "</p><br><a href='" + link3 + "'>" + linkTxt3 + "</a></div></div>\
					</div> \
								<br><br><button style='margin:auto;' onclick='window.open("+'"main/resort-updates","_self"'+")'>View News and Updates</button><br>";

} // function setUpHomePage();


/* SPOTLIGHT TEMPLATE 

			title1 = "TITLE HERE";	
			content1 = "CONTENT GOES HERE";
			imgLnk1 = "https://aztechadmit.github.io/gcresorthighland/main/images/banner1.jpg"; 
			linkTxt1 = "";	link1 = "";
			
			title2 = "TITLE HERE";	
			content2 = "CONTENT GOES HERE";
			imgLnk2 = "https://aztechadmit.github.io/gcresorthighland/main/images/banner1.jpg"; 
			linkTxt2 = "";	link2 = "";

			title3 = "TITLE HERE";	
			content3 = "CONTENT GOES HERE";
			imgLnk3 = "https://aztechadmit.github.io/gcresorthighland/main/images/banner1.jpg"; 
			linkTxt3 = "";	link3 = "";








/* SPOTLIGHT EXAMPLE
			spotlightDiv.innerHTML = "<h1>Resort Spotlight</h1><p style='margin-top:0px;'>April "+tdate.getFullYear()+"</p>";
			spotlightDiv.innerHTML += " <div class='tileContainer'><img class='tileImage' src='https://aztechadmit.github.io/gcresorthighland/main/images/banner2.jpg'\><h3>TITLE 1</h3><p>P CONTENTS 1</p><br><a class='tileLink'>Learn More</a></div> \
      									<div class='tileContainer'><img class='tileImage' src='https://aztechadmit.github.io/gcresorthighland/main/images/banner1.jpg'\><h3>TITLE 2</h3><p>P CONTNENTS 2</p><br><a class='tileLink'>Learn More</a></div> \
      									<div class='tileContainer'><img class='tileImage' src='https://aztechadmit.github.io/gcresorthighland/main/images/banner3.jpg'\><h3>TITLE 3</h3><p>P CONTENTS 3</p><br><a class='tileLink'>Learn More</a></div> \
										<br><button style='margin:auto;'>View News and Updates</button><br>";
			break; 
*/







