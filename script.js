window.addEventListener("keydown",e=>{
    //console.log(e.keyCode);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keys=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return
    audio.currentTime=0;
    audio.play();
    keys.classList.add(`playing`);
   });

   const keys=document.querySelectorAll('.key');
//    console.log(keys);
   function removeTransition(e){
       //console.log(e.propertyName);
       if(e.propertyName!=='transform')return;
       this.classList.remove("playing");
   }
   keys.forEach(key=>{key.addEventListener("transitionend",removeTransition)
   })
    