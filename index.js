/*
 function to start quiz (hide welcome message and start button), 
(display first question, answer options, score, submit button).

 Generate first Question, four options, score, submit button

 function to check if option selected matches answer, if true, 
return positive message and increase score by 1, if false, return negative message,
generate next button to move on to next question

(still need to do) once final quesiton has been answered, create button to see results, when results button has been clicked, give feedback message letting user
know how they did and generate restart quiz button


*/



//created variable to run shuffle function that shuffles the questions array inside store
const shuffledQuestions= shuffle(STORE.questions)
// assign the first question after it's been suffled to firstQuestion variable, and then renders that first question
//when user starts quiz.
const firstQuestion = shuffledQuestions[0];

/* when a user clicks on start quiz button */
function startQuiz() {
  $('.startButton').on('click', function(event){
    $('.start').hide();
    renderAQuestion(firstQuestion);
    getNextQuestion();
  }
  );
}

/* Displays question number and score  */
function questionAndScoreStatus() {
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

  questionAndScoreStatus();
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
  updateOptions();
//when submited, looked at checked value and then compare to answer
  $('#js-questions').submit(e=>{
    e.preventDefault();
    const radioValue = $("input[name='options']:checked").val();
    checkAnswer(radioValue, question);
    if (STORE.currentQuestion === STORE.questions.length){
      $('#nextButton').text('See Results');
    }
});
// onSubmit()
}

/* function to display the options for the current question */
function updateOptions()
  {
    let question = STORE.questions[STORE.currentQuestion];
    for(let i=0; i<question.options.length; i++)
    {
      $('.js-options').append(`
          <input type = "radio" name="options" id="option${i+1}" value= "${question.options[i]}" required "> 
          <label for="option${i+1}"> ${question.options[i]}</label> <br/>`
        );
    }
  }


/* checks to see if option selected matches correctAnswer*/
function checkAnswer(input, correctAnswer){
  const correctAnswerResponse=  `<div>
  <p> Correct! GREAT JOB!</p>
  </div>
  <img src="${correctAnswer.image}"><br>
  <button type = "submit" id="nextButton">Next Question</button>`;
  const wrongAnswerResponse= `<div>
  <p> That was not correct, the correct answer is ${correctAnswer.answer}</p>
  </div>
  <img src="${correctAnswer.image}"><br>
  <button type = "submit" id="nextButton">Next Question</button>`;
  if (STORE.currentQuestion === STORE.questions.length){
    showResult();
  }
  else if (input === correctAnswer.answer){
    STORE.score++;
    questionAndScoreStatus();
    STORE.currentQuestion++;
    return $("main").html(correctAnswerResponse);
  }
  else if(input !== correctAnswer.answer){
    questionAndScoreStatus();
    STORE.currentQuestion++;
    return  $("main").html(wrongAnswerResponse);
  }
};

//need to change where we hide counter and change text of button to hit "show result"

function getNextQuestion(){
  $('main').on('click', '#nextButton', function(){
      if (STORE.currentQuestion === STORE.questions.length){
        showResult();
    } else {
    const nextQuestion= STORE.questions[STORE.currentQuestion];
    renderAQuestion(nextQuestion);
  }
}
  );
}


//change button text to Show result
//display message giving feedback on how user did on test
//create a button to restart quiz

function showResult(){
    $('#answerButton').innerText = 'See Results';
    const feedBack = `<div>
    <p> You got ${STORE.score} out of 10 questions correct</p>
    </div>
    <button type = "button" id="restartQuiz">Restart Quiz</button>`;
    restartQuiz();
    return $("main").html(feedBack);
  };

  //once restart Quiz button gets clicked, question and score counter get set to zero,
  //and first question gets rendered
  function restartQuiz(){
    $('main').on('click', '#restartQuiz', function(){
      resetScore();
      renderAQuestion(firstQuestion);
      getNextQuestion();
    }
    )
  }

  //shuffles the array
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

function resetScore(){
  STORE.currentQuestion = 0;
  STORE.score = 0;
  }
startQuiz();