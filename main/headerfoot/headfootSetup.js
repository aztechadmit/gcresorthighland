const headerHTML = document.getElementById('headerDiv');
const footerHTML = document.getElementById('footerDiv');

var typ = 0;

function initiateHeadFoot() {createFooter(); resizeHeader();}

function createHeader(typ) {
  if(typ == 0){ //normal desktop header
    
    
  }else if(typ==1){ //mobile view header
    
    
  }
  
}

function createFooter() {
  
}

function resizeHeader() {
  if (window.innerWidth < 900){
    createHeader(1);
  }else{createHeader(2);
}

// Adjust the header if the window is resized
window.onresize = resizeHeader;
