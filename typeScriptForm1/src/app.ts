// npm install -g typscript (first we install globaly typescript so we can create a new app, any time, we use sudo, to installed globlaly) 

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
import { HasFormatter } from "./interfaces/hasFormatter.js";
import { Payment } from "./classes/payment.js"; 
import { ListTemplate } from "./classes/listTemplate.js";

  
  const form = document.querySelector('form') as HTMLFormElement;
  const type =document.getElementById('type') as HTMLSelectElement;
  const tofrom =document.getElementById('tofrom') as HTMLInputElement;
  const details =document.getElementById('details') as HTMLInputElement;
  const amount =document.getElementById('amount') as HTMLInputElement;
   
  const itemUl = document.querySelector('ul')!;
  const contenedor = new ListTemplate(itemUl);
  let doc:HasFormatter;

  form.addEventListener('submit', (e)=>{
      e.preventDefault();
      if (type.value === 'invoice'){
        doc = new Invoice (tofrom.value, details.value, amount.valueAsNumber);
      }else if(type.value === 'payment'){
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
      }
      contenedor.render(type.value, doc, 'end');
    });


  
