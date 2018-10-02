import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { TestResultComponent } from './test-result/test-result.component';
import {ModalModule} from "angular-custom-modal";
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { StorageServiceModule } from 'angular-webstorage-service';
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("545586219195909")
  }
]);
const appRoutes: Routes = [
  { path: 'test', component: TestDetailComponent,data:null },
  { path: 'testResult', component: TestResultComponent,data:null },
  { path: 'search', component: SearchComponent,data:null },
  {
    path: 'testList',
    component: TestListComponent,
    data: { title: 'test List' }
  },
  { path: '',
    redirectTo: '/testList',
    pathMatch: 'full'
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    TestDetailComponent,
    PageNotFoundComponent,
    TestResultComponent,
    AboutComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule,
    NgxSpinnerModule,
    FormsModule,
    NgxSmartModalModule.forRoot(),
    StorageServiceModule,
    SocialLoginModule.initialize(config),
    HttpClientModule, // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For linkedIn & Tumblr counts
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true ,useHash:true} // <-- debugging purposes only
    )
    , BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
