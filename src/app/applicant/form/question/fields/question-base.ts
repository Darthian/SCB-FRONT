import { Validation } from './validation'
export class QuestionBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  fieldTypeId: number;
  controlType: string;
  validation: Validation;
  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    fieldTypeId?: number,
    controlType?: string,
    validation?: Validation
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.fieldTypeId = options.fieldTypeId;
    this.required = !!options.required;
    this.controlType = options.controlType || '';
    this.validation = options.validation;
  }
}
