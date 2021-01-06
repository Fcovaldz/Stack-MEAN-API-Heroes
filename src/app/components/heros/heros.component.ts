import { Component, OnInit } from '@angular/core';
//, OnChanges, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy */
import { HeroService } from '../../services/Hero.services';
import { Router } from '@angular/router';
//import { NodeServiceService } from '../../services/node-service.service';

//decorador 
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit{

  constructor(private heroService:HeroService, private _aRouter: Router) {
    //console.log("Constructor de heros");
    
  }
  

  ArrayHeros: object[] = [];

  //se ejecuta en cuanto se termina de renderizar el componente
  ngOnInit(): void {
    
     this.ArrayHeros = this.heroService.getHeros();
    
  }

  Navegar(index) {
    console.log(index);
    
    this._aRouter.navigate(['/hero',index]);
  }

}