// ******************/ search bar /******************************* 

let search_input = document.getElementById("search_input")
let form_input = document.getElementById("form_input")
let recent_search = document.querySelector(".recent_search")

let recent_array = [
    {
        text : "mobile" , 
        link : "https://www.flipkart.com/search?q=mobile&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&as-pos=1&as-type=HISTORY"
    },
    {
        text : "shoes",
        link : "https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&as-pos=1&as-type=HISTORY"
    }
    ]
form_input.addEventListener("submit", function (e){
    e.preventDefault()
    recent_array.unshift(search_input.value)
    console.log(recent_array)
    uploadRecent()
})

function uploadRecent() {
    let recent_search_html = ''
    recent_array.forEach(el => {
        recent_search_html += `
        <div class="recent-list">
            <p><a href = ${el.link}><i class='bx bx-history'></i><span>${el.text}</span></a></p>
        </div>
        `
    })
    recent_search.innerHTML = recent_search_html;
}
uploadRecent()

// ******************/ imageslider /******************************* 

const imageslider = [
    {
        img : "https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/a1d93b6bc446790d.jpg?q=50",
        link : "https://www.flipkart.com/travel/flights?param=TravelTTravel_FKHP_DT-HPW_Kotak-Monsoon-20off&otracker=hp_bannerads_1_2.bannerAdCard.BANNERADS_ZQ0WKU04QS1Y_QBTU5PP0FQNP"
    },
    {
        img : "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/9ae95e70fc1256f3.jpg?q=50",
        link : "https://www.flipkart.com/nothing-phone-2-pre-order-pass/p/itmd2cd92f84bef2?pid=DGVGQSCGYHJ7WZKV&param=7687567&otracker=hp_bannerads_2_2.bannerAdCard.BANNERADS_a_G9XY4V6QZPWK"
    },
    {
        img : "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/7fd0e4ab26429926.jpg?q=50",
        link : "https://www.flipkart.com/travel/flights?param=Travel_FKHP_DT-HPW_NeverBefore1499&otracker=hp_bannerads_3_2.bannerAdCard.BANNERADS_s_XP0NW8AK6HNR"
    }
]
console.log(imageslider)

let imageslider_list = document.querySelector(".imageslider_list")
let imageslide_list_html = ''

imageslider.forEach(el => {
    console.log(el)
    imageslide_list_html += `
        <div class="imageslider_items">
            <a href="${el.link}"><img src="${el.img}"></a>
        </div>`

})

imageslider_list.innerHTML = imageslide_list_html;

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let start = 0;
let end = -200;

btn1.addEventListener("click",handlebtn1)
btn2.addEventListener("click",handlebtn2)

function handlebtn1(){
    let image_item = document.querySelectorAll(".imageslider_items")
    console.log(image_item)
    if(start<0)
    start += 100
    image_item.forEach(el=>{
        el.style.transform = `translateX(${start}%)`
    })
}
function handlebtn2(){
    let image_item = document.querySelectorAll(".imageslider_items")
    console.log(image_item)
    if(start>end)
    start -= 100
    image_item.forEach(el=>{
        el.style.transform = `translateX(${start}%)`
    })
}
function renderImageSlider(){
    if(start > end){
        handlebtn2()
    }
    else{
        start = 100
    }
}
setInterval(renderImageSlider,2000)

// ********************************************************* item slider button ******************************************************

let present = 0;
let finish = -75;
    
var item = document.getElementById("item")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")

function slide_btn3(){
    item.style.transform = `translateX(${finish}%)`
    btn3.style.display = `none`
    btn4.style.display = `block`
}

function slide_btn4(){
    item.style.transform = `translateX(${present}%)`
    btn4.style.display = `contents`
    btn3.style.display = `block`
}

var item1 = document.getElementById("item1")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")

function slide_btn5(){
    item1.style.transform = `translateX(${finish}%)`
    btn5.style.display = `none`
    btn6.style.display = `block`
}

function slide_btn6(){
    item1.style.transform = `translateX(${present}%)`
    btn6.style.display = `contents`
    btn5.style.display = `block`
}

var item2 = document.getElementById("item2")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")

function slide_btn7(){
    item2.style.transform = `translateX(${finish}%)`
    btn7.style.display = `none`
    btn8.style.display = `block`
}

function slide_btn8(){
    item2.style.transform = `translateX(${present}%)`
    btn8.style.display = `contents`
    btn7.style.display = `block`
}


var item3 = document.getElementById("item3")
let btn9 = document.getElementById("btn9")
let btn10 = document.getElementById("btn10")

function slide_btn9(){
    item3.style.transform = `translateX(${finish}%)`
    btn9.style.display = `none`
    btn10.style.display = `block`
}

function slide_btn10(){
    item3.style.transform = `translateX(${present}%)`
    btn10.style.display = `contents`
    btn9.style.display = `block`
}


var item4 = document.getElementById("item4")
let btn11 = document.getElementById("btn11")
let btn12 = document.getElementById("btn12")

function slide_btn11(){
    item4.style.transform = `translateX(${finish}%)`
    btn11.style.display = `none`
    btn12.style.display = `block`
}

function slide_btn12(){
    item4.style.transform = `translateX(${present}%)`
    btn12.style.display = `contents`
    btn11.style.display = `block`
}

var item5 = document.getElementById("item5")
let btn13 = document.getElementById("btn13")
let btn14 = document.getElementById("btn14")

function slide_btn13(){
    item5.style.transform = `translateX(${finish}%)`
    btn13.style.display = `none`
    btn14.style.display = `block`
}

function slide_btn14(){
    item5.style.transform = `translateX(${present}%)`
    btn14.style.display = `contents`
    btn13.style.display = `block`
}
var item6 = document.getElementById("item6")
let btn15 = document.getElementById("btn15")
let btn16 = document.getElementById("btn16")

function slide_btn15(){
    item6.style.transform = `translateX(${finish}%)`
    btn15.style.display = `none`
    btn16.style.display = `block`
}

function slide_btn16(){
    item6.style.transform = `translateX(${present}%)`
    btn16.style.display = `contents`
    btn15.style.display = `block`
}

var item7 = document.getElementById("item7")
let btn17 = document.getElementById("btn17")
let btn18 = document.getElementById("btn18")

function slide_btn17(){
    item7.style.transform = `translateX(${finish}%)`
    btn17.style.display = `none`
    btn18.style.display = `block`
}

function slide_btn18(){
    item7.style.transform = `translateX(${present}%)`
    btn18.style.display = `contents`
    btn17.style.display = `block`
}

var item8 = document.getElementById("item8")
let btn19 = document.getElementById("btn19")
let btn20 = document.getElementById("btn20")

function slide_btn19(){
    item8.style.transform = `translateX(${finish}%)`
    btn19.style.display = `none`
    btn20.style.display = `block`
}

function slide_btn20(){
    item8.style.transform = `translateX(${present}%)`
    btn20.style.display = `contents`
    btn19.style.display = `block`
}
var item9 = document.getElementById("item9")
let btn21 = document.getElementById("btn21")
let btn22 = document.getElementById("btn22")

function slide_btn21(){
    item9.style.transform = `translateX(${finish}%)`
    btn21.style.display = `none`
    btn22.style.display = `block`
}

function slide_btn22(){
    item9.style.transform = `translateX(${present}%)`
    btn22.style.display = `contents`
    btn21.style.display = `block`
}
var item10 = document.getElementById("item10")
let btn23 = document.getElementById("btn23")
let btn24 = document.getElementById("btn24")

function slide_btn23(){
    item10.style.transform = `translateX(${finish}%)`
    btn23.style.display = `none`
    btn24.style.display = `block`
}

function slide_btn24(){
    item10.style.transform = `translateX(${present}%)`
    btn24.style.display = `contents`
    btn23.style.display = `block`
}
var item11 = document.getElementById("item11")
let btn25 = document.getElementById("btn25")
let btn26 = document.getElementById("btn26")

function slide_btn25(){
    item11.style.transform = `translateX(${finish}%)`
    btn25.style.display = `none`
    btn26.style.display = `block`
}

function slide_btn26(){
    item11.style.transform = `translateX(${present}%)`
    btn26.style.display = `contents`
    btn25.style.display = `block`
}