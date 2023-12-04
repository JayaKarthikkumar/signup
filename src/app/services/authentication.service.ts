import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  signOut: any;
  currentUser$: any;
  
  

  constructor(private auth: AuthenticationService) { }
  login(username: string, password: string) {
     return from(signInWithEmailAndPassword(this.auth, username, password));

  }

  signUp(name: string, email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email , password))
  }

  logout() {
    return from(this.auth.signOut())
  } 
}
function from(arg0: any) {
  throw new Error('Function not implemented.');
}

function signInWithEmailAndPassword(auth: AuthenticationService, username: string, password: string): any {
  throw new Error('Function not implemented.');
}

function createUserWithEmailAndPassword(auth: AuthenticationService, email: string, password: string): any {
  throw new Error('Function not implemented.');
}

