import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilmsRootComponent} from './films-root/films-root.component';
import {FormsModule} from '@angular/forms';
import { AddFilmComponent } from './add-film/add-film.component';
import { DeleteFilmsComponent } from './delete-films/delete-films.component';
import { UpdateFilmsComponent } from './update-films/update-films.component';
import { GetActorsForFilmComponent } from './get-actors-for-film/get-actors-for-film.component';
import { AddActorForFilmComponent } from './add-actor-for-film/add-actor-for-film.component';


@NgModule({
  declarations: [FilmsRootComponent, AddFilmComponent, DeleteFilmsComponent, UpdateFilmsComponent, GetActorsForFilmComponent, AddActorForFilmComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FilmsRootComponent
  ]
})
export class FilmsModule {
}
