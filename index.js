/*
1. function to start quiz (hide welcome message and start button), 
(display first question, answer options, score, submit button).

2. Generate first Question, four options, score, submit button

3. function to check if option selected matches answer, if true, 
return positive message and increase score by 1, if false, return negative message,
generate next button to move on to next question

4. function when id="nextButton">Next Question</button> is clicked to display next question and options in store.

once final quesiton has been answered, give feedback message letting user
know how they did and generate restart quiz button


*/

/* when a user clicks on start quiz button */
function startQuiz() {
  $('.startButton').on('click', function(event){
    $('.start').hide();
    const firstQuestion = STORE.questions[STORE.currentQuestion];
    renderAQuestion(firstQuestion);
    getNextQuestion();
    console.log(getNextQuestion);
  }
  );
}

/* Displays question number and score  */
function updateQuestionAndScore() {
  const html = $(`<ul>
      <li id="js-answered">Question Number: ${STORE.currentQuestion + 1}/${STORE.questions.length}</li>
      <li id="js-score">Score: ${STORE.score}/${STORE.questions.length}</li>
    </ul>`);
  $(".question-and-score").html(html);

}

/*displays the question*/
function renderAQuestion(question) {
  //assigning a variable to current question
  // const question = STORE.questions[STORE.currentQuestion];
  /* Displays question number and score  */
  updateQuestionAndScore();

  //generating HTML with the question
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
  //rendering question into main class in DOM
$("main").html(questionHtml);



/* Displaying the options for the current question */
updateOptions();
$('#js-questions').submit(e=>{
  e.preventDefault();
  const radioValue = $("input[name='options']:checked"). val();
  console.log("this is radio value", radioValue, "this is the answer",question.answer);
  checkAnswer(radioValue, question.answer);
  updateQuestionAndScore();
});
// onSubmit()
}



/* checks to see if */
function checkAnswer(input, correctAnswer){
  console.log("this is the input", input, "this is the correctAnswer", correctAnswer);
  const correctAnswerResponse=  `<div>
  <p> Correct! GREAT JOB!</p>
  </div>
  <button type = "submit" id="nextButton">Next Question</button>`;
  const wrongAnswerResponse= `<div>
  <p> That was not correct, the correct answer is ${correctAnswer}</p>
  </div>
  <button type = "submit" id="nextButton">Next Question</button>`;
if (input === correctAnswer){
  STORE.score++;
   updateQuestionAndScore();
  return $("main").html(correctAnswerResponse);
  
 
}else{
  updateQuestionAndScore();
  return  $("main").html(wrongAnswerResponse);

}
}

function getNextQuestion(){
  $('main').on('click', '#nextButton', function(){
    const nextQuestion= STORE.questions[STORE.currentQuestion +1];
    console.log('line 105', nextQuestion);
    renderAQuestion(nextQuestion);
    console.log('line 106',renderAQuestion(nextQuestion));
  }
  );
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
  console.log('line120', question);
}






startQuiz();