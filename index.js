/*
1. function to start quiz (hide welcome message and start button), 
(display first question, answer options, score, submit button).

2. Generate first Question, four options, score, submit button

3. function to check if option selected matches answer, if true, 
return positive message and increase score by 1, if false, return negative message,
generate next button to move on to next question

once final quesiton has been answered, give feedback message letting user
know how they did and generate restart quiz button


*/

/* when a user clicks on start quiz button */
function startQuiz() {
  $('.startButton').on('click', function(event){
    $('.start').hide();
    renderAQuestion();
  }
  );
}

/* Displays question number and score  */
function updateQuestionAndScore() {
  const html = $(`<ul>
      <li id="js-answered">Questions Number: ${STORE.currentQuestion + 1}/${STORE.questions.length}</li>
      <li id="js-score">Score: ${STORE.score}/${STORE.questions.length}</li>
    </ul>`);
  $(".question-and-score").html(html);
}

/*displays the question*/
function renderAQuestion() {
  let question = STORE.questions[STORE.currentQuestion];
  updateQuestionAndScore();
  const questionHtml = $(`
  <div>
    <form id="js-questions" class="question-form">
      <fieldset>
            <p> ${question.question}</p>
            <div class="js-options"> </div>
          <button type = "submit" id="answerButton">Submit</button>
    </fieldset>
    </form>
  </div>`);
$("main").html(questionHtml);

updateOptions();
$('#js-questions').submit(e=>{
  e.preventDefault();
  const radioValue = $("input[name='options']:checked"). val();
  console.log("this is radio value", radioValue, "this is the answer",question.answer)
  checkAnswer(radioValue, question.answer)
})
}

function checkAnswer(input, correctAnswer){
  console.log("this is the input", input, "this is the correctAnswer", correctAnswer)
  const correctAnswerResponse=  `<div>
  <p> Correct! GREAT JOB!</p>
  </div>
  <button type = "submit" id="nextButton">Next Question</button>`
  const wrongAnswerResponse= `<div>
  <p> That was not correct, the correct answer is ${correctAnswer}</p>
  </div>
  <button type = "submit" id="nextButton">Next Question</button>`
if (input === correctAnswer){
   const updatedScore=  `Score: ${STORE.score+1}/${STORE.questions.length}`
   $("js-score").html(updatedScore);
   console.log(STORE.score)
  return $("main").html(correctAnswerResponse);
  
 
}else{
  return  $("main").html(wrongAnswerResponse);

}

}
/* Displays the options for the current question */
function updateOptions()
{
  let question = STORE.questions[STORE.currentQuestion];
  for(let i=0; i<question.options.length; i++)
  {
    $('.js-options').append(`
        <input type = "radio" name="options" id="option${i+1}" value= "${question.options[i]}" "> 
        <label for="option${i+1}"> ${question.options[i]}</label> <br/>
    `);
  }
  
}






startQuiz();