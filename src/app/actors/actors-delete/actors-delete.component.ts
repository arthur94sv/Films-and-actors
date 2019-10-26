import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../../model/Actor';
import {ActorService} from '../../service/actor.service';

@Component({
  selector: 'app-actors-delete',
  templateUrl: './actors-delete.component.html',
  styleUrls: ['./actors-delete.component.css']
})
export class ActorsDeleteComponent implements OnInit {
  @Input('actor') private actor: Actor;

  constructor(private actorService: ActorService) {
  }

  ngOnInit() {
  }

  private deleteActor() {
    this.actorService.deleteActor(this.actor).subscribe();
    this.actor.id = null;
    this.actor.nume = null;
    this.actor.prenume = null;
  }
}
