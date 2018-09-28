export class Option {

  static fromJsonList(array): Option[] {
    return array.map(Option.fromArray);
  }

  static fromArray({ $key, option_body, is_correct }): Option {
    return new Option($key, option_body, is_correct);
  }

  constructor(
    public $key: string,
    public option_body: string,
    public is_correct: string,
  ) { }
}
