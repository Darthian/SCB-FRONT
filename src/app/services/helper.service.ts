import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  constructor() { }

  getDateFormatYYYYMMddDash(date: Date) : string {
    let dateResult : string = ""; 
    let anio =   date.getFullYear();
    let mon = date.getMonth();
    let day = date.getDate();
    dateResult =  anio + "-" + (mon + 1) + "-" + day;
    return dateResult;
  }

  getDateFormatNameMonthMonthDay(date: Date) : string {
    if (date === null){
      return "";
    }
      var monthNames = [
        "Ene", "Feb", "Mar",
        "Abr", "May", "Jun", "Jul",
        "Ago", "Sep", "Oct",
        "Nov", "Dic"
      ];
    
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
    
      return monthNames[monthIndex] +" "+ day + ',' + ' ' + year;    
  }

  dmyToDate = function(dmy) {
    var d = dmy.split(/[\/\-\.]/, 3);
  
    if (d.length != 3) return null;
  
    // Check if date is valid
    var day = parseInt(d[0]), 
        mon = parseInt(d[1]),
        year= parseInt(d[2]);
    if (d[2].length == 2) year += 2000;
    if (day <= 31 && mon <= 12 && year >= 2015)
      return new Date(year, mon - 1, day);
  
    return null; 
  }

  ymdToDate = function(dmy) {
    var d = dmy.split(/[\/\-\.]/, 3);
  
    if (d.length != 3) return null;
  
    // Check if date is valid
    var year = parseInt(d[0]), 
        mon = parseInt(d[1]),
        day= parseInt(d[2]);
    if (d[0].length == 2) year += 2000;
    if (day <= 31 && mon <= 12 && year >= 2015)
      return new Date(year, mon - 1, day);
  
    return null; 
  }
}
