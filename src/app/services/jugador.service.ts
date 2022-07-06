import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jugador } from '../entities/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  basePath: string = environment.serverPath + 'jugador';

  constructor(private http: HttpClient) { }


  async getJugador(filter: string, min: string='') {
    let urlFilter = ''
    if (filter && min){
      urlFilter = '?nombre='+filter+'&min='+min
    }else if (filter){
      urlFilter = '?nombre='+filter
    }else if (min){
      urlFilter = '?min='+min
    }
    const get$ = this.http.get( this.basePath + urlFilter);
    const res = await lastValueFrom(get$)
    return res;
  }

  async getJugadorById(id: number, min: string='') {
    const get$ = this.http.get<Jugador>( this.basePath + '?id='+id);
    return get$;
  }

  async postJugador(data: Jugador) {
    const options = {headers: {'Content-Type': 'application/json'}};

    const post$ = await this.http.post<any>(this.basePath, JSON.stringify(data), options)
    return post$
  }
}
