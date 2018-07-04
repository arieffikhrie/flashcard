import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FlashcardTopic } from '../../models/flashcard-topic';
import { FlashcardTopicsService } from '../../services/flashcard-topics.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  topicForm: FormGroup;

  topics: Observable<FlashcardTopic[]>;

  constructor(private topicsService: FlashcardTopicsService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.topics = this.topicsService.getTopics();
  }

  createForm() {
    this.topicForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      dateCreated: [Date.now()]
    });
  }

  get topicFormValues() {
    return this.topicForm.value;
  }

  addTopicSubmitHandler() {
    if (this.topicForm.valid) {
      this.topicsService.addTopic(this.topicFormValues);
      this.topicForm.reset();
    }
  }
}
