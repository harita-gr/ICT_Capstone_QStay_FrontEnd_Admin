import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/classes/order';
import{StayService} from '../../services/stay.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:Order[];
  international=0;
  interstate=0;
  p: number = 1;

  constructor(private _stayService:StayService,
    private _router:Router) {
    
   }

  ngOnInit(): void {

    this._stayService.getOrderList().subscribe((orders)=>{
      this.orders=JSON.parse(JSON.stringify(orders));
      console.log('orders..',this.orders);

      this._stayService.getInternationalCount().subscribe((res)=>{
        this.international=JSON.parse(JSON.stringify(res.count));
        
       });
  
       this._stayService.getInterstateCount().subscribe((res)=>{
        this.interstate=JSON.parse(JSON.stringify(res.count));
      });
  });
  }

}
