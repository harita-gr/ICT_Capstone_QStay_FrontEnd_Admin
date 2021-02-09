import { Component, OnInit } from '@angular/core';
import { UserServiceService} from '../../services/user-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _enrollmentService:UserServiceService,private _router:Router) { }

     //User object
     User={
      email:'',
      password:'',
      admin:true
    };

  submitted = false;
  errorMsg ='';

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Validating login..');
    // this.submitted=true;
    this._enrollmentService.adminLogin(this.User)
      .subscribe(
           res => {
             console.log('Success!',res);
             localStorage.setItem('token',res.token);
            //  localStorage.setItem('userId',res.id);
            //  console.log('from login component ID= ' +res.id);
             console.log('from login component - '+ res.token);
             this._router.navigate(['/dashboard']);
                  },
          //  error => this.errorMsg = error
          error =>{ switch(error.status){
                 case 404:
                   this.errorMsg="User not found! Please SIGN UP!"
                   break;
                case 401:
                  this.errorMsg="Invalid Credentials"
                   break;
                default:
                  this.errorMsg="Uknown Server-side Error"
          }

          }
      )

}
}