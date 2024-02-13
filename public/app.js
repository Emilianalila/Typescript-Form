/* to compile ts to js, I have to go to the terminal en write: "tsc index.ts index.js" but if both have the same name, I can just write tsc index.ts */
// _tsc index.ts -w (I can compile automatically)
//_ create 2 folders -public and -src 'source' and then we have to separate al the file, between the file that I going to deploy and the file, that not
// _ tsc --init it create a tsconfig.json file in src and change the directory inside of tsconfig.json "rootDir": "./src" and  "outDir": "./public" here we are saying that everything that we create in scr is going to compile to public and press just tsc first and then tsc -w
// then if we ever create another file outside src folder is going to compile anyways to public and create the same file , but inside public, if we wanna to avoid this behavior we have to write in tsconfing: "include": ["src", "index.ts"]
// I change index.ts to app.ts
// DOM (casting)
// class (constructor)
// access modifiers ("public", "private" (we can access to de propertie from the inside of de class but not outside), "readonly")
// modules (change to  "target": "es2016" and from commonjs to "module": "ES2015") and add type = 'module' to my script in index.html 
//interface 
import { Invoice } from "./classes/invoice.js"; //we compile js not ts at the end.
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/listTemplate.js";
const form = document.querySelector('form');
const type = document.getElementById('type');
const tofrom = document.getElementById('tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
/* const itemLi = document.createElement('li');
itemLi.innerHTML = '';
itemUl?.append(itemLi); */
const itemUl = document.querySelector('ul');
const contenedor = new ListTemplate(itemUl); // la clase ListTemplate, tiene un solo parametro en su constructor el cual es de tipo element ul, osea que le tenemos q dar eso para q pueda funcionar.
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else if (type.value === 'payment') {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    contenedor.render(type.value, doc, 'end');
});
/* itemLi.innerHTML = `${type.value}, ${ tofrom.value},  ${ details.value},  ${ amount.valueAsNumber}`;
console.log(`${type.value}, ${tofrom.value}, ${details.value}`, amount.valueAsNumber); */
/* let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('EMI', 'VAMOS', 999);
docTwo = new Payment('EMI', 'VAMOS', 999);

const person1 = new Invoice('emi', 'ya viene', 89);
const person2 = new Invoice('EmiLIANA', 'Sonrei', 89);
console.log(person1.format());
//console.log(Invoice.name) */
//const anchor = document.querySelector('a')!; // I am super sure that we have an element with an anchor tag is because I putting' ! ' also I Can put ? in front of the (anchor?.href)
//console.log(anchor.href);
//const form2 = document.querySelector('.new-item-form') as HTMLFormElement; // when I hover over form2 it say it that from2 is a const form: element, because we are using a class and a class it can be used or apply in any diferent element, it doesnt know that it is a form. so we have to tell to typescript which element is by casting that element with "as HTMLFormElement" with this ... now we can use all the properties or methods of the form like (form.children) 
//console.log(form2.children);
