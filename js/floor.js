var checkboxes = document.getElementsByClassName('cbox');
var options = document.getElementById("floor_select");

function toRadio(index) {
    if(options.disabled == true)
        options.disabled = false;
    for(var i=0; i<checkboxes.length; i++) {
        if(!checkboxes[i].checked && i == index)
            break;
        else if(!checkboxes[i].checked && i != index)
            checkboxes[index].checked = false;
    }
}

function toRadioFloor(index) {
    if(index == 0){
        if(options.length == 4)
            remSel(3);
        if(options.length == 3)
            remSel(2);
    }
    else if(index == 1){
        if(options.length == 4)
            remSel(3);
        if(options.length < 2)
            addSel(1);
        if(options.length < 3)
            addSel(2);
    }
    else if(index >= 2){
        if(options.length < 2)
            addSel(1);
        if(options.length < 3)
            addSel(2);
        if(options.length < 4)
            addSel(3);
    }    
}

function remSel(index){
 $("#floor_select option[value='" + index + "']").remove();
}

function addSel(index){
    var fill;
    if(index==2)
        fill = "2 andares";
    else fill = "3 andares";
    $("#floor_select").append('<option value="' + index + '">' + fill + '</option>');
}