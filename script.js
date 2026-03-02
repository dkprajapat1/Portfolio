let istrue = true;
let skill = document.querySelector(".short_skills");

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

let skills = [
  "Full-Stack Web Development (MERN)",
  "Data Structures & Algorithms",
  "Backend Development with Node.js",
  "React.js Application Development"
];

let i = 0;
let j = 0;

function typeEffect() {
  if (j < skills[i].length) {
    skill.innerHTML += skills[i][j];
    j++;
    setTimeout(typeEffect, 60);
  } else {
    setTimeout(() => {
      skill.innerHTML = "";
      j = 0;
      i = (i + 1) % skills.length;
      typeEffect();
    }, 500); // pause before next word
  }
}
typeEffect();

function copyEmail() {
  const email = document.getElementById("emailText").innerText;
  navigator.clipboard.writeText(email);

  const btn = document.querySelector(".copy-btn");
  btn.innerText = "Copied!";
  setTimeout(() => {
    btn.innerText = "Copy";
  }, 1500);
}

function copyPhone() {
  const phone = document.getElementById("phoneText").innerText;
  navigator.clipboard.writeText(phone);

  const btn = event.target;
  btn.innerText = "Copied!";
  setTimeout(() => {
    btn.innerText = "Copy";
  }, 1500);
}