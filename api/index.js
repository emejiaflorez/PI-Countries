//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const countries = require('./countries.json');

// const fetch = require('node-fetch')
// import fetch from "node-fetch";
// globalThis.fetch = fetch
// const url = 'https://restcountries.com/v3.1/all';

// fetch(url)
//  .then(resp => resp.json())
//  .then(data => {
//      console.log(data);
// })
// .catch(err => {
//      console.log(err);
// })

//import fetch from "node-fetch";

// const fetchData = async () => {
//   const res = await fetch("https://restcountries.com/v3.1/all"); // fetch() returns a promise, so we need to wait for it
//   const country = await res.json(); // res is now only an HTTP response, so we need to call res.json()
//   console.log(country); // Columbia's data will be logged to the dev console
// };

// fetchData();

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
      console.log('%s listening at 3001'); // eslint-disable-line no-console
   
     //Precargamos la Base de Datos con todos los paises desde la Api restCountries
      countries.forEach((e) => {
        const paises = Country.create({
          ID : e.cioc, 
          nombre : e.name,
          imgFlag : e.flag,
          continente : e.region,
          capital : e.capital,
          subRegion : e.subregion,
          area : e.area,
          poblacion: e.population      
        });
         Promise.all([paises])
      });
       console.log(" Paises precargados Exitosamente....")
      })
  });


