import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AticleService } from 'src/app/Services/article.service';
import { IArticles } from 'src/app/Interfaces/IArticles';
import hljs from 'highlight.js';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css', '../../../assets/styles/base16/dracula.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent {
  article!: IArticles;

  
  constructor(private activatedRoute : ActivatedRoute,
    private articleService: AticleService) { }

  ngOnInit(): void { 
   
   const articleId = this.activatedRoute.snapshot.paramMap.get("id");
   if(articleId == null){
    throw new Error("id não identiicado");
   }
   this.article = this.articleService.getArticle(articleId);

  }
  ngAfterViewInit(){
     hljs.highlightAll();
  }
}
