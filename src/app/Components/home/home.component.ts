import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articles } from 'src/app/IArticles';
import { articlesList } from '../Articles/Articles';
import { Itopics } from '../topics/Itopics';
import { topicsArray } from '../topics/topics';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles: Articles[];
  constructor(private route: ActivatedRoute) {
    this.articles = articlesList;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(
      (params) => {
        var name = params['topic'];
        if(name != undefined)
        {
          var topic = topicsArray.find(element => element.formatedName == name);
          var newarray = articlesList.filter((element) => {
            for (let index = 0; index < element.topics.length; index++) {
              const x = element.topics[index];
              if(x == topic?.formatedName)
                  return true;
                  else continue;
            }
            return false;
          }
          )
          this.articles = newarray;
          console.log(newarray);
        }
        else this.articles = articlesList;
        
      })
  }
}
