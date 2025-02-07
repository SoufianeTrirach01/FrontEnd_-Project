import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../service/company.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-societe-dashbord',
  templateUrl: './societe-dashbord.component.html',
  styleUrls: ['./societe-dashbord.component.scss']
})
export class SocieteDashbordComponent implements OnInit {
  reservations: any;

  constructor(private companyService: CompanyService, private notification: NzNotificationService) { }

  ngOnInit() {
    this.getReservation();
  }

  getReservation() {
    this.companyService.getAllReservation().subscribe(res => {
      this.reservations = res;
    });
  }

  changeReservationStatus(reservationId: number, status: string) {
    this.companyService.changeReservationStatus(reservationId, status).subscribe(
      res => {
        this.notification.success(
          'SUCCESS',
          'Reservation status changed successfully',
          { nzDuration: 5000 }
        );
        this.getReservation();
      },
      error => {
        this.notification.error(
          'ERROR',
          `${error.message}`,
          { nzDuration: 5000 }
        );
      }
    );
  }
}
