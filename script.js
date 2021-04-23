document.getElementById("main").style.backgroundColor = "rgba(0, 0, 0, 0.9)"

var mudar = document.getElementById("mudarDark");
var cor = 1;

$("#mudarDark").click(function(){
    if (cor == 0) {
        document.getElementById("main").style.backgroundColor = "rgba(0, 0, 0, 0.9)"
        cor = 1
    } else if (cor == 1){
        document.getElementById("main").style.backgroundColor = "rgba(255, 255, 255, 0.664)"
        cor = 0;
    }

    console.log(cor)
    
});