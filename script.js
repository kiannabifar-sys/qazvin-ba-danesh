document.addEventListener("DOMContentLoaded", function(){

    const darkBtn = document.getElementById("darkBtn");

    if(darkBtn){

        darkBtn.onclick = function(){
            document.body.classList.toggle("dark");
        };

    }

});
