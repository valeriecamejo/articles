import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../interfaces/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[];
  constructor(private articleService: ArticlesService, private router:Router) {
    this.getArticles();
  }

  getArticles() {
    this.articleService.get().subscribe( (data: Article[]) => {
      this.articles = data;
    }, (error) => {
      console.log(error);
      alert("Ocurrió un error");
    });
  }

  ngOnInit() {
  }

  delete(id) {
    if(confirm("¿Seguro que desea eliminar el artículo?")) {
      this.articleService.delete(id).subscribe( (data) => {
        this.getArticles();
      }, (error) => {
        console.log(error);
      });
    }
  }

}
