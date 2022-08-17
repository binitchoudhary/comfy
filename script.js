function myFunction() {
    var input, filter, listItem, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    listItem = document.querySelectorAll(".list");
    for (i = 0; i < listItem.length; i++) {
        txtValue = listItem[i].innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            listItem[i].style.display = "block";
        } else {
            listItem[i].style.display = "none";
        }
    }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML =  this.value;
}

function mySliderFunction() {
    var slider_price, filter, listItem, i, txtValue;
    var price = document.getElementsByTagName("h6")
    slider_price = output.innerText;
    filter = slider_price.toUpperCase();
    listItem = document.querySelectorAll(".list");
    for (i = 0; i < price.length; i++) {
        txtValue = price[i].innerHTML;
        if (Number(txtValue.split('$')[1]) < Number(slider_price)){
            listItem[i].style.display = "block";
        }else{
            listItem[i].style.display = "none";
        }
    }
}

var full = document.getElementById('all');
full.addEventListener('click', function(){
    listItem = document.querySelectorAll(".list");
    for (i = 0; i < listItem.length; i++) {
        listItem[i].style.display = "block";
    }
});

// var ikea = document.getElementById('ikea');
// ikea.addEventListener('click', function(){
//     // filter = input.value.toUpperCase();
//     console.log(ikea.textContent)

//     listItem = document.querySelectorAll(".list");
//     for (i = 0; i < listItem.length; i++){
//         var paragraph = document.getElementsByTagName("p")
//         txtValue = paragraph[i].innerHTML;
//         var paraContent = txtValue.split(' ')
//         console.log(paraContent[paraContent.length-1])
//         if (paraContent[paraContent.length-1] == 'ikea') {
//             console.log('-----',txtValue.toUpperCase().indexOf('ikea'))
//             listItem[i].style.display = "block";
//         } else {
//             listItem[i].style.display = "none";
//         }
//     }
// })


function Compare(value){
    listItem = document.querySelectorAll(".list");
    for (i = 0; i < listItem.length; i++) {
        txtValue = listItem[i].innerHTML;
        if (txtValue.toUpperCase().indexOf(value.toUpperCase()) > -1) {
            listItem[i].style.display = "block";
        } else {
            listItem[i].style.display = "none";
        }
    }
}
