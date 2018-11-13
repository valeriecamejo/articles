import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { ArticlesService } from '../services/articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  article: Article = {
    title: null,
    description: null
  };
  id: any;
  editing: boolean = false;
  articles: Article[];
  constructor(private articlesService: ArticlesService, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id) {
      this.editing = true
      this.articlesService.get().subscribe( (data: Article[]) => {
        this.articles = data;
        this.article = this.articles.find( (m) => { return m.id == this.id} );
      }, (error) => {
        console.log(error);
      })
    } else {
      this.editing = false
    }
  }

  ngOnInit() {
  }

}


