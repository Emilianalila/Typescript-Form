/* 1_(crea una propiedad, container, la cual va a alojar un ul "represents an unordered list of items")
   2_ (crear un metodo que agregre todo los detalles que van a ir adentro de la ul */
export class TemplateLi {
    constructor(container) {
        this.container = container;
    }
    render(heading, item, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerHTML = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerHTML = item.format();
        li.append(p);
        if (position === 'end') {
            this.container.append(li);
        }
        else if (position === 'start') {
            this.container.prepend(li);
        }
    }
}
