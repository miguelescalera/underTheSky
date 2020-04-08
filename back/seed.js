const Style = require("./models/style");
const Size = require("./models/size");
const Frame = require("./models/frame");
const DataProduct = require("./models/productData");
const Product = require("./models/product");
const User = require("./models/user");
const faker = require("faker");
const Orders = require("./models/order");

let dataUser = {};
let dataOrders = {};
let dataProduct = {};

const productData = [];
const ordersData = [];
const usersData = [];

// const styles = [
//   {
//     name: "classic",
//     color: "blanco"
//   },
//   {
//     name: "classic",
//     color: "negro"
//   },
//   {
//     name: "classic",
//     color: "gris"
//   }
// ];

// const frames = [
//   {
//     name: "madera",
//     price: 200
//   },
//   {
//     name: "negro",
//     price: 200
//   },
//   {
//     name: "blanco",
//     price: 200
//   }
// ];

const sizes = [
  {
    name: "13x18",
    price: 200,
  },
  {
    name: "30x40",
    price: 300,
  },
  {
    name: "50x70",
    price: 400,
  },
];

for (let i = 0; i < 10; i++) {
  dataUser = {
    type: "normal",
    firstName: faker.name.findName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: "123",
  };
  usersData.push(dataUser);

  dataOrders = {
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    country: faker.address.country(),
    state: faker.address.state(),
    postCode: faker.address.zipCode(),
    transactionNumber: 123,
  };
  ordersData.push(dataOrders);

  dataProduct = {
    place: "buenos aires",
    date: "21/03/2002",
    content: "bla bla bla",
    name: faker.name.firstName(),
    time: "12.00",
    language: "español",
    emailClient: faker.internet.email(),
    userId: 1,
    digital: false,
    size: "10X30",
    frame: "negro",
    style: "minimalista",
    price: 200,
  };
  productData.push(dataProduct);
}

Size.bulkCreate(sizes, { validate: true }).then((res) => {
  console.log(res);
});

User.bulkCreate(usersData, { validate: true }).then((res) => {
  console.log(res);
});

Orders.bulkCreate(ordersData, { validate: true }).then((res) => {
  console.log(res);
});

DataProduct.bulkCreate(productData, { validate: true }).then((res) => {
  console.log(res);
});

User.create({
  type: "admin",
  firstName: faker.name.findName(),
  lastName: faker.name.lastName(),
  email: "alan@alan.com",
  password: "123",
}).then(() => {
  console.log("user admin created");
});

/*
frames.map(e => {
 
  Frame.create(e)
    .then(newStyle => {
      console.log("added", newStyle);
    })
    .catch(err => console.error(err));
});

sizes.map(e => {
 
  Size.create(e)
    .then(newStyle => {
      console.log("added", newStyle);
    })
    .catch(err => console.error(err));
});

styles.map(e => {

  Style.create(e)
    .then(newStyle => {
      console.log("added", newStyle);
    })
    .catch(err => console.error(err));
});
*/

/*
Frame.findAll()
.then(frames=>{
  Style.findAll()
  .then(styles=>{
    Size.findAll()
    .then(sizes=>{
      frames.map(f=>{
        styles.map(st=>{
          sizes.map(si=>{
            Product.create({
              digital:false,
              sizeId:si.id,
              frameId:f.id,
              styleId:st.id
            }).then(product=>{
              DataProduct.create({
                date:"21/03/2002",
                content:"bla bla bla",
                name:faker.name.firstName(),
                time:"12.00",
                language:"español",
                emailClient:faker.internet.email(),
                userId:1,
                productId: product.id
              })
            })
          })
        })
      })
    })
  })
})
              
*/

/*
 
 for (let i = 0; i < 6; i++) {
   DataProduct.create({
     date:faker.date.past(),
     content:faker.lorem.text(),
     name:faker.name.firstName(),
     time:"12.00",
     language:"español",
     emailClient:faker.internet.email(),
     userId:1,
     productId: i
   }).then(()=>{
     console.log("done data product!")
   }).catch(err=>console.log("error:",err))
 }
 
 */

//apartir de aca esta comentado

// const addDisplay = async function({ imgURL, styleId }) {
//   const styles = [

//     (classic = {
//       name:'classic',
//       color: 'esperanza'
//     }),
//     (minimal = {
//       name:'minimalista',
//       color: 'esperanza'
//     }),
//     (zodiac = {
//       name:'zodiac',
//       color: 'esperanza'
//     }),
//     (fullColor = {
//       name:"fullColor",
//       color: 'esperanza'
//     }),
//     (polaroid = {
//       name:"polaroid",
//       color: 'esperanza'
//     }),
//   ]
//   Promise.all(
//     styles.map(async element => {
//       await Style.create({ where: { name: element.name, color: element.color } });
//     })
//     .catch(console.log)

//   )    .catch(console.log)
//   ;
//   Display.create({ imgURL, styleId }).then(product =>
//     Promise.all([
//       Style.findOrCreate({
//         where: {
//           name: input.styleId,
//         }
//       }).then(style =>
//         Display.setStyleId(style.id))
//         .catch(console.log)

//     ])
//   )
//   .catch(console.log)
//   ;
// };

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

// const styles = [

//   (classic = {
//     name:'classic',
//     color: 'esperanza'
//   }),
//   (minimal = {
//     name:'minimalista',
//     color: 'esperanza'
//   }),
//   (zodiac = {
//     name:'zodiac',
//     color: 'esperanza'
//   }),
//   (fullColor = {
//     name:"fullColor",
//     color: 'esperanza'
//   }),
//   (polaroid = {
//     name:"polaroid",
//     color: 'esperanza'
//   }),
// ]

// const displays = [
//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=20',
//     styleId: 1,
//   }),
//   (display2 = {
//     imgURL: 'https://gradientjoy.com/250x350?id=23',
//     styleId: 2,
//   }),
//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=15',
//     styleId: 3,
//   }),
//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=8',
//     styleId: 4,
//   }),
//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=39',
//     styleId: 5,
//   }),

//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=20',
//     styleId: 1,
//   }),
//   (display2 = {
//     imgURL: 'https://gradientjoy.com/250x350?id=23',
//     styleId: 2,
//   }),
//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=15',
//     styleId: 3,
//   }),
//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=8',
//     styleId: 4,
//   }),
//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=39',
//     styleId: 5,
//   }),

//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=20',
//     styleId: 1,
//   }),
//   (display2 = {
//     imgURL: 'https://gradientjoy.com/250x350?id=23',
//     styleId: 2,
//   }),
//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=15',
//     styleId: 3,
//   }),
//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=8',
//     styleId: 4,
//   }),
//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=39',
//     styleId: 5,
//   }),

//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=20',
//     styleId: 1,
//   }),
//   (display2 = {
//     imgURL: 'https://gradientjoy.com/250x350?id=23',
//     styleId: 2,
//   }),
//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=15',
//     styleId: 3,
//   }),
//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=8',
//     styleId: 4,
//   }),
//   (display = {
//     imgURL: 'https://gradientjoy.com/250x350?id=39',
//     styleId: 5,
//   }),
// ];

// displays.map(e => addDisplay(e));
