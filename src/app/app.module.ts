import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { environment } from 'src/environments/environment';
// Firebase imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    // Firebase initialization
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    Geolocation,
    NativeGeocoder,
    { 
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy 
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
