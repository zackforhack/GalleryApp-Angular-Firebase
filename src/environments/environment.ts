// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDtq6rIgdz4zAnOWRLU7oDPKqlgQnGeGVE",
    authDomain: "gallery-mean.firebaseapp.com",
    databaseURL: "https://gallery-mean.firebaseio.com",
    projectId: "gallery-mean",
    storageBucket: "gallery-mean.appspot.com",
    messagingSenderId: "753178326623"
  }
};
