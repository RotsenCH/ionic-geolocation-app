import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitude: any = 0; 
  longitude: any = 0; 
  mapUrl: string = '';

  constructor(
    private geolocation: Geolocation,
    private firestoreService: FirestoreService
  ) {}

  options = {
    timeout: 10000, 
    enableHighAccuracy: true, 
    maximumAge: 3600
  };

  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.mapUrl = `https://www.google.com/maps/search/?api=1&query=${this.latitude},${this.longitude}`;
      this.firestoreService.saveLocationData(this.latitude, this.longitude, this.mapUrl);
     }).catch((error) => {
       console.log('Error, no se puede obtener tu ubicacion', error);
     });
  }
}
