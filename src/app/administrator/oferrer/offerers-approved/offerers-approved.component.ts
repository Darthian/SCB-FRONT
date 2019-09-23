import { Component, OnInit } from '@angular/core';
import { OferrerService } from '../../../services/oferrer.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-administrator-offerers-approved',
  templateUrl: './offerers-approved.component.html',
  styleUrls: ['./offerers-approved.component.css'],
  providers: [OferrerService]
})
export class OfferersApprovedComponent implements OnInit {

  public oferrers: any = [];

  constructor(private offererService: OferrerService) { }

  ngOnInit() {
    this.loadApprovedOfferers();
  }

  edit(nit) {
  }

  reject(nit) {
    this.offererService.reject(nit).subscribe(response => {
      this.loadApprovedOfferers();
      swal('Exito!', 'Se ha rechazado el oferente satisfactoriamente', 'success').catch(swal.noop);
    });

  }

  loadApprovedOfferers() {
    this.offererService.getApproved().subscribe(oferrers => {
      this.oferrers = oferrers;
    });
  }
}
