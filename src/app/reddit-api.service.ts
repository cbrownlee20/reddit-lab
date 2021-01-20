import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface paupersReddit {
  title: string;
  image: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {
  public getReddits: paupersReddit [] = [];

  constructor(private http: HttpClient) { }

  urlString: string = 'https://www.reddit.com/r/aww/.json'

  getReddit() {

    return this.http.get(urlString).subscribe(
      (data) => {
      console.log(data);

      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const Reddit = data[key];
    
          
          this.getReddits.push(Reddit);
          
        }
      }
    }, (error) => {
     
      console.error(error);
    }
    );
  }




}



