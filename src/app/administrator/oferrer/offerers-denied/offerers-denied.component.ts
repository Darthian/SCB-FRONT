import { Component, OnInit } from '@angular/core';
import { OferrerService } from '../../../services/oferrer.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-administrator-offerers-denied',
  templateUrl: './offerers-denied.component.html',
  styleUrls: ['./offerers-denied.component.css'],
  providers: [OferrerService]
})
export class OfferersDeniedComponent implements OnInit {

  public oferrers: any = [];

  constructor(private offererService: OferrerService) { }

  ngOnInit() {
    this.loadDeniedOfferers();
  }

  approve(nit) {
    this.offererService.approve(nit).subscribe(response => {
      this.loadDeniedOfferers();
      swal('Exito!', 'Se ha aprobado el oferente satisfactoriamente', 'success').catch(swal.noop);
    });
  }

  loadDeniedOfferers() {
    this.offererService.getDenied().subscribe(oferrers => {
      this.oferrers = oferrers;
    });
  }

}
