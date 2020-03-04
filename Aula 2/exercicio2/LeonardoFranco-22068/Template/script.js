var arraydeints = []

function adicionar(){

    arraydeints.push(document.getElementById("input").value)

    document.getElementById("adicionados").innerHTML = "Adicionados: "

    for(var i = 0; i < arraydeints.length; i++){
        document.getElementById("adicionados").innerHTML = document.getElementById("adicionados").innerHTML.concat(arraydeints[i]).concat(" ")
    }
    document.getElementById("input").value = ""
}

function somar(){

    if(arraydeints.length > 4){
        document.getElementById("maior").innerHTML = "Maior número: " + Math.max.apply(Math, arraydeints)
    }
    else{
        alert("introduzir 5 numeros antes de obter o maior")
    }
}