function info() {

    var p = document.getElementById("p1")
    p.innerHTML = "ID: " + document.getElementById("link").getAttribute("id")
    p = document.getElementById("p2")
    p.innerHTML = "href: " + document.getElementById("link").getAttribute("href")
    p = document.getElementById("p3")
    p.innerHTML = "target: " + document.getElementById("link").getAttribute("target")
    p = document.getElementById("p4")
    p.innerHTML = "type: " + document.getElementById("link").getAttribute("type")
}

function red(){

    var tt = document.getElementsByClassName("title")

    for(let t of tt){
        t.style.color = "red"
    }
}

function tabela(clicked){

    var p = prompt("Introduza o novo valor")

    var v = document.getElementById(clicked)
    v.innerHTML = p
    v.style.background =  "#99e599"
}