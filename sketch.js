let data;
let countries;
let flags = {};   // dizionario: sigla -> immagine
let margin = 50;
let values = [];
let uncertainties = [];
let maxValue, minValue, maxUncer, minUncer;
let diam = 200;

function preload() {
  data = loadTable("assets/data.csv", "csv", "header");
  countries = loadTable("assets/country_flags/countries.csv", "csv", "header");

  // carica tutte le bandiere
  for (let r = 0; r < countries.getRowCount(); r++) {
    let sigla = countries.getString(r, "sigla");
    flags[sigla] = loadImage("assets/country_flags/svg/" + sigla + ".svg");
  }
}

function findSigla(country){
  let row = countries.findRow(country, "nome_paese");
  if (!row) return null;
  return row.getString("sigla");
}

function createRanges(){
  let n = data.getRowCount();
  for (let i = 0; i < n; i++){
    values.push(data.getNum(i, "value"));
    uncertainties.push(data.getNum(i, "uncertainty"));
  }
  maxValue = max(values);
  minValue = min(values);
  maxUncer = max(uncertainties);
  minUncer = min(uncertainties);
}

function drawCircles(){
  for(let i=0; i<data.getRowCount(); i++){
    let value = data.getNum(i, "value");
    let uncertainty = data.getNum(i, "uncertainty");

    let x = map(value, minValue, maxValue, margin, width - margin);
    let y = map(uncertainty, minUncer, maxUncer, height - margin, margin);

    fill(242, 19, 42, 5);
    noStroke();
    drawingContext.filter = 'blur(50px)';
    circle(x, y, diam);
    drawingContext.filter = 'none';
  }
}

function drawFlags(){
  for(let i=0; i<data.getRowCount(); i++){
    let value = data.getNum(i, "value");
    let uncertainty = data.getNum(i, "uncertainty");

    let x = map(value, minValue, maxValue, margin, width - margin);
    let y = map(uncertainty, minUncer, maxUncer, height - margin, margin);
    
    let country = data.getString(i, "country");
    let sigla = findSigla(country);

    console.log(sigla);

    if (sigla && flags[sigla]) {
      image(flags[sigla], x-20, y-12, 40, 25);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  createRanges();
}

function draw() {
  background(14, 15, 20);
  drawCircles();
  drawFlags();
}
