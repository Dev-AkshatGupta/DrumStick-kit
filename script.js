window.addEventListener("keydown",e=>{
    console.log(e.keyCode);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio)return
    audio.currentTime=0;
    audio.play();
    keys.classList.add(`playing`);
        });
        function removeTransition(e){
            console.log(e);
        }
        const keys=document.querySelectorAll(".key");
        keys.forEach(items=>{items.addEventListener("transitionend",removeTransition)});
    
