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
