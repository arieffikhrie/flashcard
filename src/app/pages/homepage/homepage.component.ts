import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlashcardTopic } from '../../models/flashcard-topic';
import { FlashcardTopicsService } from '../../services/flashcard-topics.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  panelOpenState = false;
  topics: Observable<FlashcardTopic[]>;

  constructor(private topicsService: FlashcardTopicsService) { }

  ngOnInit() {
    this.topics = this.topicsService.getTopics();
  }

}
