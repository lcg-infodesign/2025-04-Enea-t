let data;
let country;
let flag;
let sigla;
let maxRadius = 100;
let minRadius = 250;


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

let dimensions = [
    "Access to financial assets",
    "Access to justice",
    "Access to land assets",
    "Access to non-land assets",
    "Child marriage eradication",
    "Female genital mutilation eradication",
    "Freedom of movement",
    "Household responsibilities",
    "Political voice",
    "Violence against women eradication",
    "Workplace rights",
];

function preload(){
    data = loadTable("assets/data.csv", "csv", "header");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    let params = getURLParams();
    country = params.country;
    console.log(country);

    sigla = countryMapping[country];
    console.log(sigla);
    flag = loadImage("assets/country_flags/svg/" + sigla + ".svg");

    frameRate(10);
}

function draw() {
    background(14, 15, 20);
    noFill();
    stroke(100)
    circle(windowWidth/2, windowHeight/2, minRadius*2 + 5)

    //Titolo con il nome del paese
    noStroke();
    fill("white");
    textSize(40);
    textStyle(BOLD);
    text(country, 50, 100)
    textSize(12);
    textStyle(NORMAL);

    for(let i = 0; i < dimensions.length; i ++){
        //dimensions è la variabile che identifica la colonna
        let dimension = dimensions[i];
        let row = data.findRow(country, "country");
        //value è la variabile che identifica il valore
        let value = row.get(dimension);
        console.log(dimension + ": " + value);

        //preparo le variabili che mi serviranno per disegnare
        let angle = map(i, 0, dimensions.length - 1, -90, 90);
        let lunghezza = map(value, 0, 100, 0, maxRadius);

        if(value){
            //disegno la barra
            push();
            translate(windowWidth/2, windowHeight/2);
            push();
            angleMode(DEGREES);
            rotate(angle);
            
            strokeWeight(10);
            stroke(255, 56, 76);
            line(minRadius + 10, 0, minRadius + lunghezza + 10, 0);
            noStroke();
            fill("white");
            textAlign(RIGHT, CENTER);
            text(dimension, minRadius, 0);
            fill(255, 56, 76);
            textAlign(LEFT, CENTER);
            text(value, minRadius + lunghezza + 20, 0);
            pop();
            pop();
        } else {
            //disegno un pallino grigio
            push();
            translate(windowWidth/2, windowHeight/2);
            push();
            angleMode(DEGREES);
            rotate(angle);
            
            noStroke();
            fill(100);
            circle(minRadius + 10, 0, 10)
            fill("white");
            textAlign(RIGHT, CENTER);
            text(dimension, minRadius, 0);
            fill(100);
            textAlign(LEFT, CENTER);
            text("Unknown", minRadius + 20, 0)
            pop();
            pop();
        }
    }
    imageMode(CENTER)
    let altezza = 210;
    image(flag, windowWidth/2 - altezza, windowHeight/2, 1.6 * altezza, altezza);
}