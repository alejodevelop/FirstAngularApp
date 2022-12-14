import { Component } from '@angular/core';
import { DataService } from './data.service';

import { Post } from './POST';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstApp';
  posts: Post[] = [];
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.posts = data;

    });
  }
}
