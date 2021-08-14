// call from tamana micro service
function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "https://nutrientanalyzer.herokuapp.com/foodfact", true);
    xhttp.send();
}

function myFunction(xml) {
    document.writeln("<iframe src='https://nutrientanalyzer.herokuapp.com/foodfact' height='400' width='100%' scrolling='no' ></iframe>");
}