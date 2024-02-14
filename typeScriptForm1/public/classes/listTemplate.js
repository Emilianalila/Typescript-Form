export class ListTemplate {
    constructor(container) {
        this.container = container;
    } // This means that we are telling the container to draw something in the list.
    render(heading, item, position) {
        const li = document.createElement('li'); 
        const h4 = document.createElement('h4'); 
        h4.innerHTML = heading;
        li.append(h4);
        const p = document.createElement('p'); 
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
