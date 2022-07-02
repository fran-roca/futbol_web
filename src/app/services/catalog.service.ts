import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  async getCountries() {

    const get$ = this.http.get('http://127.0.0.1:8000/catalog/perfil');
    const res2 = await lastValueFrom(get$)
    return res2;
    


    /*return this.http.get<any>('http://127.0.0.1:8000/catalog/visualizacion')
      .toPromise()
      .then(data => { return data; });*/
  }
}
