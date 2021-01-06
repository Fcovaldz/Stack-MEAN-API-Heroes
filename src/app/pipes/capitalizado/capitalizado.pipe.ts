import { Pipe, PipeTransform } from '@angular/core';
//decorador
@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  // Un pipe siempre recibe argumentos 
  // value es el valor o la variable antes de entrar al pipe
  transform(value: string, todas: true): string {
    //console.log(value.toLowerCase());
    // console.log({edad,activo,mensaje});
    value = value.toLowerCase();
    //dividir el string value en palabras
    let palabras = value.split(' ');
    console.log(palabras);
    
    //verificar cuando todas tiene true
    if(todas){
      palabras = palabras.map(palabra => {
        return palabra[0].toUpperCase() + palabra.substr(1);
      })
    }else{
      palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substr(1);
    }
    
    return palabras.join(' ');
  }

}