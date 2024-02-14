/* 1_(crea una propiedad, container, la cual va a alojar un ul "represents an unordered list of items") 
   2_ (crear un metodo que agregre todo los detalles que van a ir adentro de la ul */

import { HasFormat } from "../interfaces/interface.js";

export class TemplateLi{ //las clases se pueden utilizar para encapsular lógica relacionada con la manipulación y representación de datos en una aplicación web
  constructor(private container: HTMLUListElement){}
  render(heading:string, item:HasFormat, position: 'start'| 'end'){ //funcion q representa los datos de mis inputs en mi ul 
   const li = document.createElement('li');
   
   const h4 = document.createElement('h4');
   h4.innerHTML = heading;
   li.append(h4);

   const p = document.createElement('p');
   p.innerHTML = item.format();
   li.append(p);

   if (position === 'end'){
    this.container.append(li);
   }else if(position === 'start'){
    this.container.prepend(li);
   }

  }
}