var buttonNext = document.getElementsByClassName("nextActionButton");
var selects = document.getElementsByClassName("selectpicker");
var checkboxes = document.getElementsByClassName("cbox");
var radios = document.getElementsByClassName("radio_filling");

function showImg(j){
    var checkImg = document.getElementsByClassName("checkedSignal");
    var radioB = document.getElementsByClassName("radioB");
    
    for(var i=0; i<radioB.length; i++){
        if(!radioB[i].checked && checkImg[i].style.visibility == "visible"){
            checkImg[i].style.visibility = "hidden";
        }
        else if(radioB[i].checked){
            checkImg[i].style.visibility = "visible";
            if(buttonNext[j].disabled == true)
                buttonNext[j].disabled = false;
        }
    }
}
function changeImg(){
    var images = document.getElementsByClassName("size_img");

    for(var i=0; i<checkboxes.length; i++){
        if(!checkboxes[i].checked){
            images[i].style.filter = "grayscale(100%)";
        }
        else if(checkboxes[i].checked){
            images[i].style.filter = "grayscale(0)";
        }
    }
}
function enableButton(j){
    for(var i=0; i<checkboxes.length; i++)
        if(checkboxes[i].checked)
            buttonNext[j].disabled = false;
}
function checkRadios(){
    for(var i=0; i<radios.length; i++){
        if(radios[i].checked)
            return true;
    }
    return false;
}
function enableButtonIngredients(){
    var next = document.getElementById('next3');
    var check = checkRadios();
    
    if(check)
        next.disabled = false;
}
function enableButtonFinish(){
    var end = document.getElementById('end');
    var date = document.getElementById('date').value;
    var street = document.getElementById('street').value;
    var radioDelivery = document.getElementById('radio-1');
    var radioSearch = document.getElementById('radio-2');
    var complement = document.getElementById('complement').value;
    
    if(date.localeCompare("") != 0 && radioSearch.checked == true)
        end.disabled = false;
    else if(date.localeCompare("") != 0 && radioDelivery.checked == true && selects[0].value.localeCompare("") != 0 && street.localeCompare("") != 0 && complement.localeCompare("") != 0)
        end.disabled = false;
    else if(date.localeCompare("") != 0 && radioDelivery.checked == true && selects[0].value.localeCompare("") == 0 && street.localeCompare("") == 0 && complement.localeCompare("") == 0)
        end.disabled = true;
}
