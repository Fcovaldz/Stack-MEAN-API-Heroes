import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value:string, bandera: boolean): string {
    // let cadena = '';
    // if(bandera){
    //   for(let i = 0; i<value.length; i++){
    //     cadena+='*';
    //   }
    // }else{
    //   cadena = value;
    // }
    // return cadena;
    return (bandera) ? '*'.repeat(value.length): value;
  }

}