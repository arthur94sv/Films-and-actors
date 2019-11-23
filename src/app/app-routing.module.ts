import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ActorsRootComponent} from './actors/components/actors-root/actors-root.component';
import {FilmsRootComponent} from './films/components/films-root/films-root.component';


const routes: Routes = [
  {path: '', redirectTo: 'actorsView', pathMatch: 'full'},
  {path: 'actorsView', component: ActorsRootComponent},
  {path: 'filmsView', component: FilmsRootComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
