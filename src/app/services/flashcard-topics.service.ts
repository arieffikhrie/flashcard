import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { FlashcardTopic } from '../models/flashcard-topic';

@Injectable()
export class FlashcardTopicsService {
  CONSTANTS = {
    TOPICS: 'topics'
  }
  private topicsCollection: AngularFirestoreCollection<FlashcardTopic>;
  private topicDocument: AngularFirestoreDocument<FlashcardTopic>
  
  constructor(private afs: AngularFirestore) {
    this.topicsCollection = afs.collection(this.CONSTANTS.TOPICS);
  }

  getTopics(): Observable<FlashcardTopic[]> {
    this.topicsCollection = this.afs.collection(this.CONSTANTS.TOPICS);
    return this.topicsCollection.valueChanges();
  }

  getTopic(id: string): Observable<FlashcardTopic> {
    this.topicDocument = this.topicsCollection.doc(id);
    return this.topicDocument.valueChanges();
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
}
