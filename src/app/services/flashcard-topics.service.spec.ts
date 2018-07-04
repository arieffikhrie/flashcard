/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlashcardTopicsService } from './flashcard-topics.service';

describe('Service: FlashcardTopics', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlashcardTopicsService]
    });
  });

  it('should ...', inject([FlashcardTopicsService], (service: FlashcardTopicsService) => {
    expect(service).toBeTruthy();
  }));
});
