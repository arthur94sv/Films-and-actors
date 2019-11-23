import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilmsRootComponent} from './components/films-root/films-root.component';
import {FormsModule} from '@angular/forms';
import { AddFilmComponent } from './components/add-film/add-film.component';
import { DeleteFilmsComponent } from './components/delete-films/delete-films.component';
import { UpdateFilmsComponent } from './components/update-films/update-films.component';
import { GetActorsForFilmComponent } from './components/get-actors-for-film/get-actors-for-film.component';
import { AddActorForFilmComponent } from './components/add-actor-for-film/add-actor-for-film.component';


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
