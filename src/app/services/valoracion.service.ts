import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Valoracion } from '../entities/valoracion';

@Injectable({
  providedIn: 'root'
})
export class ValoracionService {

  basePath: string = environment.serverPath + 'valoracion';

  constructor(private http: HttpClient) { }

  postValoracion(data: Valoracion) {
    const options = {headers: {'Content-Type': 'application/json'}};

    const post$ = this.http.post<any>(this.basePath, JSON.stringify(data), options)
    return post$
  }
}
