// letters
let letter = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ظ ع غ ف ق ك ل م ن و ه ء ي";
let arrLetter = Array.from(letter.split(" "))

// the selector
let obj = {
    "فلم": ["الخليه", "الممر", "مش انا"],
    "ممثل مشهور": ["احمد حلمي", "عادل امام", "محمد رمضان"],
    "يوتيوبر مشهور": ["ابو فله", "اسامه الزيرو", "ابن سوريا"],
    "بلد": ["مصر", "لبنان", "الاردن", "العراق", "السعوديه"],
}

// select ele
let divLatters = document.querySelector(".body .latters");
let divWord = document.querySelector("header .ward-from");

// create div for letters
arrLetter.forEach(letter => {
    let span = document.createElement("div")
    span.className = "letter"
    span.textContent = letter
    divLatters.appendChild(span)
})

// random
let wordFrom = Object.keys(obj)
let fromWordRandom = Math.floor(Math.random() * wordFrom.length)
let word = wordFrom[fromWordRandom]

let valueFomWord = obj[word]
let fromValueRandom = Math.floor(Math.random() * valueFomWord.length)
let value = valueFomWord[fromValueRandom]

divWord.innerHTML += word

let arrWord = Array.from(value)

let resultDiv =  document.querySelector(".result");

arrWord.forEach(ele => {
    let div = document.createElement("div")
    div.className = "box-letter"
    if (ele === " ") {
        div.className = "space"
    }
    resultDiv.appendChild(div)
})

let resultDivs = document.querySelectorAll(".result div")
let hangman = document.querySelector(".hangman")
let result = false
let num = 1
let number = 0;

document.addEventListener("click", (e) => {
    if (e.target.className === "letter") {
        result = false
        e.target.classList.add("cliced")
        arrWord.forEach((ele, ind) => {
            resultDivs.forEach((div, index) => {
                if (e.target.textContent === ele) {
                    if (ind === index) {
                        result = true
                        number++
                        div.textContent = ele
                    }
                }
            })
        })
        if (result != true) {
            hangman.classList.add(`checkd-${num}`)
            num++
        }
        if (num === 9) {
            divLatters.classList.add("end")
            endBad()
        }
        if (arrWord.includes(" ")) {
            if (number+1 === arrWord.length) {
                endGood()
            }
        }else {
            if (number === arrWord.length) {
                endGood()
            }
        }
    }
})

function endBad() {
    let divOver = document.createElement("div") 
    let divText = document.createElement("div")
    divOver.className = "overlay"
    divText.innerHTML = `فشلت التخمين <br/> اسم ${word} <br/> [ ${value} ]`
    divText.className = "bopp"
    divText.classList.add("bad")


    document.body.appendChild(divOver)
    document.body.appendChild(divText)

    let setint = setInterval(() => {
        window.location.reload()
    }, 3000);
}
function endGood() {
    let divOver = document.createElement("div") 
    let divText = document.createElement("div")
    divOver.className = "overlay"
    divText.innerHTML = `نجحت التخمين <br/> اسم ${word} <br/> [ ${value} ]`
    divText.className = "bopp"
    divText.classList.add("good")

    document.body.appendChild(divOver)
    document.body.appendChild(divText)

    let setint = setInterval(() => {
        window.location.reload()
    }, 3000);
}


