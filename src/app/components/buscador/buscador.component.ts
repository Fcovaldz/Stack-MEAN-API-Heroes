import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroService } from '../../services/Hero.services';
import { NodeServiceService } from '../../services/node-service.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private _aRoute: ActivatedRoute, private _heroService: HeroService, private node:NodeServiceService) { }

  resultados: any = [];

  str:string = '';

  ngOnInit(): void {
    //obtener parametros de la ruta
    
    this._aRoute.params.subscribe(params =>{
      //this.resultados = this._heroService.searchHeros(params['termino']);
      //console.log(this.resultados);
      this.node.getByTerm(params['termino']).subscribe((data:any) => {
        
        this.resultados = data;
  
      });
      
    });
  }

}