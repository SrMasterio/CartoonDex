import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ActionPerformed, PushNotificationSchema, PushNotifications, Token } from '@capacitor/push-notifications';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     ReactiveFormsModule,
     ServiceWorkerModule.register('ngsw-worker.js', {
       enabled: !isDevMode(),

       registrationStrategy: 'registerWhenStable:30000'
     })
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    provideFirebaseApp(() => initializeApp({"projectId":"rickmortydex",
      "appId":"1:81315609649:web:59f78beb52f88894ca2910","storageBucket":
      "rickmortydex.appspot.com","apiKey":"AIzaSyA3QyrRDs8NhkwlaJATYXctuWpsZDINRVs",
      "authDomain":"rickmortydex.firebaseapp.com","messagingSenderId":"81315609649"})), provideAuth(() => getAuth())],
  bootstrap: [AppComponent],
})
export class AppModule {}
