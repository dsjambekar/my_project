import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';



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

  addNewQuestion(value: string, type: string): void {
    this.af.list('/questions').push({text: value, type: type});

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
