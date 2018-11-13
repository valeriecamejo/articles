import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { }
  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/articles');
  }
    save(article: Article) {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.httpClient.post(this.API_ENDPOINT + '/articles', article, { headers: headers });
    }

    put(article) {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.httpClient.put(this.API_ENDPOINT + '/articles/' + article.id, article, { headers: headers });
    }

    delete(id) {
      return this.httpClient.delete(this.API_ENDPOINT + '/articles/' + id);
    }
}
