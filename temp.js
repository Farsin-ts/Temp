const textbox=document.getElementById("text"); 
const faren=document.getElementById("faren");
const celsius=document.getElementById("celsius");
const result=document.getElementById("result");


function convert(){

    if(faren.checked){
        temp=Number(textbox.value);
        temp=temp* 9 / 5 + 32;
        result.textContent=temp.toFixed(1) + "°F"
    }
    else if(celsius.checked){
        temp=Number(textbox.value);
        temp=(temp -32) * (5/9);
        result.textContent=temp.toFixed(1) + "°C"
    }
    else{
        result.textContent="Select a unit";
    }
}