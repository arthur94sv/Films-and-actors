import {Component, Input, OnInit} from '@angular/core';

import {Actor} from '../../model/Actor';
import {Film} from '../../model/Film';
import {ActorService} from '../../service/actor.service';


@Component({
  selector: 'app-add-film-for-actor',
  templateUrl: './add-film-for-actor.component.html',
  styleUrls: ['./add-film-for-actor.component.css']
})
export class AddFilmForActorComponent implements OnInit {
  private film: Film;
  @Input('actor') private actor: Actor;

  constructor(private actorService: ActorService) {
    this.film = new Film();
  }

  ngOnInit() {
  }

  private addFilmForActor() {
    this.actorService.addFilmForActor(this.actor, this.film).subscribe();
    this.film.nume = null;
    this.film.anulAparitiei = null;
    this.film.gen = null;
  }

}
