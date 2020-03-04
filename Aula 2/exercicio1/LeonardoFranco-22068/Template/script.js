function ler(){
    var input = document.getElementById("input").value
    if(input.length == 0){
        alert("no input")
    }
    document.getElementById("result").innerHTML = input
}