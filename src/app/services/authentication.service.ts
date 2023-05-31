import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }
  authenticate(username:any, password:any) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get('http://localhost:8080/basicauth', { headers }).pipe(
      map(
        userData => {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        console.log(username + " " + password);
        return userData;
        }
        )
        );

    // if (username === "sabrine" && password === "1234") {
    // sessionStorage.setItem('username', username)
    // return true;
    // } else {
    // return false;
    // }    

    }
    isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
    }
    logOut() {
    sessionStorage.removeItem('username')
    }
}
