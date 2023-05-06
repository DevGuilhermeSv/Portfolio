import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HighlightLoader, HighlightAutoResult } from 'ngx-highlightjs';
import { AticleService } from 'src/app/Services/article.service';
import { IArticles } from 'src/app/Interfaces/IArticles';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent {
  article!: IArticles;

  
  constructor(private activatedRoute : ActivatedRoute,
    private hljsLoader: HighlightLoader,
    private articleService: AticleService) { }
  onHighlight(e: HighlightAutoResult) {
   console.log(e);
  }
  ngOnInit(): void { 
   const articleId = this.activatedRoute.snapshot.paramMap.get("id");
   if(articleId == null){
    throw new Error("id não identiicado");
   }
   this.article = this.articleService.getArticle(articleId);

  }
}
