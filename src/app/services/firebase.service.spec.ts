import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseService } from './firebase.service';
import { of } from 'rxjs';

describe('FirebaseService - Combined Tests', () => {
  let service: FirebaseService;
  let firestoreMock: any;

  beforeEach(() => {
    firestoreMock = {
      collection: jasmine.createSpy('collection').and.callFake(() => ({
        add: jasmine.createSpy('add').and.returnValue(Promise.resolve({ id: 'test-id' })),
        snapshotChanges: jasmine.createSpy('snapshotChanges').and.returnValue(of([])),
      })),
    };

    TestBed.configureTestingModule({
      providers: [
        FirebaseService,
        { provide: AngularFirestore, useValue: firestoreMock },
      ],
    });

    service = TestBed.inject(FirebaseService);
  });

  it('should connect to the database and retrieve snapshot changes', (done) => {
    service.testConnection().subscribe((result) => {
      expect(firestoreMock.collection).toHaveBeenCalledWith('test');
      expect(firestoreMock.collection('test').snapshotChanges).toHaveBeenCalled();
      expect(result).toEqual([]); // Resultado simulado vacío
      done();
    });
  });

  it('should add a character and return its document reference id', (done) => {
    const mockCharacter = { name: 'Morty Smith', status: 'Alive', species: 'Human' };

    service.addCharacter(mockCharacter).then((result) => {
      expect(firestoreMock.collection).toHaveBeenCalledWith('characters');
      expect(firestoreMock.collection('characters').add).toHaveBeenCalledWith(mockCharacter);
      expect(result.id).toBe('test-id'); // Verifica el ID simulado
      done();
    });
  });
});
