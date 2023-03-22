import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-link',
  templateUrl: './article-link.component.html',
  styleUrls: ['./article-link.component.css']
})
export class ArticleLinkComponent {
@Input() topic!: string;
}
