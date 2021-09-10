document.addEventListener("DOMContentLoaded",()=>{
    const crew=[1, 2, 3, 4, 5, 6, 7, 8];
    let crew_index=0;

    function hide_text(){
        const text=document.querySelectorAll(".test>div")
        text.forEach((textelement)=>{
            textelement.classList.remove("visible");
            
        });
    };
   
    function show_text(){
        hide_text();
        crew_index++;
        setTimeout(hide_text, 4000);
        if(crew.length>=crew_index){            
            const member=document.querySelector(".test>div[data-order='"+crew_index+"']");
            member.classList.add("visible");
            setTimeout(show_text, 6000);
        } else {
            stop_button.click();
        }
    }

    show_text();
});