import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, Input } from '@angular/core';

export class FieldModel {
  // Campos basicos
  obligatory = false;
  type = "";
  name = "";
  idPhase = "";
  idField: string;
  // @Input() nameTooltip: any;
  // @Input() orden: number;
  // type = "0";
  // name = "";
  nameTooltip = undefined;
  order = 0;
  iconSelected = "";
  fieldStructure = {};

  // Tipos de validaciones
  validationOptions = [
    /* {value:1,name:"Texto corto",icon:"fa fa-minus"},
    {value:2,name:"Texto largo",icon:"fa fa-bars"},
    {value:3,name:"Unica opcion",icon:"fa fa-check-circle-o"},
    {value:4,name:"Multiples opciones",icon:"fa fa-check-square-o"},
    {value:5,name:"Archivo",icon:"fa fa-file"},
    {value:6,name:"Fecha",icon:"fa fa-calendar"},
    {value:7,name:"Numerico",icon:"fa fa-hashtag"},
    {value:8,name:"Email",icon:"fa fa-at"}, */
  ];
  selectedValidation = "";
  selectedValidationName = "";

  // Tipos de opciones
  selectOptions = [
    /*     {id:"1",value:1,name:"Texto corto",icon:"fa fa-minus"},
        {id:"2",value:2,name:"Texto largo",icon:"fa fa-bars"},
        {id:"3",value:3,name:"Unica opcion",icon:"fa fa-check-circle-o"},
        {id:"4",value:4,name:"Multiples opciones",icon:"fa fa-check-square-o"},
        {id:"5",value:5,name:"Archivo",icon:"fa fa-file"},
        {id:"6",value:6,name:"Fecha",icon:"fa fa-calendar"},
        {id:"7",value:7,name:"Numerico",icon:"fa fa-hashtag"},
        {id:"8",value:8,name:"Email",icon:"fa fa-at"}, */
  ];
  selectedOptionName = "";

  // Validacion de longitud de textos
  validationType = 0;

  // Validacion de longitud de textos
  validateMinLen = 0;
  validateMaxLen = 15;
  validateMinLenTooltip = undefined;
  validateMaxLenTooltip = undefined;

  errorMessage = "";
  errorMessageTooltip = undefined;

  // Opciones para campos (radio y checkbox)
  optionValue = "";
  addedOptions = []

  // Opciones para tipos de archivos
  fileTypes = [
    /* {name:"JPG", checked:"JPGisChecked", value:false},
    {name:"PDF", checked:"PDFisChecked", value:false},
    {name:"PNG", checked:"PNGisChecked", value:false},
    {name:"word", checked:"wordisChecked", value:false},
    {name:"excel", checked:"excelisChecked", value:false},
    {name:"powerpoint", checked:"powerpointisChecked", value:false}, */
  ];

  // Opciones para validacion de dfechas
  dateValidationTypeOptions = [
    { value: 0, name: "Sin validacion" },
    { value: 1, name: "Menor que" },
    { value: 2, name: "Mayor que" },
    { value: 3, name: "Entre" },
  ];
  dateValidationType = 0;

  // Validacion de fechas
  minDate: Date;
  maxDate: Date;
  minDateTooltip = undefined;
  maxDateTooltip = undefined;
  // numberLessThan = ""
  // typenumberMoreThan = ""
  // typenumberMoreThanTooltip= undefined;
  // numberLessThanTooltip= undefined;

  // Opciones para validacion de numeros
  numberValidationTypeOptions = [
    { value: 0, name: "Sin validacion" },
    { value: 1, name: "Menor que" },
    { value: 2, name: "Mayor que" },
    { value: 3, name: "Entre" },
    { value: 4, name: "Telefono" },
  ];
  numberValidationType = 0;
  numberLessThan = 0;
  numberMoreThan = 0;
  numberLessThanTooltip = undefined;
  numberMoreThanTooltip = undefined;
  fileType = undefined

  emailRegularExpression = "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
  urlRegularExpression = "[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)";

  emailRegularExpressionTooltip = undefined;
  urlRegularExpressionTooltip = undefined;

  constructor(idPhase, order) {
    this.idPhase = idPhase || "";
    this.idField = "";
    this.order = idPhase || 0;
    this.obligatory = false;
    this.type = "0";
    this.name = "";
    this.minDate = new Date();
    this.maxDate = new Date();
    this.fileType = undefined
  }
}