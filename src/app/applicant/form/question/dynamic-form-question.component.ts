import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './fields/question-base';

@Component({
  selector: 'df-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  images: Array<{ id: number, name: string, file: object }> = [];

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
  get isRequired() {
    var errors = this.form.controls[this.question.key].errors;
    if (errors)
      if (errors.required)
        return errors.required;
    return false;

  }
  get isNotBetween() {
    var errors = this.form.controls[this.question.key].errors;
    if (errors)
      if (errors.dateNotBetween)
        return errors.dateNotBetween;
    return false;
  }

  get isDateLesser() {
    var errors = this.form.controls[this.question.key].errors;
    if (errors)
      if (errors.dateLesser)
        return errors.dateLesser;
    return false;
  }

  get isDateGreater() {
    var errors = this.form.controls[this.question.key].errors;
    if (errors)
      if (errors.dateGreater)
        return errors.dateGreater;
    return false;
  }

  get isMin() {
    var errors = this.form.controls[this.question.key].errors;
    if (errors)
      if (errors.min)
        return errors.min;
    return false;
  }

  get isMax() {
    var errors = this.form.controls[this.question.key].errors;
    if (errors)
      if (errors.max)
        return errors.max;
    return false;
  }

  get IsMinLength() {
    var errors = this.form.controls[this.question.key].errors;
    if (errors)
      if (errors.minlength)
        return errors.minlength;
    return false;
  }

  get IsMaxLength() {
    var errors = this.form.controls[this.question.key].errors;
    if (errors)
      if (errors.maxlength)
        return errors.maxlength;
    return false;
  }

  get IsEmail() {
    var errors = this.form.controls[this.question.key].errors;
    if (errors)
      if (errors.email)
        return errors.email;
    return false;
  }

  get IsPattern() {
    var errors = this.form.controls[this.question.key].errors;
    if (errors)
      if (errors.pattern)
        return errors.pattern;
    return false;
  }

  onChange(question, event) {

    let file = event.target.files[0];
    var ext = file.name.split('.').pop();
    var name = question.key + '_' + new Date().getTime() + '.' + ext;
    this.addImage(question, name, file);
  }

  private addImage(question, name, file) {
    let exists = false;
    let image = { id: question.key, name: name, file: file };
    for (var i = 0; i < this.images.length; i++) {
      if (this.images[i].id == question.key) {
        this.images[i] = image;
        exists = true;
        break;
      }
    }
    if (!exists) {
      this.images.push(image);
    }
    question.file = image;
    question.value = image.name;
    console.log(question);
    console.log(this.images);
  }

}
