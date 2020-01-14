var checkboxes = document.getElementsByClassName('cbox');
var radiosFloor = document.getElementsByClassName('floor');

function toRadio(index) {
    for(var i=0; i<checkboxes.length; i++) {
        if(!checkboxes[i].checked && i == index)
            break;
        else if(!checkboxes[i].checked && i != index)
            checkboxes[index].checked = false;
    }
}

function showFloors(){
    var select = document.getElementById('floor_select').value;
    
    if(select == 1){
        firstOption();
    }
    else if(select == 2)
        secondOption();
    else if(select == 3)
        thirdOption();
}

function firstOption(){
    radiosFloor[1].style.display = "none";
    radiosFloor[2].style.display = "none";
}
function secondOption(){
    radiosFloor[1].style.display = "inline-block";
    radiosFloor[2].style.display = "none";
}
function thirdOption(){
    radiosFloor[1].style.display = "inline-block";
    radiosFloor[2].style.display = "inline-block";
}