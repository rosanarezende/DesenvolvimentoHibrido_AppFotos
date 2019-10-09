// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = { // vou importar esse enviroment no app.modules.ts
  production: false, //coloquei essa vírgula
  firebaseConfig: { // troquei o = por :  // email rosanarezende.dev@gmail.com
    apiKey: "AIzaSyCF1HfAuA9QPX2LyjPtUpU4wV0HJxfjJSU",
    authDomain: "appfotos-dc4d2.firebaseapp.com",
    databaseURL: "https://appfotos-dc4d2.firebaseio.com",
    projectId: "appfotos-dc4d2",
    storageBucket: "",
    messagingSenderId: "667149725911",
    appId: "1:667149725911:web:2ea6076e72ab8563050092",
    measurementId: "G-9G1XB1ZMSQ"
  } // tirei o ;
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
