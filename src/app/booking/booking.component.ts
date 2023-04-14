import { Component } from '@angular/core';
import { Ticket } from '../Ticket';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {


  ticobj:Ticket=new Ticket("",new Date(),"");
  vazha:any | undefined

  onSubmit(){
    console.log( this.ticobj);
    this.vazha=this.ticobj.date+this.ticobj.time+this.ticobj.movie;
    

  }

}
