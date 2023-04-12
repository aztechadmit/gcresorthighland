const tdate = new Date();
//const tmonth = tdate.getMonth();

tmonth = 0;

// User inputed header informations
const headerContentTxt = [
    ""
  ];
const headerContentBkg = [
    "https://media2.giphy.com/media/YSgAZyEj9ndDDXLX9h/giphy.gif"
  ];
document.getElementById('homePgHeader').innerHTML = headerContentTxt[tmonth];
document.getElementById('homePgHeaderBkg').style.backgroundImage = "url(')"+headerContentBkg[tmonth]+"')";
