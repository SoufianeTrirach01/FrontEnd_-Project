import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../service/company.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { ClientservicesService } from '../client/services/clientservices.service';
import { Service } from '../client/Service';
declare var $: any;
declare var bootstrap: any;

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrl: './homes.component.scss'
})
export class HomesComponent implements OnInit  {
  services: Service[]
  constructor(private clientService: ClientservicesService,
    private notification: NzNotificationService, private router: Router)  { }
  slides = [
    {
      title: 'Title 1',
      description: 'Description for slide 1',
      imageUrl: 'assets/img/carousel-1.jpg'
    },
    {
      title: 'Title 2',
      description: 'Description for slide 2',
      imageUrl: 'assets/img/carousel-2.jpg'
    },
    {
      title: 'Title 3',
      description: 'Description for slide 3',
      imageUrl: 'assets/img/carousel-3.jpg'
    }
  ];

  ngOnInit(): void {
    // Initialize the carousel with a 4-second interval
    const carouselElement = document.querySelector('#carouselExampleIndicators');
    if (carouselElement) {
      const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 4000,
        ride: 'carousel'
      });
    }
    this.getAllServices()

  }


updateImg(img) {
  return 'data:image/jpeg;base64,' + img
}


  getAllServices() {
    this.clientService.getAllServices().subscribe(res => {
      this.services = res
    }
    )
  }
}
