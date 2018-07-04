import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FlashcardCard } from './../../models/flashcard-card';
import { FlashcardTopic } from './../../models/flashcard-topic';
import { FlashcardTopicsService } from './../../services/flashcard-topics.service';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit, OnDestroy {
  topic$: Observable<FlashcardTopic>;
  topic: FlashcardTopic;
  routeSub: any;
  isLoading: Boolean = true;
  topicID: string;
  cardForm: FormGroup;
  cards$: Observable<FlashcardCard[]>;
  cards: FlashcardCard[];
  currentCard: FlashcardCard;
  currentCardIndex: number;
  isFlipped: Boolean = false;

  constructor(private topicsService: FlashcardTopicsService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.cardForm = this.fb.group({
      front: ['', Validators.required],
      back: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.topicID = params['id'];
      this.topic$ = this.topicsService.getTopic(params['id']);
      this.topic$.subscribe((topic: FlashcardTopic) => {
        this.topic = topic;
        this.isLoading = false;
        this.cards$ = this.topicsService.getCards(this.topicID);
        this.cards$.subscribe((cards: FlashcardCard[]) => {
          this.cards = cards.sort(() => 0.5 - Math.random());
          if (this.cards.length > 0) {
            this.currentCardIndex = 0;
            this.currentCard = this.cards[this.currentCardIndex];
          }
        });
      });
   });
  }

  get cardFormValues() {
    return this.cardForm.value as FlashcardCard;
  }

  addCardSubmitHandler() {
    if (this.cardForm.valid) {
      this.topicsService.addCard(this.topicID, this.cardFormValues);
      this.cardForm.reset();
    }
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  flipCardHandler(): void {
    this.isFlipped = !this.isFlipped;
  }

  goNextHandler(): void {
    this.isFlipped = false;
    this.currentCardIndex++;
    if (this.currentCardIndex >= this.cards.length) {
      this.currentCardIndex = 0;
      this.cards = this.cards.sort(() => 0.5 - Math.random());
    }
    this.currentCard = this.cards[this.currentCardIndex];
  }

}
