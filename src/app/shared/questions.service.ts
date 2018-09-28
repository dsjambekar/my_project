import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Question } from './module/question';



@Injectable({
  providedIn: 'root'
})
export class QuestionsService implements OnInit {

  questions$: AngularFireList<any[]>;

  constructor(private af: AngularFireDatabase) {}

  ngOnInit() {
    this.questions$ = this.af.list('/questions');
  }

  public getAllQuestions(): Observable<any[]> {
    return this.af.list('/questions').valueChanges();
  }

  addNewQuestion(qustion:Question): void {
    this.af.list('/questions').push(qustion);

  }
  // deleteQuestion(todo: any): void {
  //   // ...
  // }

  // toggleDone(todo: any): void {
  //   // ...
  // }

  // updateQuestion(todo: any, newValue: string): void {
  //   // ...
  // }
}
