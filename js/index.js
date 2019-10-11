var arrayLength, arr;
const arrElementWidth = 15;
arrayLength = 42;
arr = [];
$(document).ready(generateArray);
function generateArray(){
    arr = [];
    $('#parent_container').empty();
    for(var itr = 0; itr < arrayLength; itr++){
        arr.push(Math.floor(Math.random() * 400) + 100);
        $('#parent_container').append('<div class="arrElement" style="height:'+arr[itr]+'px; left:'+(itr*arrElementWidth + 10*(itr))+'px"></div>')
    }

}