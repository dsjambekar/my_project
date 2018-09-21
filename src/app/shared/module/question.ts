export class Question {

  static fromJsonList(array): Question[] {
    return array.map(Question.fromArray);
  }

  static fromArray({$key, content}): Question {
    return new Question($key, content);
  }

  constructor(
    public $key: string,
    public content: string
  ) {}
}
