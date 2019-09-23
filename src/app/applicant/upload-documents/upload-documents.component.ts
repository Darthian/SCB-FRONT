import { Component, OnInit } from '@angular/core';
import { ElementRef, Input, ViewChild } from '@angular/core';
import { Http, Response, Headers  } from '@angular/http';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.css']
})
export class UploadDocumentsComponent implements OnInit {
  
  @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef;
  headers = undefined;
  name = "";
  user: User;

  constructor(private userService: UserService,private http: Http) { }


  ngOnInit() {    
    this.user = this.userService.getCurrentUser();
  }

  upload() {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
      for (let i = 0; i < fileCount; i++) {
        formData.append('file', inputEl.files.item(i));
      }
      formData.append('email', this.user.email);
      formData.append('name', this.name);
      // this.http.post(environment.SERVER_LOCAL + 'applicantDocument', 
      this.http.post(environment.SERVER_URL + 'applicantDocument', 
        formData,
        {headers:this.headers})
      .map((res: Response) => res.json())
      .subscribe(
        (response) => {
          swal('Exito!', response['Response'], 'success').catch(swal.noop);
        },
        (err) => {
          swal('Oops...', err.json()['Response'], 'error').catch(swal.noop);
        },
        () => {
        }
      );
    }
  }
}
