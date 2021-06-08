const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".ul-list"); 
const typing = document.querySelector (".typing");
let display = ["FRONT END WEB DEVELOPER" ,"VISUAL/GRAPHICS DESIGNER", 'CURATOR...' ];
let word = "";
let single = "";
let counter = 0;
let wordIndex = 0

hamburger.addEventListener ("click" , function(){
    ul.classList.toggle ("slide");
});

hamburger.addEventListener ("click" , function(){
    hamburger.classList.toggle ("turn");
});



(function animation (){

    if (counter=== display.length){
        counter = 0;
    }
    
    word = display[counter];
    single = word.slice(0, ++wordIndex);
    typing.textContent = single;
    
    if (single.length===word.length){
        counter++;
        wordIndex = 0;
    }

    setTimeout (animation ,100);
}());




function scrollAppeara(){

    var selecta = document.querySelector(".ear");
    var positiona = selecta.getBoundingClientRect().top;
    var positionwidtha = window.innerHeight/1.4;

        if (positiona < positionwidtha){
            selecta.classList.add("scrolla");
    }
}

window.addEventListener( "scroll" , scrollAppeara);


function scrollAppearb(){

    var selectb = document.querySelector(".easy");
    var positionb = selectb.getBoundingClientRect().top;
    var positionwidthb = window.innerHeight/1.4;

        if (positionb < positionwidthb){
            selectb.classList.add("scrollb");
    }
}

window.addEventListener( "scroll" , scrollAppearb);



function scrollAppearc(){

    var selectc = document.querySelector(".count");
    var positionc = selectc.getBoundingClientRect().top;
    var positionwidthc = window.innerHeight/1.4;

        if (positionc < positionwidthc){
            selectc.classList.add("scrollc");
    }
}

window.addEventListener( "scroll" , scrollAppearc);





gsap.from(".conjuct", {duration:3 , x:1000 , opacity:0 , delay:5 ,onComplete: tweenComplete});

gsap.from(".create", {duration: 2, y:1000 , opacity:0 , delay:5});

gsap.from(".main", {duration:2 , y:-1000 , opacity:0 , stagger:0.6, delay:5});

gsap.from(".myprojects", {duration:2, opacity:0 , stagger:0.6 , delay:5});

gsap.from(".images", {duration:2, opacity:0 , stagger:0.6 , delay:5});

gsap.fromTo(".plea", {opacity:0 , stagger:0.6, y:200},
{duration:4, opacity:1 , y:0 ,onComplete: tweenLoad});


function tweenComplete() {
  document.querySelector(".myprojects").style.opacity="1"
}

document.querySelector(".ggmu").style.display= "none";

function tweenLoad() {
    document.querySelector(".ggmu").style.display= "block";
    document.querySelector(".plea").style.display= "none";
  }





