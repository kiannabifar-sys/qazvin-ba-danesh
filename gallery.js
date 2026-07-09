const gallery = [

{
title:"کاخ چهلستون",
image:"images/chehelsotoun.jpg"
},

{
title:"سرای سعدالسلطنه",
image:"images/saadolsaltaneh.jpg"
},

{
title:"قلعه الموت",
image:"images/alamut.jpg"
},

{
title:"دریاچه اوان",
image:"images/ovan.jpg"
},

{
title:"مسجد جامع قزوین",
image:"images/masjed.jpg"
},

{
title:"باغستان سنتی",
image:"images/baghestan.jpg"
},

{
title:"قیمه نثار",
image:"images/gheymeh-nesar.jpg"
},

{
title:"دیماج",
image:"images/dimaj.jpg"
}

];

function loadGallery(){

const gallerySection=document.getElementById("gallery");

if(!gallerySection) return;

gallerySection.innerHTML="<h2 class='title'>گالری تصاویر</h2>";

const cards=document.createElement("div");

cards.className="cards";

gallery.forEach(item=>{

cards.innerHTML+=`

<div class="card">

<img src="${item.image}" alt="${item.title}" style="width:100%;height:220px;object-fit:cover;border-radius:12px;">

<h3 style="margin-top:15px;">${item.title}</h3>

</div>

`;

});

gallerySection.appendChild(cards);

}

document.addEventListener("DOMContentLoaded",loadGallery);
