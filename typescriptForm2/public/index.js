import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { TemplateLi } from "./classes/templateLi.js";
const form = document.querySelector('form');
const type = document.getElementById('type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const ulElement = new TemplateLi(ul);
let forM;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (type.value === 'invoice') {
        forM = new Invoice(tofrom.value, details.value, amount.valueAsNumber); // estoy creando un nuevo objeto dependiendo si se elije opcion invoice o payment y ussando la clase o plantilla que corresponde, en este caso uso la plantilla de Invoice para crear el nuevo objeto. (solo lo estoy creando, pero con los inputs q me da el usuario, aqui es donde yo reuno mi dom con mi js)
    }
    else if (type.value === 'payment') {
        forM = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        //console.log(forM.format())
    }
    ulElement.render(type.value, forM, 'start');
});
