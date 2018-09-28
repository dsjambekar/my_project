import { Option } from './option';

export class Question {

  static fromJsonList(array): Question[] {
    return array.map(Question.fromArray);
  }

  static fromArray({ $key, qustion_body, category, difficulty, option_type, options, explanation_body, created_by, created_at}): Question {
    return new Question($key, qustion_body, category, difficulty, option_type, options, explanation_body, created_by, created_at);
  }

  constructor(
    public $key: string,
    public qustion_body: string,
    public category: string,
    public difficulty: string,
    public option_type: string,
    public options: Option[],
    public explanation_body: string,
    public created_by: string,
    public created_at: Number,
  ) {

  }
}
