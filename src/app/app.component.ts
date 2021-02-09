import { Component } from '@angular/core';
import { UserServiceService} from 'src/app/services/user-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qStayAdminPortal';
  isLoggedIn=false;

  constructor(public _auth:UserServiceService){}
}

