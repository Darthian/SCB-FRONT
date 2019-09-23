import { QuestionBase } from './question-base';

export class UrlQuestion extends QuestionBase<string> {
  controlType = 'url';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = 'url';
  }

}
