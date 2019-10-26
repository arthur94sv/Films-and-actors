import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Film} from '../model/Film';
import {Actor} from '../model/Actor';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) {
  }

  getFilmById(film: Film) {
    return this.http.get<Film>('http://localhost:8081/films/' + film.id);
  }

  getAllFilms(idGen: number, numeFilm: string) {
    if (idGen === null && numeFilm === null) {
      return this.http.get<Film[]>('http://localhost:8081/films');
    } else if (idGen != null && numeFilm === null) {
      return this.http.get<Film[]>('http://localhost:8081/films?idGen=' + idGen);
    } else if (idGen === null && numeFilm != null) {
      return this.http.get<Film[]>('http://localhost:8081/films?numeFilm=' + numeFilm);
    }

  }

  addActorToAFilm(film: Film, actor: Actor) {
    return this.http.post('http://localhost:8081/films/' + film.id + '/actors', actor);
  }

  addFilm(film: Film) {
    return this.http.post('http://localhost:8081/films/', film);
  }

  deleteFilm(film: Film) {
    return this.http.delete('http://localhost:8081/films/' + film.id);
  }

  getActorsForFilm(film: Film) {
    return this.http.get<Actor[]>('http://localhost:8081/films/' + film.id + '/actors');
  }

  updateFilm(film: Film) {
    return this.http.put('http://localhost:8081/films/' + film.id, film);
  }
}
