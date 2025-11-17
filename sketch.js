let data;
let countries;
let flags = {};
let margin = 150;
let values = [];
let uncertainties = [];
let maxValue, minValue, maxUncer, minUncer;
let diam = 100;
let hovered = false;
let flagDim = 10;

// Mappatura diretta nome paese -> sigla ISO
const countryMapping = {
  'Denmark': 'dk',
  'Norway': 'no',
  'Netherlands': 'nl',
  'Sweden': 'se',
  'Switzerland': 'ch',
  'Finland': 'fi',
  'Germany': 'de',
  'New_Zealand': 'nz',
  'United_Kingdom': 'gb',
  'Singapore': 'sg',
  'Canada': 'ca',
  'Spain': 'es',
  'France': 'fr',
  'Austria': 'at',
  'Japan': 'jp',
  'Estonia': 'ee',
  'United_States': 'us',
  'Slovenia': 'si',
  'Australia': 'au',
  'Portugal': 'pt',
  'Kenya': 'ke',
  'Chinese_Taipei': 'tw',
  'Croatia': 'hr',
  'China': 'cn',
  'Ethiopia': 'et',
  'Latvia': 'lv',
  'Hong_Kong': 'hk',
  'Rwanda': 'rw',
  'Uruguay': 'uy',
  'Poland': 'pl',
  'Iceland': 'is',
  'Serbia': 'rs',
  'Czechia': 'cz',
  'Italy': 'it',
  'Indonesia': 'id',
  'Greece': 'gr',
  'Montenegro': 'me',
  'Cyprus': 'cy',
  'Hungary': 'hu',
  'Armenia': 'am',
  'Tanzania': 'tz',
  'Albania': 'al',
  'Lithuania': 'lt',
  'India': 'in',
  'Thailand': 'th',
  'Ghana': 'gh',
  'Guatemala': 'gt',
  'Romania': 'ro',
  'Brazil': 'br',
  'Slovak_Republic': 'sk',
  'North_Macedonia': 'mk',
  'South_Africa': 'za',
  'Trinidad_and_Tobago': 'tt',
  'Argentina': 'ar',
  'Bulgaria': 'bg',
  'Bosnia_and_Herzegovina': 'ba',
  'Zimbabwe': 'zw',
  'Colombia': 'co',
  'Maldives': 'mv',
  'Qatar': 'qa',
  'Iran': 'ir',
  'Dominican_Republic': 'do',
  'Moldova': 'md',
  'Kazakhstan': 'kz',
  'Peru': 'pe',
  'Malaysia': 'my',
  'Georgia': 'ge',
  'Korea': 'kr',
  'Haiti': 'ht',
  'Philippines': 'ph',
  'Uganda': 'ug',
  'Kyrgyzstan': 'kg',
  'Kuwait': 'kw',
  'Chile': 'cl',
  'Tajikistan': 'tj',
  'Ukraine': 'ua',
  'Venezuela': 've',
  'Nicaragua': 'ni',
  'TÃ¼rkiye': 'tr',
  'Myanmar': 'mm',
  'Nigeria': 'ng',
  'Ecuador': 'ec',
  'El_Salvador': 'sv',
  'Bolivia': 'bo',
  'Iraq': 'iq',
  'Azerbaijan': 'az',
  'Uzbekistan': 'uz',
  'Burkina_Faso': 'bf',
  'Mexico': 'mx',
  'Luxembourg': 'lu',
  'Mongolia': 'mn',
  'Saudi_Arabia': 'sa',
  'Vietnam': 'vn',
  'Libya': 'ly',
  'CÃ´te_dâ€™Ivoire': 'ci',
  'Zambia': 'zm',
  'Tunisia': 'tn',
  'Jordan': 'jo',
  'Ireland': 'ie',
  'Bangladesh': 'bd',
  'Morocco': 'ma',
  'Cambodia': 'kh',
  'Egypt': 'eg',
  'Belgium': 'be',
  'Algeria': 'dz',
  'Togo': 'tg',
  'Mozambique': 'mz',
  'Malta': 'mt',
  'Israel': 'il',
  'Benin': 'bj',
  'Palestinian_Authority': 'ps',
  'Malawi': 'mw',
  'Niger': 'ne',
  'Yemen': 'ye',
  'Cameroon': 'cm',
  'Lebanon': 'lb',
  'Comoros': 'km',
  'Namibia': 'na',
  'Burundi': 'bi',
  'Sri_Lanka': 'lk',
  'Jamaica': 'jm',
  'Pakistan': 'pk',
  'Senegal': 'sn',
  'Kosovo': 'xk',
  'Sierra_Leone': 'sl',
  'Nepal': 'np',
  'Liberia': 'lr',
  'Costa_Rica': 'cr',
  'Timor-Leste': 'tl',
  'Lesotho': 'ls',
  'Chad': 'td',
  'Honduras': 'hn',
  'Mali': 'ml',
  'Laos': 'la',
  'Madagascar': 'mg',
  'Sudan': 'sd',
  'Gambia': 'gm',
  'Bhutan': 'bt',
  'Panama': 'pa',
  'Botswana': 'bw',
  'Central_African_Republic': 'cf',
  'Belize': 'bz',
  'Mauritius': 'mu',
  'Bahrain': 'bh',
  'Mauritania': 'mr',
  'Suriname': 'sr',
  'DR_Congo': 'cd',
  'Cuba': 'cu',
  'Somalia': 'so',
  'Guinea': 'gn',
  'Eswatini': 'sz',
  'Paraguay': 'py',
  'Turkmenistan': 'tm',
  'Angola': 'ao',
  'United_Arab_Emirates': 'ae',
  'Gabon': 'ga',
  'Guyana': 'gy',
  'Djibouti': 'dj',
  'Congo': 'cg',
  'Oman': 'om',
  'Cabo_Verde': 'cv',
  'Papua_New_Guinea': 'pg',
  'Guinea-Bissau': 'gw',
  'Afghanistan': 'af',
  'Barbados': 'bb',
  'South_Sudan': 'ss',
  'Eritrea': 'er',
  'Fiji': 'fj',
  'Sao_Tome_and_Principe': 'st',
  'Syria': 'sy',
  'Samoa': 'ws',
  'Solomon_Islands': 'sb',
  'Equatorial_Guinea': 'gq',
  'Dominica': 'dm',
  'Grenada': 'gd',
  'Bahamas': 'bs',
  'Brunei_Darussalam': 'bn',
  'Antigua_and_Barbuda': 'ag',
  'Seychelles': 'sc'
};

function preload() {
  data = loadTable("assets/data.csv", "csv", "header");
  
  // Carica solo le bandiere che ci servono
  let uniqueCountries = new Set();
  // Prima dobbiamo aspettare che data sia caricato, quindi usiamo un approccio diverso
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Carica le bandiere per i paesi nel dataset
  console.log("=== Loading flags ===");
  let loaded = 0;
  for (let i = 0; i < data.getRowCount(); i++) {
    let country = data.getString(i, "country");
    let sigla = countryMapping[country];
    
    if (sigla && !flags[sigla]) {
      flags[sigla] = loadImage("assets/country_flags/svg/" + sigla + ".svg");
      loaded++;
    }
  }
  
  console.log("Started loading " + loaded + " flags");
  console.log("Flag keys:", Object.keys(flags).slice(0, 10));
  
  frameRate(8);
  createRanges();
}

function createRanges() {
  let n = data.getRowCount();
  for (let i = 0; i < n; i++) {
    values.push(data.getNum(i, "value"));
    uncertainties.push(data.getNum(i, "uncertainty"));
  }
  maxValue = max(values);
  minValue = min(values);
  maxUncer = max(uncertainties);
  minUncer = min(uncertainties);
}

function drawCircles() {
  push();
  for (let i = 0; i < data.getRowCount(); i++) {
    let value = data.getNum(i, "value");
    let uncertainty = data.getNum(i, "uncertainty");

    let x = map(value, minValue, maxValue, margin, width - margin);
    let y = map(uncertainty, minUncer, maxUncer, height - margin, margin);

    fill(255, 56, 76, 15);
    noStroke();
    drawingContext.filter = 'blur(100px)';
    circle(x, y, diam);
    drawingContext.filter = 'none';
  }
  pop();
}

function drawFlags() {
  let drawn = 0;
  cursor(ARROW);
  for (let i = 0; i < data.getRowCount(); i++) {
    let value = data.getNum(i, "value");
    let uncertainty = data.getNum(i, "uncertainty");

    let x = map(value, minValue, maxValue, margin, width - margin);
    let y = map(uncertainty, minUncer, maxUncer, height - margin, margin);
    
    let country = data.getString(i, "country");
    let sigla = countryMapping[country];

    // INTERAZIONE
    let d = dist(mouseX, mouseY, x, y);
    if(d < 8){
      hovered = true;
      flagDim = 25;
      cursor(HAND);
    }

    if (sigla && flags[sigla]) {
      let img = flags[sigla];
      // Disegna la bandiera
      push();
      translate(x,y);
      angleMode(DEGREES);
      rotate(-15);
      translate(-x, -y);
      imageMode(CENTER);
      image(img, x, y, 1.6 * flagDim, flagDim);
      pop();
      drawn++;
    }

    //tooltip
    if(hovered){
      fill(0,0,0,90);
      rectMode(CENTER);
      rect(x, y + 25, 150, 20, 15);
      fill("white");
      textSize(12);
      textStyle("normal");
      textAlign(CENTER, CENTER);
      text(country, x, y + 25);

      //interazione: cambio pagina e viz specifica
      if(mouseIsPressed){
      let newURL = "page.html?country=" + country;
      window.location.href = newURL;
    }
    }

    
    flagDim = 10;
    hovered = false;
  }
}

function drawGrid() {
  push();
  stroke(120);
  strokeWeight(1);
  fill(180);
  textAlign(CENTER, CENTER);
  textStyle("normal");

  // Assi
  // X axis
  line(margin, height - margin, width - margin, height - margin);
  // Y axis
  line(margin, height - margin, margin, margin);

  // Numero di tacche
  let ticks = 6;

  // --- TACCA & LABEL X (value) ---
  for (let i = 0; i <= ticks; i++) {
    let t = lerp(minValue, maxValue, i / ticks);
    let x = map(t, minValue, maxValue, margin, width - margin);

    // Tacca
    stroke(150);
    line(x, height - margin - 5, x, height - margin + 5);

    // Etichetta
    noStroke();
    textSize(12);
    text(nfc(t, 1), x, height - margin + 20);
  }

  // --- TACCA & LABEL Y (uncertainty) ---
  textAlign(RIGHT, CENTER);
  for (let i = 0; i <= ticks; i++) {
    let u = lerp(minUncer, maxUncer, i / ticks);
    let y = map(u, minUncer, maxUncer, height - margin, margin);

    // Tacca
    stroke(150);
    line(margin - 5, y, margin + 5, y);

    // Etichetta
    noStroke();
    textSize(12);
    text(nfc(u, 1), margin - 10, y);
  }

  // Titoli assi
  textAlign(CENTER, CENTER);
  textSize(20);
  text("value", width - margin, height - margin + 75);

  push();
  translate(margin - 45, height / 2);
  angleMode(DEGREES);
  rotate(-90);
  text("uncertainty", windowHeight/2 - margin - 20, -30);
  pop();

  pop();
}


function draw() {
  background(14, 15, 20);
  //titolo
  fill("white");
  textAlign(LEFT, BOTTOM);
  textSize(30);
  textStyle("bold");
  text("Plot of value and uncertainty", 150, 100);

  //legenda
  textSize(20);
  textStyle("normal");
  text("the red cloud represents the density \nof countries in a specific area of the graph", margin, windowHeight - 30)

  drawCircles();
  drawFlags();
  drawGrid();
}
