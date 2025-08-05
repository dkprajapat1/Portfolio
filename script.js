let istrue = true;

document.getElementById("hamburger").addEventListener("click", ()=>{
   if(istrue){
     document.querySelector(".whitebox").style.left="0px"
     istrue = false
   }
    else if(!istrue){
        document.querySelector(".whitebox").style.left="-1000px"
        istrue = true;
    }
})

document.getElementById("close").addEventListener("click", ()=>{
   document.querySelector(".whitebox").style.left="-1000px"
})