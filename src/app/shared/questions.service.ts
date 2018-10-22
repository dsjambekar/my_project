import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Question } from './module/question';



@Injectable({
  providedIn: 'root'
})
export class QuestionsService implements OnInit {

  questions$: AngularFireList<Question>;

  constructor(private af: AngularFireDatabase) {
    this.questions$ = af.list('/questions');
  }

  ngOnInit() {

    // this.questions$ = this.af.list('/questions');
  }

  public getAllQuestions(): AngularFireList<Question> {
    // return this.af.list('/questions').valueChanges();
    return this.questions$;
  }

  public getAllQuestionsByUser(user: any): AngularFireList<Question> {
    // return this.af.list('/questions').valueChanges();
    return this.af.list('/questions',
      ref => ref.orderByChild('created_by_id').equalTo(user.uid)
    );
  }

  public getAllPublicQuestions(): AngularFireList<Question> {
    // return this.af.list('/questions').valueChanges();
    return this.af.list('/questions',
      ref => ref.orderByChild('is_public').equalTo(true)
    );
  }

  getQuestionByKey(key: number | string): any {
    return this.af.object('/questions/' + key).valueChanges();
  }


  addNewQuestion(qustion: Question): void {
    this.questions$.push(qustion);
  }

  updateQuestion(key: string, value: any): void {
    this.questions$.update(key, value).catch(error => this.handleError(error));
  }

  deleteQuestion(key: string): void {
    this.questions$.remove(key).catch(error => this.handleError(error));
  }

  deleteAll(): void {
    this.questions$.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
