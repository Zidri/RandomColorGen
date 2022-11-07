function randNum() {
    var min = 0;
    var max = 255;

    //random number with min and max
    var rand = Math.floor(Math.random() * (parseInt(max) - parseInt(min))) + parseInt(min) + 1;
    
    return rand;
}

function generate() {
    //initialise RGB values
    var red = 0;
    var green = 0;
    var blue = 0;

    //get RBG values for color
    red = randNum();
    green = randNum();
    blue = randNum();

    //display color as square
    document.getElementById("color").style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    //display rgb
    document.getElementById("rgb").innerHTML = 'rgb(' + red + ',' + green + ',' + blue + ')';
}