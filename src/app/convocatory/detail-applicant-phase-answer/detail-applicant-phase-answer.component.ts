import { Component, OnInit, Input } from '@angular/core';
import { ApplicantPhaseService } from '../../services/applicant-phase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/Rx' ;

@Component({
  selector: 'app-detail-applicant-phase-answer',
  templateUrl: './detail-applicant-phase-answer.component.html',
  styleUrls: ['./detail-applicant-phase-answer.component.css']
})
export class DetailApplicantPhaseAnswerComponent implements OnInit {

  public answers: Array<Object> = [];
  public applicant: any = null;
  @Input() appPhaseId: number;
  @Input() convocatoryId: number;
  @Input() phaseId: number;

  constructor(private service: ApplicantPhaseService, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit() {
    console.log(this.appPhaseId);
    console.log(this.convocatoryId);
    console.log(this.phaseId);
    this.activatedRoute.params.subscribe((params: Params) => {

      // this.appPhaseId = +params['id'];
      // if (isNaN(this.phaseId))
      //   this.phaseId = 31;

      this.loadAnswers();
    });
  }

  ngOnChanges() {
    this.loadAnswers()
  }

  loadAnswers() {
    this.service.getAppPhase(this.appPhaseId).subscribe(response => {
      this.applicant = response.applicant;
      this.buildAnswers(response.answers);
    });
  }

  buildAnswers(answers) {
    this.answers = []
    var ans = JSON.parse(answers);
    console.log(ans);

    for (var answer in ans) {
      var field = {
        "id": answer,
        "value": ans[answer].value,
        "label": ans[answer].label,
        "fieldTypeId": ans[answer].fieldTypeId
      }
      this.answers.push(field);
    }
  }

  downloadFile(name) {
    //this.convocatoryId = 15;
    //this.phaseId = 31;
    this.service.downloadFile(this.phaseId, this.applicant.email, name)
      .subscribe(response  => {        
        console.log(response);
        var blob = new Blob([response.blob()], {type: 'application/pdf'});
        //console.log(response['_body']);
        //console.log(response._body);
        //var blob = new Blob(response['_body']);
        //console.log(blob);
        var url = window.URL.createObjectURL(blob);
        window.open(url);
      });
  }

  approvedApplicant(){
    console.log("Aprobar");
  }

  denyApplicant(){
    console.log("Rechazar");
  }

}
