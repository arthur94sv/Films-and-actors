import {Component, Input, OnInit} from '@angular/core';

import {Actor} from '../../../actors/model/Actor';
import {Film} from '../../model/Film';
import {FilmService} from '../../service/film.service';

@Component({
  selector: 'app-add-actor-for-film',
  templateUrl: './add-actor-for-film.component.html',
  styleUrls: ['./add-actor-for-film.component.css']
})
export class AddActorForFilmComponent implements OnInit {
  private actor: Actor;
  @Input('film') private film: Film;

  constructor(private filmService: FilmService) {
    this.actor = new Actor();
  }

  ngOnInit() {
  }

  private addActorToFilm() {
    this.filmService.addActorToAFilm(this.film, this.actor).subscribe();
    this.actor.nume = null;
    this.actor.prenume = null;
  }

}
