import {Component, OnInit} from '@angular/core';


import {Film} from '../../model/Film';
import {FilmService} from '../../service/film.service';

@Component({
  selector: 'app-films-root',
  templateUrl: './films-root.component.html',
  styleUrls: ['./films-root.component.css']
})
export class FilmsRootComponent implements OnInit {
  private film: Film;
  private displayFilm = false;


  private listOfAllFilms: Film[];
  private displayListOfAllFilms = false;


  private idGen = null;

  private numeFilm: string = null;

  constructor(private filmService: FilmService) {
    this.film = new Film();
  }


  ngOnInit() {
  }

  private getFilmByID() {
    this.filmService.getFilmById(this.film).subscribe((response) => this.film = response);
    this.displayFilm = true;
  }

  private closeDisplayFilm() {
    this.displayFilm = false;
  }


  private getAllFilms() {
    this.filmService.getAllFilms(this.idGen, this.numeFilm).subscribe((response) => this.listOfAllFilms = response);
    this.numeFilm = null;
    this.idGen = null;
    this.displayListOfAllFilms = true;
  }


  private closeDisplayListOfAllFilms() {
    this.displayListOfAllFilms = false;
  }


}
