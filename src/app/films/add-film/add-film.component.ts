import {Component, OnInit} from '@angular/core';

import {Film} from '../../model/Film';
import {FilmService} from '../../service/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  private film: Film;

  constructor(private filmService: FilmService) {
    this.film = new Film();
  }

  ngOnInit() {
  }


  private addFilm() {
    this.filmService.addFilm(this.film).subscribe();
    this.clearAddFilmForm();
  }

  private clearAddFilmForm() {
    this.film.nume = null;
    this.film.anulAparitiei = null;
    this.film.gen = null;
  }
}
