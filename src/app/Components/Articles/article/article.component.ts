import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articlesList } from '../../../Repositories/Articles';
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightLoader, HighlightAutoResult } from 'ngx-highlightjs';
import { AticleService } from 'src/app/Services/article.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent {
  article!: any;

  
  constructor(private activatedRoute : ActivatedRoute,
    private hljsLoader: HighlightLoader,
    private articleService: AticleService) { }
  onHighlight(e: HighlightAutoResult) {
   console.log(e);
  }
  ngOnInit(): void { 
   let articleId = this.activatedRoute.snapshot.paramMap.get("id");
   if(articleId == null){
    throw new Error("id não identiicado");
   }
   this.article = this.articleService.getArticle(articleId);

  }
}
