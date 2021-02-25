const output= "Hi!! My name is Shubhankar Sharma and I love to code..💜  "; 
const text=document.getElementById("header");
let index=0;



setInterval( ()=>{
    text.innerText=output.slice(0,index);
    index++;

    if(index>output.length)
        index=0;

}, 100);