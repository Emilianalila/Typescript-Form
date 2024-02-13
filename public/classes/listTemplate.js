export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(heading, item, position) {
        const li = document.createElement('li'); // cada Li
        const h4 = document.createElement('h4'); // el titulo dependiendo de si es Invoice or Payment
        h4.innerHTML = heading;
        li.append(h4);
        const p = document.createElement('p'); // lo q el usuario ingresa pero en formato class :`${this.name} ${this.details} ${this.amount}`
        p.innerHTML = item.format();
        li.append(p);
        if (position === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
