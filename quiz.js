const quizForm = document.querySelector("#quiz_container");
const btn = document.querySelector("#button");
const mssg = document.querySelector("#output");
const correctAnswers = ['90deg', 'right angled']; 


btn.addEventListener("click", calculateScore);

function calculateScore() {
  let score = 0;
  let index = 0;
  const data = new FormData(quizForm);

  for(let item of data.values()){
    if(item === correctAnswers[index]){
      score = score + 1;
      mssg.innerHTML = "Your Score is " + score;
    }
    index = index + 1;
  }

  

}
