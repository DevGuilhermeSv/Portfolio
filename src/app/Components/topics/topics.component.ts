import { Component } from '@angular/core';
import { topicsArray } from '../../Repositories/topics';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})


export class TopicsComponent {

  topicsArray = topicsArray;

}
