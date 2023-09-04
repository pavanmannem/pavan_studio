// import { setText } from './update.js'; 

var pgT = [];
var pEntry = [];
var heightRatio = [];
var sHarry = [];

var pImg = [];
var tFont = [];

var pGradV, pGradH, pGradCH;

var pgTextSize = 164;
var inverter = true;
var bkgdColor = 'white';
var foreColor;

var keyText;
var keyArray = [];

var xNudge = [];
var wordCount = [];
var wWindow;
var wPad;

var fullHeight = 0;

var colorA = [];

var widgetOn = true;


var typeToggle = 1;

function preload() {
  // Cache DOM elements
  const loadingBarEl = document.querySelector('.loading-bar');
  const loadingPercentageEl = document.querySelector('.loading-percentage');
  const loadingBarContainerEl = document.querySelector('.loading-bar-container');
  const buttonContainerEl = document.querySelector('.button-container');

  let loadedImagesCount = 0;
  let totalResources = 15; // 12 images + 3 fonts

  // Callback for updating the progress
  function updateProgress() {
      loadedImagesCount++;
      let percentage = (loadedImagesCount / totalResources) * 100;
      loadingBarEl.style.width = percentage + '%';
      loadingPercentageEl.innerText = percentage.toFixed(0);

      if (loadedImagesCount == totalResources) {
          loadingBarContainerEl.style.display = 'none';
          buttonContainerEl.style.display = 'flex';
      }
  }

  // Load fonts in parallel
  const fontPaths = [
    // "./resources/fonts/PPNeueMachina-Regular.ttf",
    // "./resources/fonts/PPNeueMachina-Regular.ttf",
    // "./resources/fonts/PPNeueMachina-Regular.ttf",
    "./resources/fonts/Amphora-Regular.otf",
    "./resources/fonts/Amphora-Regular.otf",
    "./resources/fonts/Amphora-Regular.otf",
    // "./resources/fonts/QuantaGroteskPro-Medium.ttf",


  ];
  
  fontPaths.forEach((path, index) => {
      tFont[index] = loadFont(path, updateProgress, err => {
          console.error(`Error loading font from ${path}:`, err);
      });
  });

  // Load images
  for (let i = 0; i < 13; i++) {
      pImg[i] = loadImage("./resources/gifs/" + i + ".gif", 
          updateProgress,
          err => {
              console.error(`Error loading image at index ${i}:`, err);
          }
      );
  }
}



function setup(){

  createCanvas(windowWidth,windowHeight);
  frameRate(120);

  wWindow = width - map(wPad, 0, 100, 0, width);
  typeToggle = int(random(1,2));

  bkgdColor = color('#ffffff');
  foreColor = color('#000000');
  colorA[0] = color('#25d964');
  colorA[1] = color('#f24f13');
  colorA[2] = color('#f2b90f');
  colorA[3] = color('#0f5cbf');
  colorA[4] = bkgdColor;

  pGradientH();
  pGradientV();
  pGradientCH();

  setText();
}

function draw(){
  background(bkgdColor);

  push();
    translate(width/2, height/2 - fullHeight/2);
    italicWave0();
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight, WEBGL);
  wWindow = width - map(wPad, 0, 100, 0, width);

  setText();
}

