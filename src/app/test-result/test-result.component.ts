import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from "../service/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "angular4-social-login";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {SESSION_STORAGE, StorageService} from "angular-webstorage-service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss']
})
export class TestResultComponent implements OnInit {
  private item : any;
  private index : any;
  private itemResult:any;
  private user:any;
  private loggedIn:any;

  constructor(private spinner: NgxSpinnerService,@Inject(SESSION_STORAGE) private localStorage: StorageService,private route: ActivatedRoute,private router : Router,private authService : AuthService) {
    //this.spinner.show();
    this.route.queryParams.subscribe(params => {
      this.index=params["index"];
      this.item = this.localStorage.get('item')?this.localStorage.get('item'):this.router.navigate(["testList"]);
      this.itemResult = this.item.results[Math.floor( Math.random()*(this.item.results.length))]
    });
  }

  ngOnInit() {
    this.spinner.show();
    console.log("ffff", this.spinner)
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        console.log(this.user)
        this.spinner.hide()
      });

  }
   generateRandomInteger(max) {
    return Math.floor( Math.random()*(this.item.results.length))
  }

}
