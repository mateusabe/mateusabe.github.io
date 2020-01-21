var divs = document.getElementById('Entrega');

function hideDiv(name){
    if(name.localeCompare("delivery") == 0){
        divs.style.display = "block";
    }
    else{
        divs.style.display = "none";
    }
}