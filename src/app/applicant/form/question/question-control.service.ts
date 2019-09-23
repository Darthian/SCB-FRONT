import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './fields/question-base';

@Injectable()
export class QuestionControlService {

  fieldValidation: any = {};
  group: any = {};
  constructor() {

  }

  toFormGroup(questions: QuestionBase<any>[]) {
    //console.log("QCS",questions);
    questions.forEach(question => {
      this.fieldValidation[question.key] = question.validation;
      this.group[question.key] = this.setFormControl(question);
    });
    this.group = new FormGroup(this.group);
    return this.group;
  }

  private setFormControl(question) {
    let formControl;
    switch (question.controlType) {
      case 'email':
        formControl = new FormControl(question.value || '', this.emailValidation(question.required));
        break;
      case 'number':
        formControl = new FormControl(question.value || '', this.numberValidation(question.validation, question.required));
        break;
      case 'text':
        formControl = new FormControl(question.value || '', this.textValidation(question.validation, question.required));
        break;
      case 'textarea':
        formControl = new FormControl(question.value || '', this.textValidation(question.validation, question.required));
        break;
      case 'file':
        formControl = new FormControl(question.value || '');
        break;
      case 'date':
        formControl = new FormControl(question.value || '', this.dateValidation(question.validation, question.required));
        break;
      case 'url':
        formControl = new FormControl(question.value || '', this.urlValidation(question.required));
        break;
      case 'time':
        formControl = new FormControl(question.value || '', Validators.required);
        break;
    }
    return formControl;
  }

  private emailValidation(required) {
    if (required)
      return Validators.compose([Validators.required, Validators.email]);
    return Validators.email;
  }

  private numberValidation(validation, required) {

    let validators = [];
    if (required)
      validators = [Validators.required];
    if (validation) {
      var validationType = validation.fieldTypeValidation;
      switch (validationType.id) {
        case 9:
          //Mayor
          validators.push(Validators.min(validation.value));
          break;
        case 10:
          //Menor
          validators.push(Validators.max(validation.value));
          break;
        case 11:
          //Entre
          let values = validation.value.split("|");
          validators.push(Validators.max(values[1]));
          validators.push(Validators.min(values[0]));
          break;
        case 12:
          //Celular
          validators.push(Validators.max(3509999999));
          validators.push(Validators.min(3002000000));
          break;
      }
    }
    return Validators.compose(validators);
  }

  private textValidation(validation, required) {
    //console.log(validation);
    let validators = [];
    if (required)
      validators = [Validators.required];
    if (validation) {
      var validationType = validation.fieldTypeValidation;
      switch (validationType.id) {
        case 1:
          //Menor
          validators.push(Validators.minLength(validation.value));
          break;
        case 2:
          //Mayor
          validators.push(Validators.maxLength(validation.value));
          break;
        case 3:
          //Menor
          validators.push(Validators.minLength(validation.value));
          break;
        case 4:
          //Mayor
          validators.push(Validators.maxLength(validation.value));
          break;

      }
    }
    return Validators.compose(validators);
  }

  private urlValidation(required) {
    let validators = [Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)];
    if (required)
      validators.push(Validators.required);
    return validators;
  }
  private dateValidation(validation, required) {
    let validators = [this.dateValidator.bind(this)];
    if (required)
      validators.push(Validators.required);
    return Validators.compose(validators);
  }

  dateValidator(formControl: FormControl): { [s: string]: boolean } {
    if (formControl.value !== "") {
      let questionValidation = { id: 0, value: '' };
      for (let key in this.group.controls) {
        if (!this.group.controls[key].pristine)
          questionValidation = this.fieldValidation[key];
        this.group.controls[key].markAsPristine();
      }

      var selectedDate = this.parseDate(formControl.value);
      var value = questionValidation.value;
      switch (questionValidation.id) {
        case 11:
          //Mayor
          var validationDate = this.parseDate(value);
          if (selectedDate < validationDate)
            return { 'dateLesser': true };
          break;
        case 12:
          //Menor
          var validationDate = this.parseDate(value);
          if (selectedDate > validationDate)
            return { 'dateGreater': true };
          break;
        case 13:
          //Entre
          let values = value.split("|");
          var initDate = this.parseDate(values[0]);
          var endDate = this.parseDate(values[1]);
          if ((selectedDate < initDate) || (selectedDate > endDate))
            return { 'dateNotBetween': true };
          break;

      }
    }
    return null;
  }

  private parseDate(input) {
    var parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
  }

}
