import {Component, Input, OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Actor} from '../../../actors/model/Actor';
import {Film} from '../../model/Film';
import {FilmService} from '../../service/film.service';

@Component({
  selector: 'app-get-actors-for-film',
  templateUrl: './get-actors-for-film.component.html',
  styleUrls: ['./get-actors-for-film.component.css']
})
export class GetActorsForFilmComponent implements OnInit {
  private listOfActorsForFilm: Actor[];
  @Input('film') private film: Film;
  private displayListOfActorsForFilm = false;

  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
  }

  private getActorsForFilm() {
    this.filmService.getActorsForFilm(this.film).subscribe((response) => this.listOfActorsForFilm = response);
    this.displayListOfActorsForFilm = true;
  }

  private closeDisplayListOfActorsForFilm() {
    this.displayListOfActorsForFilm = false;
  }

}
