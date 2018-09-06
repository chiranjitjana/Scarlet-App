import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthenticationService,private route:Router) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
    this.route.navigate(["/login"]);
  }

}
