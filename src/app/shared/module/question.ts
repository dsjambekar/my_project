import { Option } from './option';

export class Question {

  static fromJsonList(array): Question[] {
    return array.map(Question.fromArray);
  }

  static fromArray({ $key, question_body, category, difficulty, is_public, option_type,
     options, explanation_body, created_by_id, created_by_name, created_at}): Question {
    return new Question($key, question_body, category, difficulty, is_public, option_type,
      options, explanation_body, created_by_id, created_by_name, created_at);
  }

  constructor(
    public $key: string,
    public question_body: string,
    public category: string,
    public difficulty: string,
    public is_public: boolean,
    public option_type: string,
    public options: Option[],
    public explanation_body: string,
    public created_by_id: string,
    public created_by_name: string,
    public created_at: Number,
  ) {

  }
}
