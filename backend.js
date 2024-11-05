let displayValue="";

function appendToDisplay(value){
    displayValue+=value;
    document.getElementById("display").value=displayValue;
}

function ClearDisplay(){
    displayValue="";
    document.getElementById("display").value=displayValue;
}

function calculate(){
    try {
        let result=Function('"use strict";return('+ displayValue +')') ();
        displayValue=result;
        document.getElementById("display").value=displayValue;
    }
    catch(error){
        displayValue="Error";
        document.getElementById("display").value=displayValue;

    }
}