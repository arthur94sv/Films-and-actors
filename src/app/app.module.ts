import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ActorsModule} from './actors/actors.module';
import {FilmsModule} from './films/films.module';


@NgModule({
  declarations: [
    AppComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActorsModule,
    FilmsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
