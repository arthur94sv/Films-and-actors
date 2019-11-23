import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actor} from '../model/Actor';
import {FilmForActor} from '../model/FilmForActor';
import {Film} from '../../films/model/Film';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) {
  }

  getAllActors(numeActor: string) {
    if (numeActor === null) {
      return this.http.get<Actor[]>('http://localhost:8081/actors');
    } else {
      return this.http.get<Actor[]>('http://localhost:8081/actors?numeActor=' + numeActor);
    }
  }

  getActorByID(id: number) {
    return this.http.get<Actor>('http://localhost:8081/actors/' + id);
  }

  getListOfFilmsForActor(id: number) {
    return this.http.get<FilmForActor[]>('http://localhost:8081/actors/' + id + '/films');
  }

  addActor(actor: Actor) {
    return this.http.post('http://localhost:8081/actors', actor);
  }

  deleteActor(actor: Actor) {
    return this.http.delete('http://localhost:8081/actors/' + actor.id);
  }

  updateActor(actor: Actor) {
    return this.http.put('http://localhost:8081/actors/' + actor.id, actor);
  }

  addFilmForActor(actor: Actor, film: Film) {
    return this.http.post('http://localhost:8081/actors/' + actor.id + '/films', film);
  }
}
