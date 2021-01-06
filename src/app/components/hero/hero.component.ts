import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/Hero.services';
//import { NodeServiceService } from 'src/app/services/node-service.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  // variable que almacena la respuesta del método getHero que se encuentra en HeroService
  hero:any = {};

  //flag= true;

  constructor(private _aRouter: ActivatedRoute, private _heroService:HeroService) {

    this._aRouter.params.subscribe(params => {
      console.log(params);
      this.hero = this._heroService.getHero(params['id'])
      console.log(this.hero);
      //this.hero = this._heroService.getHero(params['id']);
      //this.node.getByID(params['_id']).subscribe((data:any) =>{
      //  this.hero = data;
        
     //   if(this.hero.casa == 'Marvel'){
      //  
     // });-->
      
    })

  }

  ngOnInit(): void {
  }

}