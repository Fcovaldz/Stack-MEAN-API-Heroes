import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import { NgForm } from '@angular/forms';
import { Heroes } from '../../models/heroes';
import { HeroService } from '../../services/Hero.services';
@Component({
  selector: 'app-custom-heros',
  templateUrl: './custom-heros.component.html',
  styleUrls: ['./custom-heros.component.css']
})
export class CustomHerosComponent implements OnInit {
  [x: string]: any;
  heros: any[]=[];
  hmodel: Heroes=new Heroes;
  _guardarid: any;

  constructor(private heross:HeroService) { }

  ngOnInit(): void {
    this.Heroes();
  }

/*
  postHeros(_hmodel: any) {
    throw new Error('Method not implemented.');
  }
  putHeros(_hmodel: any, _guardarid: any) {
    throw new Error('Method not implemented.');
  }
  deleteHeros(_guardarid: any) {
    throw new Error('Method not implemented.');
  }

*/



 

  gHeros(){
    this.heross.getHeros().then((data:any) => {
      this.heros=data;
      console.log(this.heros);
    });
  };

  pHeros(form: NgForm){
    this.heross.postHeros(this.hmodel).then((data:any) => {
      this.hmodel=data;
      console.log(this.hmodel);
    }).catch((error) => {
      console.log("Algo salio mal en el post",error);
    })
  }

  ptHeros(){
    this.heross.putHeros(this.hmodel,this._guardarid).then((data:any) => {
      this.hmodel = data;
      console.log(this.hmodel);
    })
  }

  delHeros(){
    this.heross.deleteHeros(this._guardarid).then((data: any) => {
      this.hmodel = data;
      console.log(this.hmodel);
    })
  }

  obtenerid(_id:string){
    this._guardarid = _id;
    console.log(this._guardarid);
  }


}
