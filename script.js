/* =====================================
        Loading Screen
===================================== */


window.addEventListener("load",()=>{


    const loading=document.querySelector(".loading");


    if(loading){


        setTimeout(()=>{


            loading.style.display="none";


        },3000);


    }


});





/* =====================================
        Password System
===================================== */


const enterBtn=document.getElementById("enterBtn");


if(enterBtn){



enterBtn.addEventListener("click",()=>{



    const password=
    document.getElementById("password").value;



    const error=
    document.getElementById("error");



    if(password==="13/3/2003"){



        document.body.style.opacity="0";



        setTimeout(()=>{


            window.location.href="home.html";


        },700);



    }



    else{


        error.innerHTML=
        "كلمة المرور غير صحيحة 🤍";


        error.style.color="#ffb3c1";



    }



});



}







/* =====================================
        Flying Hearts
===================================== */



const hearts=
document.querySelector(".hearts");



function createHeart(){



if(!hearts) return;



const heart=
document.createElement("div");



heart.className="heart";



heart.innerHTML="🤍";



heart.style.left=
Math.random()*100+"%";



heart.style.fontSize=
(Math.random()*25+15)+"px";



heart.style.animationDuration=
(Math.random()*6+5)+"s";



hearts.appendChild(heart);



setTimeout(()=>{


heart.remove();



},10000);



}




setInterval(createHeart,500);







/* =====================================
        Gift Opening
===================================== */



const gift=
document.getElementById("gift");



const hiddenMessage=
document.getElementById("hiddenMessage");



if(gift){



gift.addEventListener("click",()=>{



    hiddenMessage.style.display="block";



    gift.innerHTML="💖";



    gift.style.animation="none";



    createCelebration();



});



}







/* =====================================
        Celebration Hearts
===================================== */



function createCelebration(){



for(let i=0;i<30;i++){



const heart=
document.createElement("div");



heart.innerHTML="❤️";



heart.style.position="fixed";


heart.style.left=
"50%";


heart.style.top=
"50%";


heart.style.fontSize=
"25px";


heart.style.zIndex="9999";



document.body.appendChild(heart);




const x=
(Math.random()-0.5)*500;



const y=
(Math.random()-0.5)*500;



heart.animate([


{


transform:"translate(0,0)",

opacity:1

},


{


transform:`translate(${x}px,${y}px)`,

opacity:0

}


],{


duration:1500,


easing:"ease-out"


});



setTimeout(()=>{


heart.remove();



},1500);



}



}
/* =====================================
        Birthday Counter
===================================== */


const birthDate = new Date(
    "2003-03-13T00:00:00"
);



function updateCounter(){


    const now = new Date();



    const difference =
    now - birthDate;



    if(difference < 0) return;



    const seconds =
    Math.floor(difference / 1000);



    const minutes =
    Math.floor(seconds / 60);



    const hours =
    Math.floor(minutes / 60);



    const days =
    Math.floor(hours / 24);



    const years =
    Math.floor(days / 365.25);



    const months =
    Math.floor((days % 365.25) / 30.44);



    const remainingDays =
    Math.floor(
    (days % 365.25) % 30.44
    );



    const remainingHours =
    hours % 24;



    const remainingMinutes =
    minutes % 60;



    const remainingSeconds =
    seconds % 60;




    const elements={



        years,
        months,
        days:remainingDays,
        hours:remainingHours,
        minutes:remainingMinutes,
        seconds:remainingSeconds



    };





    Object.keys(elements).forEach(key=>{



        const element=
        document.getElementById(key);



        if(element){



            element.innerHTML=
            elements[key];



        }



    });



}





setInterval(updateCounter,1000);



updateCounter();








/* =====================================
        Scroll Reveal Animation
===================================== */



const revealElements =
document.querySelectorAll(
".message-card, .gallery-container img, .counter-box"
);



const revealObserver =
new IntersectionObserver((entries)=>{



entries.forEach(entry=>{


    if(entry.isIntersecting){



        entry.target.classList.add(
            "show"
        );



    }



});



},{

threshold:.15

});





revealElements.forEach(element=>{


    element.classList.add("hidden");


    revealObserver.observe(element);



});









/* =====================================
        Typing Effect
===================================== */



const heroText =
document.querySelector(".hero p");



if(heroText){



const text =
heroText.innerHTML;



heroText.innerHTML="";



let index=0;



function typing(){



if(index < text.length){



heroText.innerHTML +=
text.charAt(index);



index++;



setTimeout(
typing,
60
);



}



}



typing();



}
/* =====================================
        Dynamic Messages
===================================== */


const messages = [

"تذكر دائماً أنك شخص مميز وتستحق كل الأشياء الجميلة 🤍",

"حتى الأيام الصعبة تنتهي، ودائماً يوجد أمل جديد 🌹",

"ابتسامتك قد تكون سبباً في جعل يوم شخص آخر أجمل ✨",

"لا تقلل أبداً من قيمة نفسك، فأنت لديك الكثير لتقدمه ❤️",

"استمر في طريقك، فكل خطوة صغيرة تقربك من أحلامك 🌟"

];



const messageCards =
document.querySelectorAll(".message-card p");



if(messageCards.length){


messageCards.forEach((card,index)=>{


card.innerHTML =
messages[index % messages.length];


});


}







/* =====================================
        Time Greeting
===================================== */


const greeting =
document.querySelector(".hero h1");



if(greeting){



const hour =
new Date().getHours();



if(hour >=5 && hour <12){


greeting.innerHTML =
"صباح الخير 🤍<br>أتمنى أن يكون يومك جميلاً";


}



else if(hour >=12 && hour <18){


greeting.innerHTML =
"مساء الخير 🌸<br>أتمنى لك يوماً مليئاً بالسعادة";


}



else{


greeting.innerHTML =
"مساء هادئ وجميل 🌙<br>أتمنى لك راحة وسعادة";


}



}







/* =====================================
        Back To Top Button
===================================== */


const topButton =
document.createElement("button");



topButton.innerHTML =
"↑";



topButton.className =
"top-button";



document.body.appendChild(topButton);





window.addEventListener("scroll",()=>{



if(window.scrollY > 500){


topButton.classList.add("active");


}

else{


topButton.classList.remove("active");


}



});




topButton.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});







/* =====================================
        Heart Click Effect
===================================== */


document.addEventListener("click",(e)=>{



const heart =
document.createElement("span");



heart.innerHTML =
"🤍";



heart.className =
"click-heart";



heart.style.left =
e.clientX+"px";



heart.style.top =
e.clientY+"px";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();



},1000);



});







/* =====================================
        Smooth Navbar Links
===================================== */


document.querySelectorAll(".navbar li")
.forEach(item=>{



item.addEventListener("click",()=>{


window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});


});



});
/* =====================================
        Floating Particles
===================================== */


const particles =
document.querySelector(".particles");



function createParticle(){


    if(!particles) return;


    const particle =
    document.createElement("span");


    particle.className =
    "particle";


    particle.style.left =
    Math.random()*100+"vw";


    particle.style.animationDuration =
    (5 + Math.random()*8)+"s";


    particle.style.width =
    particle.style.height =
    (3 + Math.random()*8)+"px";


    particles.appendChild(particle);



    setTimeout(()=>{

        particle.remove();

    },13000);



}



setInterval(createParticle,300);







/* =====================================
        Night Mode Effect
===================================== */


const hour =
new Date().getHours();



if(hour >= 19 || hour < 6){



document.body.classList.add(
"night"
);



}







/* =====================================
        Music Button
===================================== */


const music =
document.createElement("audio");



music.src =
"music/song.mp3";



music.loop=true;



const musicButton =
document.createElement("button");



musicButton.innerHTML =
"🎵";



musicButton.className =
"music-button";



document.body.appendChild(musicButton);



let playing=false;



musicButton.addEventListener("click",()=>{



if(!playing){


music.play();


musicButton.innerHTML="⏸️";


playing=true;



}

else{


music.pause();


musicButton.innerHTML="🎵";


playing=false;



}



});







/* =====================================
        Password Enter Key
===================================== */



const passInput =
document.getElementById("password");



if(passInput){



passInput.addEventListener(
"keydown",
(e)=>{


if(e.key==="Enter"){


document.getElementById(
"enterBtn"
).click();



}



});



}







/* =====================================
        Gift Confetti
===================================== */



function confetti(){



for(let i=0;i<60;i++){



const piece =
document.createElement("div");



piece.className =
"confetti";



piece.style.left =
"50%";



piece.style.top =
"50%";



piece.style.background =
[
"#ff003c",
"#ffd166",
"#ffffff",
"#ff758f"
]
[Math.floor(Math.random()*4)];



document.body.appendChild(piece);



const x =
(Math.random()-0.5)*700;



const y =
(Math.random()-0.5)*700;



piece.animate([



{

transform:"translate(0,0) rotate(0)",

opacity:1

},



{

transform:
`translate(${x}px,${y}px) rotate(720deg)`,

opacity:0

}



],{


duration:2000,

easing:"ease-out"


});



setTimeout(()=>{


piece.remove();


},2000);



}



}




if(gift){


gift.addEventListener("click",()=>{


confetti();



});


}