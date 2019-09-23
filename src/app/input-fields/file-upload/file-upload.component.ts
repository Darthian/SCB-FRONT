import { Component, OnInit } from '@angular/core';
import { ElementRef, Input, ViewChild } from '@angular/core';
import { Http, Response, Headers  } from '@angular/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef;
  headers = undefined;

  constructor(private http: Http) {
  }

  upload() {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    console.log('UPLOAD');
    // console.log(inputEl);
    // console.log(inputEl.files);
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();

    // let fileInput2 = document.getElementById('the-file');
    // let file = fileInput2.files[0];
    // let formData2 = new FormData();
    // formData.append('file', file);

    if (fileCount > 0) { // a file was selected
      for (let i = 0; i < fileCount; i++) {
        console.log(inputEl.files.item(i))
        formData.append('file', inputEl.files.item(i));
        console.log(formData)
      }
      formData.append('email', 'solicitanteApproved@artsoft.com');
      formData.append('name', 'name');
      console.log(formData)
      console.log(formData.getAll('file'));
      this.http.post(environment.SERVER_URL + 'applicantDocument', 
        formData,
        {headers:this.headers})
      .map((res: Response) => res.json())
      .subscribe(
        (response) => {
              /* this function is executed every time there's a new output */
              console.log("VALUE RECEIVED: "+response);
        },
        (err) => {
          /* this function is executed when there's an ERROR */
          console.log(err.json());
          console.log("ERROR: "+err);
        },
        () => {
          /* this function is executed when the observable ends (completes) its stream */
          console.log("COMPLETED");
        }
      );

      // this.http
      //     .post('http://your.upload.url', formData)
          // do whatever you do...
          // subscribe to observable to listen for response
    }
  }
  ngOnInit() {
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin', environment.SERVER_URL);    
    //this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('enctype', 'multipart/form-data');    
    // this.headers.append('Authorization', 'Basic d2FsdGVyYWxvbnNvMjBAeWFob28uY29tOmFydHNvZnQ=');
  }
}