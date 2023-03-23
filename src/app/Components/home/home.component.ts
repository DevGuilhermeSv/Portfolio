import { Component } from '@angular/core';
import { articlesList } from '../Articles/Articles';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles= articlesList

}
