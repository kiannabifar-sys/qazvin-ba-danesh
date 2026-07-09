document.addEventListener("DOMContentLoaded", () => {

const places = [
{
name:"کاخ چهلستون",
text:"کاخ چهلستون یکی از آثار ارزشمند دوره صفوی در شهر قزوین است."
},
{
name:"سرای سعدالسلطنه",
text:"بزرگ‌ترین کاروانسرای سرپوشیده ایران."
},
{
name:"قلعه الموت",
text:"قلعه تاریخی حسن صباح در منطقه الموت."
},
{
name:"دریاچه اوان",
text:"یکی از زیباترین دریاچه‌های طبیعی ایران."
}
];

const foods = [
{
name:"قیمه نثار",
text:"معروف‌ترین غذای سنتی قزوین."
},
{
name:"دیماج",
text:"غذای محلی خوشمزه و سنتی قزوین."
},
{
name:"باقلوا",
text:"شیرینی معروف قزوین."
}
];

function createCards(id,data){

const section=document.getElementById(id);

section.innerHTML="<h2 class='title'>"+section.id.replace("-"," ")+"</h2>";

const cards=document.createElement("div");

cards.className="cards";

data.forEach(item=>{

cards.innerHTML+=`

<div class="card">

<h3>${item.name}</h3>

<p>${item.text}</p>

</div>

`;

});

section.appendChild(cards);

}

createCards("places",places);

createCards("foods",foods);

});

document.querySelectorAll(".gallery img").forEach(img=>{
img.onclick=()=>{
const bg=document.createElement("div");
bg.style.position="fixed";
bg.style.top="0";
bg.style.left="0";
bg.style.width="100%";
bg.style.height="100%";
bg.style.background="rgba(0,0,0,.85)";
bg.style.display="flex";
bg.style.alignItems="center";
bg.style.justifyContent="center";
bg.style.zIndex="9999";

const big=document.createElement("img");
big.src=img.src;
big.style.maxWidth="90%";
big.style.maxHeight="90%";
big.style.borderRadius="15px";

bg.appendChild(big);

bg.onclick=()=>bg.remove();

document.body.appendChild(bg);
};
});
