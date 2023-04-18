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
	switch(tmonth) {
		case 0:	// January
			
			break;
		case 1: // February 
			
			break;
		case 2: // March
			
			break;
		case 3: // April
			spotlightDiv.innerHTML = "<h1>Resort Spotlight</h1><p style='margin-top:0px;'>April "+tdate.getFullYear()+"</p>";
			spotlightDiv.innerHTML += " <div class='tileContainer'><img class='tileImage' src='https://aztechadmit.github.io/gcresorthighland/main/images/banner1.jpg'\><h3>New Look, Same Great Functionality</h3><p>You may have noticed a fresh new look to our website. We've made some changes around here to help make your experience even better!</p><br><a class='tileLink' href='information'>Learn More</a></div> \
      									<div class='tileContainer'><img class='tileImage' src='https://aztechadmit.github.io/gcresorthighland/main/images/banner3.jpg'\><h3>It's April</h3><p>Waittimes are low and tickets are cheap; Now is the perfect time for a mid-spring visit to the park!</p><br><a class='tileLink' href='parktickets'>Buy Tickets</a></div> \
      									<div class='tileContainer'><img class='tileImage' src='https://aztechadmit.github.io/gcresorthighland/main/images/banner5.jpg'\><h3>The Resort is Hiring</h3><p>Help create magic and adventure for millions of guests every year and become a part of something amazing! All this and more with a job at the funnest place in Minecraftia</p><br><a class='tileLink'>Learn More</a></div> \
										<br><button style='margin:auto;'>View News and Updates</button><br>";
			break;
		case 4: // May
			
			break;
		case 5: // June
			
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

} // function setUpHomePage();


/* SPOTLIGHT EXAMPLE
			spotlightDiv.innerHTML = "<h1>Resort Spotlight</h1><p style='margin-top:0px;'>April "+tdate.getFullYear()+"</p>";
			spotlightDiv.innerHTML += " <div class='tileContainer'><img class='tileImage' src='https://aztechadmit.github.io/gcresorthighland/main/images/banner2.jpg'\><h3>TITLE 1</h3><p>P CONTENTS 1</p><br><a class='tileLink'>Learn More</a></div> \
      									<div class='tileContainer'><img class='tileImage' src='https://aztechadmit.github.io/gcresorthighland/main/images/banner1.jpg'\><h3>TITLE 2</h3><p>P CONTNENTS 2</p><br><a class='tileLink'>Learn More</a></div> \
      									<div class='tileContainer'><img class='tileImage' src='https://aztechadmit.github.io/gcresorthighland/main/images/banner3.jpg'\><h3>TITLE 3</h3><p>P CONTENTS 3</p><br><a class='tileLink'>Learn More</a></div> \
										<br><button style='margin:auto;'>View News and Updates</button><br>";
			break; 
*/






