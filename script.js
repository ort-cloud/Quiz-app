let qNum = 0;
let score = 0;

function questSpawn () {
  if (qNum < STORE.length) {
    return `<div class="question-${qNum}">
    <h2>${STORE[qNum].question}</h2>
    <form>
    <fieldset>
    <label class="selectAns">
    <p>You may fire when ready.</p>
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
    <button type="submit" class="submitButton">FIRE!</button>
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
    renderQuest();
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

function userResults(){
  if (score >= 8) {
    $('.showQuest').html(`<div class="results correctFeedback"><h2>Good. Gooood!</h2><img src="https://banner2.kisspng.com/20180412/eiq/kisspng-star-wars-battlefront-ii-palpatine-anakin-skywalke-darth-vader-5ad00eb85594f7.1932252115235846963506.jpg" alt="Emperor Palpatine"/><p>You got ${score} / 10</p><p>I can feel the force flowing through you!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 8 && score >= 5) {
    $('.showQuest').html(`<div class="results correctFeedback"><h2>Do or do not. There is no try.</h2><img src="https://banner2.kisspng.com/20180202/lzq/kisspng-yoda-darth-maul-star-wars-jedi-star-wars-transparent-background-5a7487326a2b16.7780970115175862264349.jpg" alt="Master Yoda"/><p>You got ${score} / 10</p><p>Not bad, but not good either.</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.showQuest').html(`<div class="results correctFeedback"><h2>I find your lack of knowledge disturbing</h2><img src="https://banner2.kisspng.com/20180329/vhq/kisspng-star-wars-the-force-unleashed-ii-anakin-skywalker-darth-vader-5abd0ea6990b60.5714685715223394946269.jpg" alt="Darth Vader"/><p>You got ${score} / 10</p><p>Do not under estimate the power of the force.</p><button class="restartButton">Restart Quiz</button></div>`);
  }
  }

function nextQuest(){
  $('main').on('click','.nextButton', function (event){
    updateQuestNum();
    renderQuest();
    userAnswer();
  })
}

function restartQuiz(){
 $('main').on('click', '.restartButton', function(event){
    location.reload();
 })
}

function generateQuiz() {
  startQuiz();
  userAnswer();
  nextQuest();
}

$(generateQuiz)
