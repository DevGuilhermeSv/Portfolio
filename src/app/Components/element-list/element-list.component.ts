import { Component, Input } from '@angular/core';
import { IArticles } from '../../Interfaces/IArticles';
@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent {
  @Input() article!: IArticles;
}
