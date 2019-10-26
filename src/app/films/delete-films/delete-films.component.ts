import {Component, Input, OnInit} from '@angular/core';

import {Film} from '../../model/Film';
import {FilmService} from '../../service/film.service';

@Component({
  selector: 'app-delete-films',
  templateUrl: './delete-films.component.html',
  styleUrls: ['./delete-films.component.css']
})
export class DeleteFilmsComponent implements OnInit {
  @Input('film') private film: Film;

  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
  }

  private deleteFilms() {
    this.filmService.deleteFilm(this.film).subscribe();
    this.film.nume = null;
    this.film.anulAparitiei = null;
    this.film.gen = null;
  }

}
