const headerHTML = document.getElementById('headerDiv');
const footerHTML = document.getElementById('footerDiv');
const sideBarHTML = document.getElementById('headerMenuBar');

var bOp = 0;

function initiateHeadFoot(pgNum) {
  
  //Step 1: Create the header
  resizeHeader();
  createFooter();
  
  //step 2, get the page number 0 is the index. Null means no page will be highlighted
  //This function is to display the page the viewer is currently on as bold in the header
  
  head_pgNum=pgNum;
  
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

function createFooter() {
  footerHTML.innerHTML = "This is where the footer will go";
  alert('footer created');
}//end of createFooter

function resizeHeader() {
  if (window.innerWidth < 600){
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
