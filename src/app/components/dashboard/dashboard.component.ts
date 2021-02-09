import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/classes/order';
import{User} from '../../classes/user';
import{StayService} from '../../services/stay.service';
import{UserServiceService} from '../../services/user-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orderCount=0;
  stayCount:number=0;
  userCount=0;

  orders:Order[];
  users:User[];

  constructor(private _stayService:StayService,private _userService:UserServiceService,) { }

  ngOnInit(): void {
    this._stayService.getStayCount().subscribe((res)=>{
      this.stayCount=JSON.parse(JSON.stringify(res.count));
      console.log('stay count',this.stayCount);
     });

     this._stayService.getOrderCount().subscribe((res)=>{
      this.orderCount=JSON.parse(JSON.stringify(res.count));
    });

    this._userService.getUserCount().subscribe((res)=>{
      this.userCount=JSON.parse(JSON.stringify(res.count));
    });

    this._userService.getRecentUsers().subscribe((users) =>{
      this.users=JSON.parse(JSON.stringify(users));
    });

    this._stayService.getRecentOrders().subscribe((orders) =>{
      this.orders=JSON.parse(JSON.stringify(orders));
    });
  
}

}