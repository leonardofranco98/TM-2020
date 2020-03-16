var global = 1

function adicionar(){

    var n = document.getElementById("nim")
    var url = document.getElementById("url")

    var l = document.getElementById("list")
    var li = document.createElement("li")
    var image =  document.createElement("img")

    url.innerHTML = url.innerHTML.substring(0, url.innerHTML.length - 1)
    url.innerHTML = url.innerHTML + global++

    image.src = url.innerHTML
    li.appendChild(image)
    l.appendChild(li)

    n.innerHTML = "Imagens: " + document.getElementById("list").childElementCount
}

function remover() {

    var li = document.getElementById("list")
    var rand = Math.floor(Math.random() * li.childNodes.length)
    var n = document.getElementById("nim")

    li.removeChild(li.childNodes[rand])

    n.innerHTML = "Imagens: " + document.getElementById("list").childElementCount
}