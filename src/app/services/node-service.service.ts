import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NodeServiceService {

  url: string = 'http://127.0.0.1:3000/';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(`${this.url}heroesAct`);
  }

  getByID(id){
    return this.http.get(`${this.url}heroe/${id}`);
  }

  getByTerm(termino){
    return this.http.get(`${this.url}heroesTerm?termino=${termino}`);
  }

  deleteByID(id){
    return this.http.delete(`${this.url}heroe/${id}`);
  }

  
}