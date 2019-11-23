import {Component, Input, OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Film} from '../../model/Film';
import {FilmService} from '../../service/film.service';

@Component({
  selector: 'app-update-films',
  templateUrl: './update-films.component.html',
  styleUrls: ['./update-films.component.css']
})
export class UpdateFilmsComponent implements OnInit {
  @Input('film') private film: Film;
  private displayFilmPanel = false;

  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
  }

  private displayUpdateFilmPanel() {
    this.displayFilmPanel = true;
  }

  private updateFilm() {
    this.filmService.updateFilm(this.film).subscribe();
    this.displayFilmPanel = false;
  }

}
