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
			title1 = 'Test1';	content1 = 'Test1';	imgLnk1 = 'Test1'; link1 = 'Test1';	linkTxt1 = 'Test1';
			title2 = '';	content2 = '';	imgLnk2 = ''; link2 = '';	linkTxt2 = '';
			title3 = '';	content3 = '';	imgLnk3 = ''; link3 = '';	linkTxt3 = '';
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
	
	// Build the Resort Spotlight Section
	spotlightDiv.innerHTML = "<h1>Resort Spotlight</h1><p style='margin-top:0px;'>April "+tdate.getFullYear()+"</p>";
	spotlightDiv.innerHTML += " <div class='tileContainer'><img class='tileImage' src='" + imgLnk1 + "'\><h3>" + title1 + "</h3><p>" + content1 + "</p><br><a class='tileLink' href='" + link1 + "'>" + linkTxt1 + "</a></div> \
      							<div class='tileContainer'><img class='tileImage' src='" + imgLnk2 + "'\><h3>" + title2 + "</h3><p>" + content2 + "</p><br><a class='tileLink' href='" + link2 + "'>" + linkTxt2 + "</a></div> \
								<div class='tileContainer'><img class='tileImage' src='" + imgLnk3 + "'\><h3>" + title3 + "</h3><p>" + content3 + "</p><br><a class='tileLink' href='" + link3 + "'>" + linkTxt3 + "</a></div> \
								<br><button style='margin:auto;' onclick='window.open("+'"parktickets"'+")'>View News and Updates</button><br>";

} // function setUpHomePage();




/* SPOTLIGHT EXAMPLE
			spotlightDiv.innerHTML = "<h1>Resort Spotlight</h1><p style='margin-top:0px;'>April "+tdate.getFullYear()+"</p>";
			spotlightDiv.innerHTML += " <div class='tileContainer'><img class='tileImage' src='https://aztechadmit.github.io/gcresorthighland/main/images/banner2.jpg'\><h3>TITLE 1</h3><p>P CONTENTS 1</p><br><a class='tileLink'>Learn More</a></div> \
      									<div class='tileContainer'><img class='tileImage' src='https://aztechadmit.github.io/gcresorthighland/main/images/banner1.jpg'\><h3>TITLE 2</h3><p>P CONTNENTS 2</p><br><a class='tileLink'>Learn More</a></div> \
      									<div class='tileContainer'><img class='tileImage' src='https://aztechadmit.github.io/gcresorthighland/main/images/banner3.jpg'\><h3>TITLE 3</h3><p>P CONTENTS 3</p><br><a class='tileLink'>Learn More</a></div> \
										<br><button style='margin:auto;'>View News and Updates</button><br>";
			break; 
*/






