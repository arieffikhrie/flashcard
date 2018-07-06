import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
>>>>>>> 8584d179fd794f26b4d31f7ae5419cc05e0386f9
import { Observable } from 'rxjs';
import { FlashcardTopic } from '../../models/flashcard-topic';
import { FlashcardTopicsService } from '../../services/flashcard-topics.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
<<<<<<< HEAD
  panelOpenState = false;
  topics: Observable<FlashcardTopic[]>;

  constructor(private topicsService: FlashcardTopicsService) { }

  ngOnInit() {
    this.topics = this.topicsService.getTopics();
=======
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
>>>>>>> 8584d179fd794f26b4d31f7ae5419cc05e0386f9
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
