const { 
  Display,
  Style
 } = require("./models/index.js");



function addStyle(name, color) {
  Style.create({
    name,
    color
  })
  .then(newStyle => {
    console.log("added", newStyle);
  })
  .catch(console.log);
}




const styles = [
  
  (classic = {
    name:'classic',
    color: 'esperanza'
  }),
  (minimal = {
    name:'minimalista',
    color: 'esperanza'
  }),
  (zodiac = {
    name:'zodiac',
    color: 'esperanza'
  }),
  (fullColor = {
    name:"fullColor",
    color: 'esperanza'
  }),
  (polaroid = {
    name:"polaroid",
    color: 'esperanza'
  }),
]

styles.map(e => addStyle(e));



const addDisplay = async function({ imgURL, styleId }) {
  const styles = [
  
    (classic = {
      name:'classic',
      color: 'esperanza'
    }),
    (minimal = {
      name:'minimalista',
      color: 'esperanza'
    }),
    (zodiac = {
      name:'zodiac',
      color: 'esperanza'
    }),
    (fullColor = {
      name:"fullColor",
      color: 'esperanza'
    }),
    (polaroid = {
      name:"polaroid",
      color: 'esperanza'
    }),
  ]
  Promise.all(
    styles.map(async element => {
      await Style.create({ where: { name: element.name, color: element.color } });
    })
    .catch(console.log)

  )    .catch(console.log)
  ;
  Display.create({ imgURL, styleId }).then(product =>
    Promise.all([
      Style.findOrCreate({
        where: {
          name: input.styleId,
        }
      }).then(style => 
        Display.setStyleId(style.id))
        .catch(console.log)

    ])
  )
  .catch(console.log)
  ;
};


//SEED DE >>------> DISPLAY 
// function addDisplay({ imgURL, styleId }) {
//   Display.create({
//     imgURL,
//     styleId,
//   })
//     .then(newDisplay => {
//       console.log("added ", newDisplay);
//     })
//     .catch(console.log);
// }


const styles = [
  
  (classic = {
    name:'classic',
    color: 'esperanza'
  }),
  (minimal = {
    name:'minimalista',
    color: 'esperanza'
  }),
  (zodiac = {
    name:'zodiac',
    color: 'esperanza'
  }),
  (fullColor = {
    name:"fullColor",
    color: 'esperanza'
  }),
  (polaroid = {
    name:"polaroid",
    color: 'esperanza'
  }),
]

const displays = [
  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=20',
    styleId: 1,
  }),
  (display2 = {
    imgURL: 'https://gradientjoy.com/250x350?id=23',
    styleId: 2,
  }),
  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=15',
    styleId: 3,
  }),
  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=8',
    styleId: 4,
  }),
  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=39',
    styleId: 5,
  }),


  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=20',
    styleId: 1,
  }),
  (display2 = {
    imgURL: 'https://gradientjoy.com/250x350?id=23',
    styleId: 2,
  }),
  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=15',
    styleId: 3,
  }),
  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=8',
    styleId: 4,
  }),
  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=39',
    styleId: 5,
  }),


  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=20',
    styleId: 1,
  }),
  (display2 = {
    imgURL: 'https://gradientjoy.com/250x350?id=23',
    styleId: 2,
  }),
  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=15',
    styleId: 3,
  }),
  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=8',
    styleId: 4,
  }),
  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=39',
    styleId: 5,
  }),

  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=20',
    styleId: 1,
  }),
  (display2 = {
    imgURL: 'https://gradientjoy.com/250x350?id=23',
    styleId: 2,
  }),
  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=15',
    styleId: 3,
  }),
  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=8',
    styleId: 4,
  }),
  (display = {
    imgURL: 'https://gradientjoy.com/250x350?id=39',
    styleId: 5,
  }),
];

displays.map(e => addDisplay(e));