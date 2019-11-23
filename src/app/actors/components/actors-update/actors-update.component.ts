import {Component, Input, OnInit} from '@angular/core';

import {Actor} from '../../model/Actor';
import {ActorService} from '../../service/actor.service';

@Component({
  selector: 'app-actors-update',
  templateUrl: './actors-update.component.html',
  styleUrls: ['./actors-update.component.css']
})
export class ActorsUpdateComponent implements OnInit {
  @Input('actor') private actor: Actor;
  private displayUpdate = false;

  constructor(private actorService: ActorService) {
  }

  ngOnInit() {
  }

  private displayUpdatePanel() {
    this.displayUpdate = true;
  }

  private closeDisplayUpdatePanel() {
    this.displayUpdate = false;
  }

  private updateActor() {
    this.actorService.updateActor(this.actor).subscribe();
    this.closeDisplayUpdatePanel();
  }

}
