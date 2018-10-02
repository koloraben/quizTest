import {Component, Inject, OnInit} from '@angular/core';
import {AuthService, SocialUser} from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';
import {switchMap} from "rxjs/internal/operators";
import {NgxSmartModalService} from "ngx-smart-modal";
import { NgxSpinnerService } from 'ngx-spinner';
import {DataService} from "../service/data.service";
import { Meta } from '@angular/platform-browser';
import {SESSION_STORAGE, StorageService} from "angular-webstorage-service";
@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.scss']
})
export class TestDetailComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  private item : any;
  private index : any;
  constructor(@Inject(SESSION_STORAGE) private localStorage: StorageService, private meta: Meta,public router: Router,
              private spinner: NgxSpinnerService,private route:ActivatedRoute,
              private authService: AuthService,public ngxSmartModalService: NgxSmartModalService,private dataService : DataService) {
    this.route.queryParams.subscribe(params => {
      this.index=params["index"];
     this.item=dataService.getItem(this.index)?dataService.getItem(params["index"]):this.router.navigate(["testList"]);

      this.meta.addTags([
        {name: 'description', content: 'How to use Angular 4 meta service'},
        {name: 'author', content: 'talkingdotnet'},
        {name: 'keywords', content: 'Angular, Meta Service'}
      ]);

    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB() {
    return this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();

  }

  runTest(){
    this.spinner.show();

    if(this.loggedIn){

      this.router.navigate(["testResult"])
      this.localStorage.set('item', this.item);
    }
    else{
      this.signInWithFB().then(value => {
        this.router.navigate(["testResult"])
        this.localStorage.set('item', this.item);
        this.spinner.hide();
      }).catch(reason => {
        this.router.navigate(["testList"])
        this.spinner.hide();
      });
    }



  }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
    });
  }





}
