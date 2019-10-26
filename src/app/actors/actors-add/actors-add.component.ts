import {Component, OnInit} from '@angular/core';
import {Actor} from '../../model/Actor';
import {ActorService} from '../../service/actor.service';

@Component({
  selector: 'app-actors-add',
  templateUrl: './actors-add.component.html',
  styleUrls: ['./actors-add.component.css']
})
export class ActorsAddComponent implements OnInit {
  private actor: Actor;

  constructor(private actorService: ActorService) {
    this.actor = new Actor();
  }

  ngOnInit() {
  }

  private addActor() {
    this.actorService.addActor(this.actor).subscribe();
    this.clearAddActorForm();
  }

  private clearAddActorForm() {
    this.actor.prenume = null;
    this.actor.nume = null;
  }

}
