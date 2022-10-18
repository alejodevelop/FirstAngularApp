import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './POST';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) {
    console.log("service working!");

  }

  getData() {
    return this.httpclient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }


}
