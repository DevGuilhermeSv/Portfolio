import { Component } from '@angular/core';
import { Itopics } from './Itopics';
import { topicsArray } from './topics';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})


export class TopicsComponent {

  topicsArray = topicsArray;

}
