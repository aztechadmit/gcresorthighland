const headerHTML = document.getElementById('headerDiv');
const footerHTML = document.getElementById('footerDiv');

function initiateHeadFoot(pgNum) {
  
  //Step 1: Create the header
  resizeHeader();
  createFooter();
  
  //step 2, get the page number 0 is the index. Null means no page will be highlighted
  //This function is to display the page the viewer is currently on as bold in the header
  var idToSet = 'null';
  
  switch(pgNum){
    case 0:idToSet='head.home';break;
    case 1:idToSet='head.pts';break;
    case 'null':break;
  }//end of switch
  
  if(idToSet != 'null'){
  document.getElementById(idToSet).style.fontWeight = "bold";
  }
  
}//end of initiateHeadFoot

function createHeader(typ) {
  if(typ == 0){ //normal desktop header
    //remember to put in order of first item will be the right most, last item will be the left most
    headerHTML.innerHTML = "<a href='../../index.html'><img class='headerLogo' src='../images/gcresortlogo.png'></a>"
    
    headerHTML.innerHTML += "<a class='headerLink' href='places-to-stay.html' id='head.pts'>PLACES TO STAY</a>\
                            <a class='headerLink'>THINGS TO DO ↓</a>\
                            <a class='headerLink' href='index.html' id='head.home'>HOME</a>";
    
  }else if(typ==1){ //mobile view header
    
    
  }
  
}//end of createHeader

function createFooter() {
  footerHTML.innerHTML = "This is where the footer will go";
}//end of createFooter

function resizeHeader() {
  if (window.innerWidth < 600){
    createHeader(2);
  }else{createHeader(1);}
}//end of resizeHeader
  


// Adjust the header if the window is resized
window.onresize = resizeHeader;
