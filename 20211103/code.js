// Harj. a
var cont = document.querySelector("#content")
console.log(cont.nodeName)

// Harj. b
var firstBasic = document.querySelector(".basic")
console.log(firstBasic.nodeName)

// Harj. c
var allItems = document.querySelectorAll("li")

for(i of allItems){
    console.log(i.textContent)
}

// Harj. d
var body = document.querySelector("body")
var allNodes = body.querySelectorAll("*")

for(x of allNodes){
    console.log(x.nodeName)
}

// Harj. e
var article = document.querySelector("article")

for(i of article.querySelectorAll("p")){
    console.log("**" + i.textContent)
}

// Harj. f
for(i of allItems){
    i.textContent = "John Doe"
}

// Harj. g

