import { Injectable } from '@angular/core';
import { getFirestore, collection, addDoc } from '@angular/fire/firestore';
import { FirebaseApp } from '@angular/fire/app';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  db: any;

  constructor(private app: FirebaseApp) {
    this.db = getFirestore(app);
  }

  async saveLocationData(latitude: number, longitude: number, mapUrl: string) {
    const docData = {
      latitude,
      longitude,
      mapUrl,
      createdAt: new Date().getTime()
    };

    await addDoc(collection(this.db, 'locations'), docData);
  }
}
