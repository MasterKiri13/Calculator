// reference the button to variables
var Boton1 = document.getElementById('button-1');
var Boton2 = document.getElementById('button-2');
var Boton3 = document.getElementById('button-3');
var Boton4 = document.getElementById('button-4');
var Boton5 = document.getElementById('button-5');
var Boton6 = document.getElementById('button-6');
var Boton7 = document.getElementById('button-7');
var Boton8 = document.getElementById('button-8');
var Boton9 = document.getElementById('button-9');
var Boton0 = document.getElementById('button-0');
var mult = document.getElementById('button-mult');
var add = document.getElementById('button-add');
var rest = document.getElementById('button-rest');
var div = document.getElementById('button-div');
var dot = document.getElementById('button-dot');
var equal = document.getElementById('button-eq');
var Clear = document.getElementById('Clear');
var input = document.getElementById('input');

var operation = '';

var value = [];
var equals = 0;

/*
96        | Numpad 0
97        | Numpad 1
98        | Numpad 2
99        | Numpad 3
100       | Numpad 4
101       | Numpad 5
102       | Numpad 6
103       | Numpad 7
104       | Numpad 8
105       | Numpad 9
106       | Multiply
107       | Add
108       | Keypad Enter
109       | Subtract
110       | Decimal Point
111       | Divide
*/ 

// add Event Listeners to Clear
Clear.addEventListener('mousedown', (e) => {
    Clear.style.backgroundColor = '#DAD9D6';
});

Clear.addEventListener('mouseup', (e) => {
    input.value = '';
    equals = 0;
    Clear.style.backgroundColor = '#fff';
});

// Event to Buttons
Boton1.addEventListener('mousedown', (e) => {
    if(equals == 1) input.value = ''; equals = 0;
    input.value = input.value + '1'; 
    Boton1.style.backgroundColor = '#DAD9D6';
});

Boton1.addEventListener('mouseup', (e) => {
    Boton1.style.backgroundColor = '#fff';
});

Boton2.addEventListener('mousedown', (e) => {
    if(equals == 1) input.value = ''; equals = 0;
    input.value = input.value + '2'; 
    Boton2.style.backgroundColor = '#DAD9D6';
});

Boton2.addEventListener('mouseup', (e) => { 
    Boton2.style.backgroundColor = '#fff';
});

Boton3.addEventListener('mousedown', (e) => {
    if(equals == 1) input.value = ''; equals = 0;
    input.value = input.value + '3'; 
    Boton3.style.backgroundColor = '#DAD9D6';
});

Boton3.addEventListener('mouseup', (e) => { 
    Boton3.style.backgroundColor = '#fff';
});

Boton4.addEventListener('mousedown', (e) => {
    if(equals == 1) input.value = ''; equals = 0;
    input.value = input.value + '4'; 
    Boton4.style.backgroundColor = '#DAD9D6';
});

Boton4.addEventListener('mouseup', (e) => { 
    Boton4.style.backgroundColor = '#fff';
});

Boton5.addEventListener('mousedown', (e) => {
    if(equals == 1) input.value = ''; equals = 0;
    input.value = input.value + '5'; 
    Boton5.style.backgroundColor = '#DAD9D6';
});

Boton5.addEventListener('mouseup', (e) => { 
    Boton5.style.backgroundColor = '#fff';
});

Boton6.addEventListener('mousedown', (e) => {
    if(equals == 1) input.value = ''; equals = 0;
    input.value = input.value + '6'; 
    Boton6.style.backgroundColor = '#DAD9D6';
});

Boton6.addEventListener('mouseup', (e) => { 
    Boton6.style.backgroundColor = '#fff';
});

Boton7.addEventListener('mousedown', (e) => {
    if(equals == 1) input.value = ''; equals = 0;
    input.value = input.value + '7'; 
    Boton7.style.backgroundColor = '#DAD9D6';
});

Boton7.addEventListener('mouseup', (e) => { 
    Boton7.style.backgroundColor = '#fff';
});

Boton8.addEventListener('mousedown', (e) => {
    if(equals == 1) input.value = ''; equals = 0;
    input.value = input.value + '8'; 
    Boton8.style.backgroundColor = '#DAD9D6';
});

Boton8.addEventListener('mouseup', (e) => { 
    Boton8.style.backgroundColor = '#fff';
});

Boton9.addEventListener('mousedown', (e) => {
    if(equals == 1) input.value = ''; equals = 0;
    input.value = input.value + '9'; 
    Boton9.style.backgroundColor = '#DAD9D6';
});

Boton9.addEventListener('mouseup', (e) => { 
    Boton9.style.backgroundColor = '#fff';
});

Boton0.addEventListener('mousedown', (e) => {
    if(equals == 1) input.value = ''; equals = 0;
    input.value = input.value + '0'; 
    Boton0.style.backgroundColor = '#DAD9D6';
});

Boton0.addEventListener('mouseup', (e) => { 
    Boton0.style.backgroundColor = '#fff';
});

mult.addEventListener('mousedown', (e) => {
    input.value = input.value + '*'; 
    operation = 'mult';
    mult.style.backgroundColor = '#DAD9D6';
});

mult.addEventListener('mouseup', (e) => { 
    mult.style.backgroundColor = '#fff';
});

add.addEventListener('mousedown', (e) => {
    input.value = input.value + '+'; 
    operation = 'add';
    add.style.backgroundColor = '#DAD9D6';
});

add.addEventListener('mouseup', (e) => { 
    add.style.backgroundColor = '#fff';
});

rest.addEventListener('mousedown', (e) => {
    input.value = input.value + '-'; 
    operation = 'rest';
    rest.style.backgroundColor = '#DAD9D6';
});

rest.addEventListener('mouseup', (e) => { 
    rest.style.backgroundColor = '#fff';
});

div.addEventListener('mousedown', (e) => {
    input.value = input.value + '/'; 
    operation = 'div';
    div.style.backgroundColor = '#DAD9D6';
});

div.addEventListener('mouseup', (e) => { 
    div.style.backgroundColor = '#fff';
});

dot.addEventListener('mousedown', (e) => {
    if(equals == 1) input.value = '';
    input.value = input.value + '.'; 
    dot.style.backgroundColor = '#DAD9D6';
});

dot.addEventListener('mouseup', (e) => { 
    dot.style.backgroundColor = '#fff';
});

equal.addEventListener('mousedown', (e) => {
    var inputVal = input.value;
    if(operation == 'add'){
        value = inputVal.split('+');
        input.value = parseInt(value[0]) + parseInt(value[1]);
    }else if(operation == 'rest'){
        value = inputVal.split('-');
        input.value = parseInt(value[0]) - parseInt(value[1]);
    }else if(operation == 'div'){
        value = inputVal.split('/');
        input.value = parseInt(value[0]) / parseInt(value[1]);
    }else if(operation == 'mult'){
        value = inputVal.split('*');
        input.value = parseInt(value[0]) * parseInt(value[1]);
    }
    equal.style.backgroundColor = '#DAD9D6';

    equals = 1;
});

equal.addEventListener('mouseup', (e) => { 
    equal.style.backgroundColor = '#fff';
});
