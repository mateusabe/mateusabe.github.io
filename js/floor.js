var checkboxes = document.getElementsByClassName('cbox');
var options = document.getElementById("floor_select");

function toRadio(index) {
    for(var i=0; i<checkboxes.length; i++) {
        if(!checkboxes[i].checked && i == index)
            break;
        else if(!checkboxes[i].checked && i != index)
            checkboxes[index].checked = false;
    }
}

function toRadioFloor(index) {
    if(index == 0){
        options.options[1].disabled = false;
        if(!options.options[2].disabled)
            options.options[2].disabled = true;
        if(!options.options[3].disabled)
            options.options[3].disabled = true;
    }
    else if(index == 1){
        options.options[2].disabled = false;
        if(!options.options[3].disabled)
            options.options[3].disabled = true;
        if(options.options[2].disabled)
            options.options[2].disabled = false;
        if(options.options[1].disabled)
            options.options[1].disabled = false;
    }
    else if(index >= 2){
        options.options[3].disabled = false;
        if(options.options[2].disabled)
            options.options[2].disabled = false;
        if(options.options[1].disabled)
            options.options[1].disabled = false;
    }    
}