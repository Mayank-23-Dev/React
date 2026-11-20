import { sum } from "./main.js";
console.log(sum(30,60));

let h1=document.createElement("h1");
h1.textContent="hello";

// console.log(h1);

// document.body.append(h1);

let rh1= React.createElement(
    "h1",
    null,
    React.createElement("span",null,"i am under h1")
);

let realDomElem=document.querySelector("#root");
ReactDOM.createRoot(realDomElem).render(rh1);       
