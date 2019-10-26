import {Component, OnInit} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Actor} from '../../model/Actor';
import {FilmForActor} from '../../model/FilmForActor';
import {ActorService} from '../../service/actor.service';

@Component({
  selector: 'app-actors-root',
  templateUrl: './actors-root.component.html',
  styleUrls: ['./actors-root.component.css']
})
export class ActorsRootComponent implements OnInit {
  listOfActors: Actor[];
  displayListOfActors = false;

  listOfFilmsForAnActor: FilmForActor[];
  displayListOfFilmsForActor = false;

  displayActor = false;
  actor: Actor;

  numeActor: string = null;

  constructor(private actorService: ActorService) {
    this.actor = new Actor();
  }

  ngOnInit() {
  }

  getAllActors() {
    this.actorService.getAllActors(this.numeActor).subscribe((response) => this.listOfActors = response);
    this.numeActor = null;
    this.displayListOfActors = true;
  }

  closeTableOfAllActors() {
    this.displayListOfActors = false;
  }

  getActorByID() {
    this.actorService.getActorByID(this.actor.id).subscribe((response) => this.actor = response);
    this.displayActor = true;
  }

  closeActorDisplay() {
    this.displayActor = false;
  }


  getListOfFilmsForActor() {
    this.actorService.getListOfFilmsForActor(this.actor.id).subscribe((response) => this.listOfFilmsForAnActor = response);
    this.displayListOfFilmsForActor = true;
  }

  closeListOfFilmsForActor() {
    this.displayListOfFilmsForActor = false;
  }

}
