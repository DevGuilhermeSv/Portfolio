import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articlesList } from '../Articles/Articles';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles = articlesList

  constructor(private route: ActivatedRoute){
    
  }
  ngOnInit(){
    this.route.queryParams.subscribe(params=>
      params)
  }
}
