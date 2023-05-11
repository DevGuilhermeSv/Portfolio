import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AticleService } from 'src/app/Services/article.service';
import { IArticles } from 'src/app/Interfaces/IArticles';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import csharp from 'highlight.js/lib/languages/csharp';
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
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('csharp', csharp);
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
