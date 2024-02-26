import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { TemplateLi } from "./classes/templateLi.js";
import { HasFormat } from "./interfaces/interface.js";

const form = document.querySelector('form') as HTMLFormElement;
const type = document.getElementById('type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul') as HTMLUListElement;
const ulElement = new TemplateLi(ul);
let forM:HasFormat;


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  if (type.value === 'invoice'){
     forM = new Invoice(tofrom.value , details.value , amount.valueAsNumber); // estoy creando un nuevo objeto dependiendo si se elije opcion invoice o payment y usando la clase o plantilla que corresponde, en este caso uso la plantilla de Invoice para crear el nuevo objeto. (solo lo estoy creando, pero con los inputs q me da el usuario, aqui es donde yo reuno mi dom con mi js)
  } else if(type.value === 'payment'){
    forM = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    //console.log(forM.format())
  }
  ulElement.render(type.value,forM,'start');
})
