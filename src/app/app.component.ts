import {Component, OnInit} from '@angular/core';
import {DataService} from "./service/data.service";
import {NavigationExtras, Router} from "@angular/router";
import {AuthService} from "angular4-social-login";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public term : any ;
  public loggedIn : any ;
  public user : any ;
  constructor(private authService: AuthService,public dataservice : DataService,public router: Router){}
  title = 'ProjectSocial';
  searchTerm(term){
    let navigationExtras: NavigationExtras = {
      queryParams: {"keyword":term}
    };
    this.router.navigate(["search"],navigationExtras)
    var dd = this.dataservice.getItems().filter(function (item) {
      return item.title.includes(term);
    })
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
    });
  }
}
