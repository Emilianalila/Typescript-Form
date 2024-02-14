import { HasFormatter } from "../interfaces/hasFormatter.js";

export class ListTemplate{
  constructor(private container: HTMLUListElement){} // This means that we are telling the container to draw something in the list.
  
  render(heading: string, item: HasFormatter, position: 'start'|'end'){
    const li = document.createElement('li'); 
    const h4 = document.createElement('h4'); 
    h4.innerHTML = heading;
    li.append(h4);
    
    const p = document.createElement('p');
    p.innerHTML = item.format();
    li.append(p);

    if (position === 'start'){
      this.container.prepend(li);
    }else{
      this.container.append(li);
    }
  }
}