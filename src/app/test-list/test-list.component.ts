import { Component, OnInit } from '@angular/core';
//import data from '../../../data.json';
import {Router, NavigationExtras} from "@angular/router";
import {DataService} from "../service/data.service";
@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent {
  private items:any;
  constructor(public router: Router,private data:DataService) {
    this.items=this.data.getItems();
  }
  public navigateToTest(index) {
    let navigationExtras: NavigationExtras = {
      queryParams: {"index":index}
    };
    this.router.navigate(["test"], navigationExtras);
  }

}
