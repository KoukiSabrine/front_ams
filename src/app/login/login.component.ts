import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username!: string;
password!: string;
invalidLogin =0;
successMessage = "Authentication success";
errorMessage = "Invalide username or password";
constructor(private router: Router,
private loginservice: AuthenticationService) { }
ngOnInit() {
}

checkLogin() {
  this.loginservice.authenticate(this.username, this.password).subscribe(
    data=>  {this.router.navigate(['/listProvider'])},
    error=> {this.invalidLogin = 2}
  )

  // if (this.loginservice.authenticate(this.username, this.password)) {
  //   this.router.navigate(['/listProvider'])
  //   this.invalidLogin = 1;

  //   } else
  //   this.invalidLogin = 2
    }
    
}
