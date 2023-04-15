import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticles } from 'src/app/Interfaces/IArticles';
import { articlesList } from '../../Repositories/Articles';
import { Itopics } from '../../Interfaces/Itopics';
import { topicsArray } from '../../Repositories/topics';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles: IArticles[];
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
