import { Component, OnInit } from '@angular/core';
import { ClientservicesService } from '../client/services/clientservices.service';
import { review } from '../client/pages/review/review';

@Component({
  selector: 'app-avishome',
  templateUrl: './avishome.component.html',
  styleUrl: './avishome.component.scss'
})
export class AvishomeComponent implements OnInit{
constructor(private clientservice:ClientservicesService){}
reviews:review[]
ngOnInit(): void {
this.getAllReview()
}
getAllReview(){
  this.clientservice.getAllReviews().subscribe(res => {
    this.reviews = res
  }
  )

}
}
