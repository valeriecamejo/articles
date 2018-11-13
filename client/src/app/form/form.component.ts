import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { ArticlesService } from '../services/articles.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  article: Article = {
    title: null,
    description: null
  };
  title: string = "Crear";
  id: any;
  editing: boolean = false;
  articles: Article[];
  constructor(private articlesService: ArticlesService, private activatedRoute: ActivatedRoute, private router:Router) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id) {
      this.title = "Editar";
      this.editing = true
      this.articlesService.get().subscribe( (data: Article[]) => {
        this.articles = data;
        this.article = this.articles.find( (m) => { return m.id == this.id} );
      }, (error) => {
        console.log(error);
      })
    } else {
      this.editing = false;
      this.title = "Crear";
    }
  }

  ngOnInit() {
  }

  saveMovie() {
    if(this.editing) {
      this.articlesService.put(this.article).subscribe( (data) => {
        this.router.navigate([' home']);
      }, (error) => {
        console.log("Ocurrió un error");
      });
    } else {
      this.articlesService.save(this.article).subscribe( (data) => {
        alert("Artículo guardado exitosamente");
        this.router.navigate(['home']);
      }, (error) => {
        console.log("Ocurrió un error");
      });
    }
  }

}
