const dark_main_color = '#F74d26';


const light_main_color = '#5f05fa';


function updateStripAndPadding() {
  // Calculate the values based on screen size
  console.log(window.innerHeight, window.innerWidth)

  stripH = window.innerHeight * 0.09; // You can adjust the multiplier as needed

  wPad = window.innerWidth * 0.04 ;   // You can adjust the multiplier as needed
  console.log("stripH", stripH,"|", "wPad", wPad)

}

function setText(){
  pgT = [];
  pEntry = [];
  heightRatio = [];
  xNudge = [];
  wordCount = [];
  sHarry = [];

  fullHeight = 0;
  // var enteredText = "I AM PAVAN MANNEM FIND ME IN LOS ANGELES CRUNCHING NUMBERS AT SONY PICTURES & ENTERTAINMENT";
  // var enteredText = "I'M PAVAN MANNEM → FIND ME IN AUSTIN CRUNCHING NUMBERS AT SYNTHESIS PARTNERS — A CREATIVE DATA HOUSE";
  var enteredText = "I'M PAVAN MANNEM → FIND ME IN LOS ANGELES CRUNCHING NUMBERS & BUILDING A GROWTH STAGE STARTUP";

  
  // var enteredText =  "\"BANG\" — MIKE BREEN" 

  keyText = enteredText;
  keyArray = enteredText.split(" ");

  if(keyArray == null){
    keyArray = "";
  }


  updateStripAndPadding(); // Call the function to calculate stripH and wPad

  wWindow = width - map(wPad, 0, 100, 0, width);


  randomInsert();

  var lineDist = 0;
  var lineCount = 0;
  var thisWordCount = 0;

  var rSh = random(10);
  var sH = stripH;
  if(rSh>7.5){
    sH = stripH/4;
  } else if(rSh>5){
    sH = stripH/2;
  }

  for(var k = 0; k<keyArray.length; k++){

    if(lineDist > wWindow){
      xNudge[lineCount] = lineDist;
      wordCount[lineCount] = thisWordCount;
      sHarry[lineCount] = sH;
      fullHeight += sH;

      lineCount ++;
      lineDist = 0;
      thisWordCount = 0;

      var rSh = random(10);

      sH = stripH;
      if(rSh>7.5){
        sH = stripH/4;
      } else if(rSh>5){
        sH = stripH/2;
      }
    }

    var ver = 0;

    if(keyArray[k] == "X0"){  // IMAGE
      pgImage(k, sH);
      ver = 0;
    } else if(keyArray[k] == "X1"){  // SLASHES
      pSlash(k, sH);
      ver = 1;
    } else if(keyArray[k] == "X2"){  // CIRCLES
      pRound(k, sH);
      ver = 2;
    } else if(keyArray[k] == "X3"){  // SCRIBBLE
      pBlank(k, sH);
      ver = 3;
    } else if(keyArray[k] == "X4"){  // BLANKS
      pBlank(k, sH);
      ver = 4;
    } else if(keyArray[k] == "X5"){  // CLOUD
      pBlank(k, sH);
      ver = 5;
    } else if(keyArray[k] == "X6"){  // ZIGZAG
      pBlank(k, sH);
      ver = 6;
    } else if(keyArray[k] == "X7"){  // GRADIENT
      pBlank(k, sH);
      ver = 7;
    } else if(keyArray[k] == "X8"){  // BOXES
      pBlank(k, sH);
      ver = 8;
    } else {
      var rFont = random(10);
      if(rFont < 8){
        pgTexture1(keyArray[k], 0, k, sH);
      } else {
        pgTexture1(keyArray[k], typeToggle, k, sH);
      }
      ver = 9;
    }

    thisWordCount ++;
    lineDist += heightRatio[k];

    pEntry[k] = new Entry(k, ver, sH);
  }

  xNudge[lineCount] = lineDist;
  wordCount[lineCount] = thisWordCount;
  sHarry[lineCount] = sH;
  fullHeight += sH;
}

function reRoll(){
  typeToggle = round(random(1,2));

  setText();
}

function aSet(ticker, influ){          // takes a 0 - 1 and returns an eased 0 - 1
  var capTicker = ticker%1;

  var targetPoint = pow(capTicker,influ)/(pow(capTicker,influ) + pow(1-capTicker,influ));
  return targetPoint;
}

function randomInsert(){

  // insert for images
  // var r0 = 8;
  var r0 = 1 + floor(keyArray.length/5);
  for(var r = 0; r<r0; r++){
    var insertPoint = round(random(keyArray.length));
    keyArray.splice(insertPoint, 0, "X0");
  }

  // insert for circles
  // var r2 = 5;
  var r2 = 1 + floor(keyArray.length/12);
  for(var r = 0; r<r2; r++){
    var insertPoint = round(random(keyArray.length));
    keyArray.splice(insertPoint, 0, "X2");
  }


  // insert for zigzag
  // var r6 = 4;
  var r6 = 1 + floor(keyArray.length/15)
  for(var r = 0; r<r6; r++){
    var insertPoint = round(random(keyArray.length));
    keyArray.splice(insertPoint, 0, "X6");
  }

  // insert for gradient
  // var r7 = 4;
  var r7 = 1 + floor(keyArray.length/12)
  for(var r = 0; r<r7; r++){
    var insertPoint = round(random(keyArray.length));
    keyArray.splice(insertPoint, 0, "X7");
  }

}


function applyStyles(primaryColor, secondaryColor, oppositeColor) {
  // Applying styles for ".pill-button"
  let pillButtons = document.querySelectorAll('.pill-button');
  pillButtons.forEach(function(button) {
    button.style.borderColor = secondaryColor;
    button.style.color = primaryColor;

    button.onmouseover = function() {
      button.style.backgroundColor = secondaryColor;
    };

    button.onmouseout = function() {
      button.style.backgroundColor = '';
    };
  });

  // Applying styles for ".social-links a"
  let socialLinks = document.querySelectorAll('.social-links a');
  socialLinks.forEach(function(link) {
    link.style.color = primaryColor;

    link.onmouseover = function() {
      link.style.color = oppositeColor;
    };

    link.onmouseout = function() {
      link.style.color = primaryColor;
    };
  });

  // Applying styles for ".credit" and ".credit a"
  let credit = document.querySelector('.credit');
  credit.style.color = primaryColor;

  let creditLinks = document.querySelectorAll('.credit a');
  creditLinks.forEach(function(link) {
    link.style.color = primaryColor;

    link.onmouseover = function() {
      link.style.color = oppositeColor;
    };

    link.onmouseout = function() {
      link.style.color = primaryColor;
    };
  });
}



var inverter = true; // make sure to define `inverter` before using it

function invert() {
  inverter = !inverter;

  if(inverter == true){
    // Light Theme Styles    
    bkgdColor = color('#FFFFFF');
    foreColor = color('#000000');
    colorA[4] = bkgdColor;
    pImg[6] = loadImage("./resources/gifs/6i.gif");
    applyStyles('#5f05fa','#D1A9FF', '#F74d26');

    pGradientH();
    pGradientV();
    pGradientCH();

    setText();

  } else {
    // Dark Theme Styles    
    bkgdColor = color('#000000');
    foreColor = color('#ffffff');
    colorA[4] = bkgdColor;
    pImg[6] = loadImage("./resources/gifs/6.gif");
    applyStyles('#F74d26','#F18268', '#5f05fa');

    pGradientH();
    pGradientV();
    pGradientCH();

    setText();
  }
}
