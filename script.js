let qNum = 0;
let score = 0;

function questSpawn() {
  if (qNum < STORE.length) {
    return `<div class="question-${qNum}">
    <h2>${STORE[qNum].question}</h2>
    <h3>You may fire when ready.</h3>
    <form>
    <fieldset>
    <strong>
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
    <button type="submit" class="submitButton">FIRE!</button>
    </strong>
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
  qNum++;
  $(".qNum").text(qNum + 1);
}

function updateScore() {
  score++;
}

function startQuiz() {
  $(".startPage").on("click", ".startButton", function (event) {
    $(".startPage").remove();
    $(".showQuest").css("display", "block");
    $(".qNum").text(1);
    renderQuest();
  });
}

function renderQuest() {
  $(".showQuest").html(questSpawn());
  console.log('renderQuest ran');
  userAnswer();
}

function userAnswer() {
  $("form").on("submit", function (event) {
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

function negativeFeedback() {
  let correctAnswer = `${STORE[qNum].correctAnswer}`;
  $(".showQuest").html(`<div class="negFeedback"><div class="icon"</div><img src="${STORE[qNum].wrongImg}" alt="${STORE[qNum].altWrong}"/></div><p>IT'S A TRAP!</p>The correct answer is <span>"${correctAnswer}"</span><br></br><button type=button class="nextButton">Next</button></div>`);
}

function newScore() {
  updateScore();
  $('.score').text(score);
}

function userResults() {
  if (score >= 8) {
    $('.showQuest').html(`<div class="results correctFeedback"><h2>Good. Gooood!</h2><img src="https://www110.lunapic.com/do-not-link-here-use-hosting-instead/156418407564205706?9726548158" alt="Emperor Palpatine"/><p>You got ${score} / 10</p><p>I can feel the force flowing through you!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 8 && score >= 5) {
    $('.showQuest').html(`<div class="results correctFeedback"><h2>Do, or do not. There is no try.</h2><img src="https://www110.lunapic.com/do-not-link-here-use-hosting-instead/156418407564205706?2431173399" alt="Master Yoda"/><p>You got ${score} / 10</p><p>Not bad, but not good either.</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.showQuest').html(`<div class="results correctFeedback"><h2>I find your lack of knowledge disturbing!</h2><img src="https://www110.lunapic.com/do-not-link-here-use-hosting-instead/156418407564205706?2495154692" alt="Darth Vader"/><p>You got ${score} / 10</p><p>Do not underestimate the power of the force.</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}

function nextQuest() {
  $('main').on('click', '.nextButton', function (event) {
    updateQuestNum();
    renderQuest();
  })
}

function restartQuiz() {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  })
}

function generateQuiz() {
  startQuiz();
  nextQuest();
}

$(generateQuiz)
