window.addEventListener("load", init)
function ID(elem) {
    return document.getElementById(elem)
}
function Class(elem) {
    return document.getElementsByClassName(elem)
}
function $(elem) {
    return document.querySelectorAll(elem)
}
function $1(elem) {
    return document.querySelector(elem)
}
const eredetiKepekSrc = []
const felforditottKepek = []

function init() {
    kepekKirak()
    kepekElrejt()
    kepreKattintas()
}
function kepekKirak() {
    let txt = ''
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 2; j++) {
            txt += `<div><img class="${i + 1}" src = 'kepek/kep${i + 1}.jpg'></div>`
            eredetiKepekSrc.push(`kepek/kep${i + 1}.jpg`)
        }
    }
    $1("article").innerHTML = txt
}
function kepekElrejt() {
    const kepTomb = $("div img")
    kepTomb.forEach(function (kepTombElem) {
        kepTombElem.src = "kepek/hatter.jpg"
    });
}
function kepreKattintas() {
    const kepTomb = $("div img")
    kepTomb.forEach(function (kepTombElem, index) {
        kepTombElem.addEventListener("click", kepMutat)
    });
}
function kepMutat() {
    if (felforditottKepek.length < 2) {
        event.target.src = `kepek/kep${event.target.className}.jpg`
        felforditottKepek.push(event.target.className)
        console.log(felforditottKepek)
    }
    if (felforditottKepek.length === 2) {
        ellenorzes()
        felforditottKepek.splice(0)
    }
}
function ellenorzes() {
    if (felforditottKepek[0] === felforditottKepek[1]) {
        const kepTomb = $("div img")
        kepTomb.forEach(function (elem) {
            if (elem.className === felforditottKepek[0]) {
                elem.style.display = "none"
                elem.removeEventListener("click", kepMutat)
            }
        })
    }
    else {
        setTimeout(function () {
            felforditottKepek.forEach(function (elem) {
                Class(elem).src = `kepek/kep${event.target.className}.jpg`
            })
        }, 1000)
        const kepTomb = $("div img")
        kepTomb.forEach(function (elem,) {
            elem.src = "kepek/hatter.jpg"
        })
    }
} 