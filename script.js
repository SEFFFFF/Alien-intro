document.addEventListener("DOMContentLoaded",()=>{

    function hide_text(){
        const text=document.querySelectorAll(".test>div")
        text.forEach((textelement)=>{
            textelement.classList.remove("visible");
        });
    };

});
