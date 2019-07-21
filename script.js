let qNum = 0;
let score = 0;

function questSpawn () {
  if (qNum < STORE.length) {
    return `<div class="question-${qNum}">
    <h2>${STORE[qNum].question}</h2>
    <form>
    <fieldset>
    <label class="selectAns">
    <input type="radio" value="${STORE[qNum].answers[0]}" name="answer" required>
    <span>${STORE[qNum].answers[0]}</span>
    </label>
    <label class="selectAns">
    <input type="radio" value="${STORE[qNum].answers[1]}" name="answer" required>
    <span>${STORE[qNum].answers[1]}</span>
    </label>
    <label class="selectAns">
    <input type="radio" value="${STORE[qNum].answers[2]}" name="answer" required>
    <span>${STORE[qNum].answers[2]}</span>
    </label>
    <label class="selectAns">
    <input type="radio" value="${STORE[qNum].answers[3]}" name="answer" required>
    <span>${STORE[qNum].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">submit</button>
    </fieldset>
    </form>
    </div>`;
  } else {
    userResults();
    restartQuiz();
    $('.qNum').text(10)
  }
}

function updateQuestNum() {
  qNum ++;
  $(".qNum").text(qNum + 1);
}

function updateScore() {
  score ++;
}

function startQuiz() {
  $(".startPage").on("click", ".startButton", function(event) {
    $(".startPage").remove();
    $(".showQuest").css("display", "block");
    $(".qNum").text(1);
    //renderQuest();
  });
}

function renderQuest() {
  $(".showQuest").html(questSpawn());
}

function userAnswer() {
  $("form").on("submit", function(event) {
    event.preventDefault();
    let selected = $("input:checked");
    let answer = selected.val();
    let correctAnswer = `${STORE[qNum].correctAnswer}`;
    if (answer === correctAnswer) {
      selected.parent().addClass("correct");
      ifCorrect();
    } else {
      selected.parent().addClass("wrong");
      ifWrong();
    }
  });
  console.log('userAnswer ran')
}

function ifCorrect() {
  positiveFeedback();
  newScore();
}

function ifWrong() {
  negativeFeedback();
}

function positiveFeedback() {
  let correctAnswer = `${STORE[qNum].correctAnswer}`;
  $(".showQuest").html(`<div class="posFeedback"><div class="icon"</div><img src="${STORE[qNum].correctImg}" alt="${STORE[qNum].altCorrect}"/></div><p>Great shot, Kid!</p><button type=button class="nextButton">Next</button></div>`);
}

function negativeFeedback(){
  let correctAnswer = `${STORE[qNum].correctAnswer}`;
  $(".showQuest").html(`<div class="posFeedback"><div class="icon"</div><img src="${STORE[qNum].wrongImg}" alt="${STORE[qNum].altWrong}"/></div><p>IT'S A TRAP!</p><br></br>That is not correct.The correct answer is <span>"${correctAnswer}"</span><button type=button class="nextButton">Next</button></div>`);
}

function newScore(){
  updateScore();
  $('.score').text(score);
}

function usersResults(){
  //write if/else statement here
}

function nextQuest(){
  $('main').on('click','.nextButton', function (event){
    updateQuestNum();
    renderQuest();
    userAnswer();
  })
}

function restartQuiz(){
 //Write reload here
}

function generateQuiz() {
  startQuiz();
  renderQuest();
  userAnswer();
  nextQuest();
}

$(generateQuiz)
