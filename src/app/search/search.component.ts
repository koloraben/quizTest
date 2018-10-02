import { Component, OnInit } from '@angular/core';
import {DataService} from "../service/data.service";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private items:any;
  constructor(private dataservice:DataService,private route:ActivatedRoute,public router : Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.items = this.dataservice.getItems().filter(function (item) {
        return item.title.includes(params["keyword"]);
      })
    })
  }
  public navigateToTest(index) {
    let navigationExtras: NavigationExtras = {
      queryParams: {"index":index}
    };
    this.router.navigate(["test"], navigationExtras);
  }

}
