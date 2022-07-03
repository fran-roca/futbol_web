import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  async getCountries() {
    const basePath: string = environment.serverPath + 'catalog/';
    const get$ = this.http.get( basePath + 'perfil');
    const res2 = await lastValueFrom(get$)
    return res2;
    
  }
}
