import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articlesList } from '../Articles';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent {
  article!: any;
  constructor(private activatedRoute : ActivatedRoute) { }
 
  ngOnInit(): void { 
   let articleId = this.activatedRoute.snapshot.paramMap.get("id");
   this.article = articlesList.find(c=>c.id.toString() == articleId);
  }
}
