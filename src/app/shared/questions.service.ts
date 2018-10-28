import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

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

  likeThisQuestion(questionKey: string, uid: string, liked: boolean): any {
    const user_liked_questions = this.af.list('/users_liked_questions',
      ref => ref.orderByChild('uid').equalTo(uid));
    user_liked_questions.push({ 'uid': uid, 'question_ids': questionKey })
    .then(_ => _.key);
  }

  unlikeThisQuestion(key: string) {
    const user_liked_questions = this.af.list('/users_liked_questions');
    user_liked_questions.remove(key);
  }

  getLikedQuestionsByUser(uid: string): AngularFireList<any> {
    return this.af.list('/users_liked_questions',
      ref => ref.orderByChild('uid').equalTo(uid));
  }

  private handleError(error) {
    console.log(error);
  }
}
