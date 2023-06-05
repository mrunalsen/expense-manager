// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCZoB0iwuxs_EuFJywgVvmQ8Qsf_sjcUtY",
    authDomain: "expense-tracker-2bc71.firebaseapp.com",
    projectId: "expense-tracker-2bc71",
    storageBucket: "expense-tracker-2bc71.appspot.com",
    messagingSenderId: "408866978120",
    appId: "1:408866978120:web:073335e2daf39f26259b7d",
    measurementId: "G-RR8TV1B0E9"
  },
  // apiURL: 'http://172.16.3.107:2132/api/v1/'
  // apiURL: 'https://onechat-jj9m.onrender.com/api/v1/'
  baseURL: 'http://localhost:3000'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
