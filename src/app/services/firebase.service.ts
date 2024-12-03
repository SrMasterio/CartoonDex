import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  // Prueba de conexión: Obtiene cambios en la colección 'test'
  testConnection() {
    return this.firestore.collection('test').snapshotChanges();
  }

  // Agregar un personaje a la colección 'characters'
  addCharacter(character: { name: string; status: string; species: string }) {
    return this.firestore.collection('characters').add(character);
  }
}
