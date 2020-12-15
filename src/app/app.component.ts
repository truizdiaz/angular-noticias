import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNoticias: any[] = [];
  loading = false;

  constructor(private _noticiaService: NoticiaService) {

  }

  buscarNoticias(parametros: any) {
    this.loading = true;
    this.listNoticias = [];

    setTimeout(() => {
      this._noticiaService.getNoticias(parametros).subscribe(data => {
        this.loading = false;
        this.listNoticias = data.articles;
      }, error => {
        console.log(error);
        this.loading = false;
      })
    }, 1000);
    
  }
}
