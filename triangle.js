const angles = document.querySelectorAll(".angle");
const btn = document.querySelector("#button");
const mssg = document.querySelector("#message")

function clickAction() {
  if(angles[0].value && angles[1].value && angles[2].value){
     const result = checkAngle(Number(angles[0].value),Number(angles[1].value),Number(angles[2].value));
     if (result === 180){
       mssg.innerHTML = "The Angles form a Trianle";
     }
     else {
      mssg.innerHTML = "The Angles Does not form a Triangle";
     }
  }
  else {
    mssg.innerHTML = "Please Enter All the Three Angles";
  }
}

function checkAngle(a,b,c) {
  const sum = a + b + c;
  return sum;
}

btn.addEventListener("click", clickAction);
