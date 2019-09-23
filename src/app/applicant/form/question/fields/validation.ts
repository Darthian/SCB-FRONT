export class Validation {
  id: number;
  field_type_id: number;
  field_type_validation_id: number;
  value: string;
  error_msg: string;

  constructor(validation: {
    id?: number,
    field_type_id?: number,
    field_type_validation_id?: number,
    value?: string,
    errorMessage?: string
  } = {}) {
    this.id = validation.id;
    this.field_type_id = validation.field_type_id;
    this.field_type_validation_id = validation.field_type_validation_id;
    this.value = validation.value || ''
    this.error_msg = validation.errorMessage || '';
  }
}
