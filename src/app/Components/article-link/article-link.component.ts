import { Component, Input } from '@angular/core';
import { Itopics } from '../topics/Itopics';

@Component({
  selector: 'app-article-link',
  templateUrl: './article-link.component.html',
  styleUrls: ['./article-link.component.css']
})
export class ArticleLinkComponent {
@Input() topic!: Itopics;
}
