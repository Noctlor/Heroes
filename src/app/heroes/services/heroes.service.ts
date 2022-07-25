import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroes } from '../interface/heroes.interface';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }


  getheroes():Observable<Heroes[]>{
    return this.http.get<Heroes[]>(`${ this.baseUrl }/heroes`);
  }

  getheroeid(id:string):Observable<Heroes>{
    return this.http.get<Heroes>(`${ this.baseUrl }/heroes/${ id }`);
  }
  getSugerencias( termino: string ): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${ this.baseUrl }/heroes?q=${ termino }&_limit=6`);
  }
}
