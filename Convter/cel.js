
let btn = document.getElementById('btn');
let cel = document.getElementById('cel');
let farh = document.getElementById('farh');


// celsius to farhrenheit
btn.addEventListener('click' , () =>{

       c = cel.value
       f = (c - 32) * 9/5;
       farh.value = f ;
});

// farhrenheit to celsius
btn.addEventListener('click' , () =>{

    f = farh.value
    c = (f * 9/5) + 32;
    cel.value = c ;
});
