const { 
  User,
  Product,
  Frame,
  Style,
  Size,
  Order,
  Display
 } = require("./models/index.js");




//SEED DE >>------> FRAMES 
function addFrame({ frameless, type, price }) {
  Frame.create({
    frameless,
    type,
    price
  })
    .then(newFrame => {
      console.log("added ", newFrame);
    })
    .catch(console.log);
}

const frames = [
  (blanco = {
    frameless: false,
    type: "blanco",
    price: 300,
  }),
  (madera = {
    frameless: false,
    type: "madera",
    price: 350,
  }),
  (negro = {
    frameless: false,
    type: "negro",
    price: 400,
  }),
  (digital = {
    frameless: true,
    type: "digital",
    price: 200,
  }),
];

frames.map(e => addFrame(e));


//SEED DE >>------> SIZE 
function addSize({ width, height, price }) {
  Size.create({
    width,
    height,
    price
  })
    .then(newSize => {
      console.log("added ", newSize);
    })
    .catch(console.log);
}

const sizes = [
  (size1 = {
    width: 50,
    height: 70,
  }),
  (size2 = {
    width: 60,
    height: 90,
  }),
  (size3 = {
    width: 30,
    height: 50,
  })
];

sizes.map(e => addSize(e));

//SEED DE >>------> STYLES 
function addStyle({ name, color }) {
  Style.create({
    name,
    color
  })
    .then(newStyle => {
      console.log("added ", newStyle);
    })
    .catch(console.log);
}

const styles = [
  (classic= {
    name: 'classic',
    color: 'white',
  }),
  (fullColor= {
    name: 'fullColor',
    color: 'green',
  }),
  (fullColor1= {
    name: 'fullColor',
    color: 'red',
  }),
  (fullColor2= {
    name: 'fullColor',
    color: 'black',
  }),
  (polaroid= {
    name: 'polaroid',
    color: 'green',
  }),
  (polaroid1= {
    name: 'polaroid',
    color: 'red',
  }),
  (polaroid2= {
    name: 'polaroid',
    color: 'black',
  }),
  (minimal= {
    name: 'minimal',
    color: 'green',
  }),
  (minimal1= {
    name: 'minimal',
    color: 'red',
  }),
  (minimal2= {
    name: 'minimal',
    color: 'black',
  }),
  (zodiac= {
    name: 'zodiac',
    color: 'green',
  }),
  (zodiac1= {
    name: 'zodiac',
    color: 'red',
  }),
  (zodiac2= {
    name: 'zodiac',
    color: 'black',
  }),
  
  
];

styles.map(e => addStyle(e));


//SEED DE >>------> DISPLAY 
function addDisplay({ img, style }) {
  Display.create({
    img,
    style,
  })
    .then(newDisplay => {
      console.log("added ", newDisplay);
    })
    .catch(console.log);
}

const displays = [
  (display = {
    img: 'https://gradientjoy.com/250x350?id=20',
    style: 1,
  }),
  (display2 = {
    img: 'https://gradientjoy.com/250x350?id=23',
    style: 2,
  }),
  (display = {
    img: 'https://gradientjoy.com/250x350?id=15',
    style: 3,
  }),
  (display = {
    img: 'https://gradientjoy.com/250x350?id=8',
    style: 4,
  }),
  (display = {
    img: 'https://gradientjoy.com/250x350?id=39',
    style: 5,
  }),
];

displays.map(e => addDisplay(e));