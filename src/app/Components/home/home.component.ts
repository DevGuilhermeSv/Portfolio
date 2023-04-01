import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articlesList } from '../Articles/Articles';
import { Itopics } from '../topics/Itopics';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles = articlesList;
  topic!: Itopics;
  constructor(private route: ActivatedRoute){
    
  }
  ngOnInit(){
    this.route.queryParams.subscribe(params=>
      console.log(params['topic'])
      )
  }
}
