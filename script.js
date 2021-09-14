document.addEventListener("DOMContentLoaded",()=>{
    const crew=[1, 2, 3, 4, 5, 6, 7, 8, 9];
    const alien=[1, 2, 3, 4, 5];

    let crew_index=0;
    let alien_index=0;

    const play_button=document.querySelector(".play");
    const stop_button=document.querySelector(".stop");
    const menu=document.querySelector(".menu");
    const music=new Audio("opcred.mp3");



    /*FUNCTION THAT HIDES ALL TEXT*/
    function hide_text(){
        const text=document.querySelectorAll(".test>div")
        text.forEach((textelement)=>{
            textelement.classList.remove("visible"); 
        });
    };


   
    /*FUNCTION THAT LOOPS THROUGH CAST LIST*/
    function show_text(){
        hide_text();
        crew_index++;
        setTimeout(hide_text, 3000);
        if(crew.length>=crew_index){            
            const member=document.querySelector(".test>div[data-order='"+crew_index+"']");
            member.classList.add("visible");
            setTimeout(show_text, 5500);
        } 
        else {
            stop_button.click();
        }
    }



    /*FUNCTION THAT LOOPS THROUGH TITLE CARD LETTERS*/
    function title_card(){ 
        hide_text();
        alien_index++;
        if(alien.length>=alien_index){            
            const title=document.querySelector(".test>.text>div[data-order='"+alien_index+"']");
            title.classList.add("visible2");
            setTimeout(title_card, 7000); 
        } 
    }



    /*PLAY AND STOP BUTTON*/
    play_button.addEventListener("click",()=>{
        menu.classList.add("hide");
        music.play();
        setTimeout(show_text, 4500);
        setTimeout(title_card, 14000);       
    });

    stop_button.addEventListener("click",()=>{
        menu.classList.remove("hide");
        music.pause();
        music.currentTime = 0;    
        crew_index=0;
        alien_index=0;
   });

    hide_text();
    
});