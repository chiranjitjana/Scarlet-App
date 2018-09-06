import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isloginSuccessFul:boolean=false;
  loading:boolean=false;
  returnUrl: string;
  constructor(private auth:AuthenticationService,private route:Router) { }

  ngOnInit() {
    this.auth.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.routerState.root.queryParams['returnUrl'] || 'home';
  }

  login(event){
     event.preventDefault();
     this.loading=true;
     this.isloginSuccessFul=false;
     var target=event.target;
     var username=target.querySelector("#inputEmail").value;
     var password=target.querySelector("#inputPassword").value;
     this.auth.login(username,password).subscribe(
               data => {
                 this.loading=false;
                 this.route.navigate([this.returnUrl]);
               },
               error => {
                 console.log("here");
                  this.loading=false;
                  this.isloginSuccessFul=true;
               }
           );
  }

}
