import { Component, OnInit } from '@angular/core';
import { OferrerService } from '../../../services/oferrer.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-administrator-offerers-pending',
  templateUrl: './offerers-pending.component.html',
  styleUrls: ['./offerers-pending.component.css'],
  providers: [OferrerService]
})
export class OfferersPendingComponent implements OnInit {

  public oferrers: any = [];

  constructor(private offererService: OferrerService) { }

  ngOnInit() {
    this.loadPendingOfferers();
  }

  approve(nit) {
    this.offererService.approve(nit).subscribe(response => {
      this.loadPendingOfferers();
      swal('Exito!', 'Se ha aprobado el oferente satisfactoriamente', 'success').catch(swal.noop);
    });
  }

  reject(nit) {
    this.offererService.reject(nit).subscribe(response => {
      this.loadPendingOfferers();
      swal('Exito!', 'Se ha rechazado el oferente satisfactoriamente', 'success').catch(swal.noop);
    });
  }

  loadPendingOfferers() {
    this.offererService.getPending().subscribe(oferrers => {
      this.oferrers = oferrers;
    });
  }
}
