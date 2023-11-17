import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
/*import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // ...
  storageBucket: 'gs://storage-aqruimentor.appspot.com'
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);*/

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
