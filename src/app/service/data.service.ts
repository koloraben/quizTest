import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private currentTest : any;
  private data = [
    {
      "id":1,
      "author":{
        "name":"mohssin",
        "photo":"",
      },
      "title":"سيصدمك سبب وفاتك !",
      "content":"سيصدمك سبب وفاتك !",
      "link":"/test/1",
      "imageLink":"assets/images/death/death.jpg",
      "comments":15,
      "likes":11,
      "results":[
        {
          "image":"assets/images/death/accident.jpg",
          "description":"sawfa tamooto fi haditat sayara ?!"
        },
        {
          "image":"assets/images/death/fire.webp",
          "description":"sawfa tamooto fi 7ari9 mohwil ?!"
        },
      ]
    }
  ]

  constructor() { }

    getItems(){
    return this.data
  }

    getItem(index){
    return this.data[index]?this.data[index]:null;
    }
    setCurrentTest(currentTest){
       this.currentTest=currentTest
    }

    getCurrentTest(){
    return this.currentTest
  }
}
