
const calculator = document.createElement("div");
calculator.setAttribute("class", "calculator");

const title=document.createElement("h1");
title.setAttribute("id","title");
title.innerText="CALCULATOR";
calculator.append(title)

const para=document.createElement("p")
para.setAttribute("id","description")
para.innerText="DAy 15 Simple calculator task usig html,css,js"
calculator.append(para)

// Display output box//
const output = document.createElement("input");
output.setAttribute("type", "text");
output.setAttribute("id","result")
output.setAttribute("class", "output");
output.setAttribute("placeholder", "0");
output.addEventListener('input', (event) => {
    const value = event.target.value;
    if (value.match(/[a-zA-Z]/)) {
        alert('Alphabet not allowed');
        event.target.value = value.slice(0, -1);
    }
});
calculator.append(output);

// First row//
const row1 = document.createElement("div");
row1.setAttribute("class", "row1");

// Clear button//
const clear = document.createElement("button");
clear.setAttribute("type", "button");
clear.setAttribute("class", "btn");
clear.setAttribute("id", "clear");
clear.setAttribute("value", "C");
clear.innerText="C"
clear.addEventListener("click", () => {
    output.value = null; 
});
row1.append(clear); 
calculator.append(row1);
// End of clear//
//Start of Dot
const dot=document.createElement("button");
dot.setAttribute("id","btn")
dot.setAttribute("class", "btn");
dot.setAttribute("type","button")
dot.setAttribute("value",".")
dot.innerText="."
dot.addEventListener("click",()=>{
    output.value +=".";
});
row1.append(dot);
calculator.append(row1);
//End
//star erase//
const erase=document.createElement("button");
erase.setAttribute("id","btn")
erase.setAttribute("class", "btn");
erase.setAttribute("type","button")
erase.setAttribute("value","<-")
erase.innerText="<"
erase.addEventListener("click",()=>{
    output.value =output.value.slice(0,-1);
});
row1.append(erase);
calculator.append(row1);
//End
//+sign
const Multiply=document.createElement("button");
Multiply.setAttribute("id","btn")
Multiply.setAttribute("class", "btn");
Multiply.setAttribute("type","button")
Multiply.setAttribute("value","*")
Multiply.innerText="*"
Multiply.addEventListener("click",()=>{
    output.value += "*";
});
row1.append(Multiply);
calculator.append(row1);
//end
//startig row2//
const row2 = document.createElement("div");
row2.setAttribute("class", "row2");

// num7 button//
const num7 = document.createElement("button");
num7.setAttribute("type", "button");
num7.setAttribute("class", "btn");
num7.setAttribute("id", "btn");
num7.setAttribute("value", "7");
num7.innerText="7";
num7.addEventListener("click", () => {
    output.value += "7"; 
});
row2.append(num7); 
calculator.append(row2);
// End of num7//
//Start of num8
const num8= document.createElement("button");
num8.setAttribute("type", "button");
num8.setAttribute("class", "btn");
num8.setAttribute("id", "btn");
num8.setAttribute("value", "8");
num8.innerText="8"
num8.addEventListener("click", () => {
    output.value += "8"; 
});
row2.append(num8); 
calculator.append(row2);
//End
//star num9//
const num9 = document.createElement("button");
num9.setAttribute("type", "button");
num9.setAttribute("class", "btn");
num9.setAttribute("id", "btn");
num9.setAttribute("value", "9");
num9.innerText="9";
num9.addEventListener("click", () => {
    output.value += "9"; 
});
row2.append(num9); 
calculator.append(row2);
//End
// "/"sign
const divide = document.createElement("button");
divide.setAttribute("type", "button");
divide.setAttribute("class", "btn");
divide.setAttribute("id", "btn");
divide.setAttribute("value", "/");
divide.innerText="/"
divide.addEventListener("click", () => {
    output.value += "/"; 
});
row2.append(divide); 
calculator.append(row2);
//start row3//
const row3 = document.createElement("div");
row3.setAttribute("class", "row3");

// num4 button//
const num4 = document.createElement("button");
num4.setAttribute("type", "button");
num4.setAttribute("class", "btn");
num4.setAttribute("id", "btn");
num4.setAttribute("value", "4");
num4.innerText="4";
num4.addEventListener("click", () => {
    output.value += "4"; 
});
row3.append(num4); 
calculator.append(row3);
// End of num4//
//Start of num5
const num5= document.createElement("button");
num5.setAttribute("type", "button");
num5.setAttribute("class", "btn");
num5.setAttribute("id", "btn");
num5.setAttribute("value", "5");
num5.innerText="5"
num5.addEventListener("click", () => {
    output.value += "5"; 
});
row3.append(num5); 
calculator.append(row3);
//End
//star num6//
const num6= document.createElement("button");
num6.setAttribute("type", "button");
num6.setAttribute("class", "btn");
num6.setAttribute("id", "btn");
num6.setAttribute("value", "6");
num6.innerText="6";
num6.addEventListener("click", () => {
    output.value += "6"; 
});
row3.append(num6); 
calculator.append(row3);
//End
// "-"sign
const subtract= document.createElement("button");
subtract.setAttribute("type", "button");
subtract.setAttribute("class", "btn");
subtract.setAttribute("id", "subtract");
subtract.setAttribute("value", "-");
subtract.innerText="-"
subtract.addEventListener("click", () => {
    output.value += "-"; 
});
row3.append(subtract); 
calculator.append(row3);

//start row4//
const row4 = document.createElement("div");
row4.setAttribute("class", "row4");

// num4 button//
const num1 = document.createElement("button");
num1.setAttribute("id", "1");
num1.setAttribute("class", "btn");
num1.setAttribute("type", "button");
num1.setAttribute("value", "1");
num1.innerText="1"
num1.addEventListener("click", () => {
    output.value += "1"; 
});
row4.append(num1); 
calculator.append(row4);
// End of num4//
//Start of num5
const num2= document.createElement("button");
num2.setAttribute("type", "button");
num2.setAttribute("class", "btn");
num2.setAttribute("id", "2");
num2.setAttribute("value", "2");
num2.innerText="2"
num2.addEventListener("click", () => {
    output.value += "2"; 
});
row4.append(num2); 
calculator.append(row4);
//End
//star num6//
const num3= document.createElement("button");
num3.setAttribute("type", "button");
num3.setAttribute("class", "btn");
num3.setAttribute("id", "3");
num3.setAttribute("value", "3");
num3.innerText="3";
num3.addEventListener("click", () => {
    output.value += "3"; 
});
row4.append(num3); 
calculator.append(row4);
//End
// "+"sign
const add= document.createElement("button");
add.setAttribute("type", "button");
add.setAttribute("class", "btn");
add.setAttribute("id", "add");
add.setAttribute("value", "+");
add.innerText="+"
add.addEventListener("click", () => {
    output.value += "+"; 
});
row4.append(add); 
calculator.append(row4);

//star row5//
const row5=document.createElement("div");
row5.setAttribute("class","row5");
// num0
const num0= document.createElement("button");
num0.setAttribute("type", "button");
num0.setAttribute("class", "btn");
num0.setAttribute("id", "num");
num0.setAttribute("value", "0");
num0.innerText="0"
num0.addEventListener("click", () => {
    output.value += "0"; 
});
row5.append(num0); 
calculator.append(row5);
//End
//star num00//
const num00= document.createElement("button");
num00.setAttribute("type", "button");
num00.setAttribute("class", "btn");
num00.setAttribute("id", "num");
num00.setAttribute("value", "00");
num00.innerText="00"
num00.addEventListener("click", () => {
    output.value += "00"; 
});
row5.append(num00); 
calculator.append(row5);
//End
// "="sign
const equalsto= document.createElement("button");
equalsto.setAttribute("type", "button");
equalsto.setAttribute("class", "btn");
equalsto.setAttribute("id", "equal");
equalsto.setAttribute("value", "=");
equalsto.innerText="="
equalsto.addEventListener("click", () => {
    output.value = eval(output.value); 
});

row5.append(equalsto); 
calculator.append(row5)



document.body.appendChild(calculator);

