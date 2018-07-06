import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { FlashcardTopic } from '../models/flashcard-topic';
=======
import { map } from 'rxjs/operators';
import { FlashcardCard } from './../models/flashcard-card';
import { FlashcardTopic } from './../models/flashcard-topic';
>>>>>>> 8584d179fd794f26b4d31f7ae5419cc05e0386f9

@Injectable()
export class FlashcardTopicsService {
  CONSTANTS = {
<<<<<<< HEAD
    TOPICS: 'topics'
  }
  private topicsCollection: AngularFirestoreCollection<FlashcardTopic>;
  private topicDocument: AngularFirestoreDocument<FlashcardTopic>
  
=======
    TOPICS: 'topics',
    CARDS: 'cards'
  };

  private topicsCollection: AngularFirestoreCollection<FlashcardTopic>;
  private topicDocument: AngularFirestoreDocument<FlashcardTopic>;
  private cardsCollection: AngularFirestoreCollection<FlashcardCard>;
  private cardDocument: AngularFirestoreDocument<FlashcardCard>;

>>>>>>> 8584d179fd794f26b4d31f7ae5419cc05e0386f9
  constructor(private afs: AngularFirestore) {
    this.topicsCollection = afs.collection(this.CONSTANTS.TOPICS);
  }

  getTopics(): Observable<FlashcardTopic[]> {
    this.topicsCollection = this.afs.collection(this.CONSTANTS.TOPICS);
<<<<<<< HEAD
    return this.topicsCollection.valueChanges();
=======
    return this.topicsCollection.snapshotChanges().pipe(map(items => {
      return items.map(item => {
        const value = item.payload.doc.data() as FlashcardTopic;
        value.id = item.payload.doc.id;
        return value;
      });
    }));
>>>>>>> 8584d179fd794f26b4d31f7ae5419cc05e0386f9
  }

  getTopic(id: string): Observable<FlashcardTopic> {
    this.topicDocument = this.topicsCollection.doc(id);
<<<<<<< HEAD
    return this.topicDocument.valueChanges();
=======
    return this.topicDocument.snapshotChanges().pipe(map(changes => {
      const values = changes.payload.data() as FlashcardTopic;
      values.id = changes.payload.id;
      return values;
    }));
>>>>>>> 8584d179fd794f26b4d31f7ae5419cc05e0386f9
  }

  addTopic(item: FlashcardTopic): void {
    this.topicsCollection = this.afs.collection(this.CONSTANTS.TOPICS);
    this.topicsCollection.add(item);
  }

  updateTopic(id: string, item: FlashcardTopic): void {
    this.topicDocument = this.topicsCollection.doc(id);
    this.topicDocument.update(item);
  }

  deleteTopic(id: string): void {
    this.topicDocument = this.topicsCollection.doc(id);
    this.topicDocument.delete();
  }
<<<<<<< HEAD
=======

  getCards(topicID: string): Observable<FlashcardCard[]> {
    this.topicDocument = this.topicsCollection.doc(topicID);
    this.cardsCollection = this.topicDocument.collection(this.CONSTANTS.CARDS);
    return this.cardsCollection.snapshotChanges().pipe(map(items => {
      return items.map(item => {
        const value = item.payload.doc.data() as FlashcardCard;
        value.id = item.payload.doc.id;
        return value;
      });
    }));
  }

  addCard(topicID: string, item: FlashcardCard): void {
    this.topicDocument = this.topicsCollection.doc(topicID);
    this.cardsCollection = this.topicDocument.collection(this.CONSTANTS.CARDS);
    this.cardsCollection.add(item);
  }

  updateCard(topicID: string, id: string, item: FlashcardTopic): void {
    this.topicDocument = this.topicsCollection.doc(topicID);
    this.cardsCollection = this.topicDocument.collection(this.CONSTANTS.CARDS);
    this.cardDocument = this.cardsCollection.doc(id);
    this.cardDocument.update(item);
  }

  deleteCard(topicID: string, id: string): void {
    this.topicDocument = this.topicsCollection.doc(topicID);
    this.cardsCollection = this.topicDocument.collection(this.CONSTANTS.CARDS);
    this.cardDocument = this.cardsCollection.doc(id);
    this.cardDocument.delete();
  }

>>>>>>> 8584d179fd794f26b4d31f7ae5419cc05e0386f9
}
