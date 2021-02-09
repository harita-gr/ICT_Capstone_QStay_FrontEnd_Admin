import { Component, OnInit } from '@angular/core';
import { UserServiceService} from 'src/app/services/user-service.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public _auth:UserServiceService){}

  ngOnInit(): void {
  }

}
