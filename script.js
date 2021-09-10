document.addEventListener("DOMContentLoaded",()=>{
    const crew=[1, 2, 3, 4, 5, 6, 7, 8, 9];
    const alien=[1, 2, 3, 4, 5];

    let crew_index=0;
    let alien_index=0;

    /*FUNCTION TO HIDE ALL TEXT*/
    function hide_text(){
        const text=document.querySelectorAll(".test>div")
        text.forEach((textelement)=>{
            textelement.classList.remove("visible"); 
        });
    };
   
    /*FUNCTION TO LOOP THROUGH CAST LIST*/
    function show_text(){
        hide_text();
        crew_index++;
        setTimeout(hide_text, 3000);
        if(crew.length>=crew_index){            
            const member=document.querySelector(".test>div[data-order='"+crew_index+"']");
            member.classList.add("visible");
            setTimeout(show_text, 5500);
        } 
    }

    /*FUNCTION TO LOOP THROUGH TITLE CARD LETTERS*/
    function title_card(){ 
        hide_text();
        alien_index++;
        if(alien.length>=alien_index){            
            const title=document.querySelector(".test>.text>div[data-order='"+alien_index+"']");
            title.classList.add("visible2");
            setTimeout(title_card, 7000); 
        } 
    }

    hide_text();
    setTimeout(show_text, 4500);
    setTimeout(title_card, 14000);
});