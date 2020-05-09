
const nextButton = document.getElementById('next-btn');
const questionElement = document.getElementById('question');
const resetButton = document.getElementById('reset-btn');
const startButton = document.getElementById('start-btn');
const answerButtonsElement = document.getElementById('options');
const welcomeElement = document.getElementById('welcome-msg');
const scoreElement = document.getElementById('score-msg');
const currentQuestionCounter = document.getElementById('current-question');
const questionTitle = document.getElementById('question-title');
const maxQuestionCounter = document.getElementById('max-question');
const correctAnswersCounter = document.getElementById('correct-num');
const maximumScoreCounter = document.getElementById('maximum-score');
const minimumScoreCounter = document.getElementById('minimum-score');
const totalPointsCounter = document.getElementById('total-points');

let currentQuestionIndex, shuffledQuestions, points, numCorrectAnswer = 0;

/*Event Listeners */
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })

startButton.addEventListener('click',startQuiz );

//FUNCTIONS HERE
//Start Quiz Function Here
  function startQuiz(){
    welcomeElement.classList.add('hide');
    question.classList.remove('hide');
    questionTitle.classList.remove('hide');
    startButton.classList.add('hide');
    nextButton.classList.remove('hide');
    answerButtonsElement.classList.remove('hide')
    scoreElement.classList.add('hide')
    shuffledQuestions = myQuestions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    points = 0;
    correctAnswersCounter.innerText = `${numCorrectAnswer}`
  
    setNextQuestion();
};

function setNextQuestion() {
    resetState()
    displayQuestions(shuffledQuestions[currentQuestionIndex])
    answerButtonsElement.classList.remove('noclick')
  }

function displayQuestions(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer =>{
      const button = document.createElement('button')
      button.innerText = answer.solution
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
        
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
    currentQuestionCounter.innerText = `${(currentQuestionIndex + 1)}`
    maxQuestionCounter.innerHTML = `${ shuffledQuestions.length}`
};

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct;
    if (correct){
      numCorrectAnswer++;
      points = points +5;
      answerButtonsElement.classList.add('noclick')
      correctAnswersCounter.innerText = `${numCorrectAnswer}`
    }
    else{
      answerButtonsElement.classList.add('noclick')
    }
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      
      questionElement.classList.add('hide')
      startButton.innerText = 'Restart'
      scoreUpdate();
      numCorrectAnswer = 0;
      startButton.classList.remove('hide')
      
    }
  }
  
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {  
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
  function scoreUpdate(){
    minimumScoreCounter.innerText = `${numCorrectAnswer}`;
    maximumScoreCounter.innerText = `${shuffledQuestions.length}`
    totalPointsCounter.innerText = `${points}`
    answerButtonsElement.classList.add('hide')
      questionTitle.classList.add('hide');
      scoreElement.classList.remove('hide')
  }

const myQuestions = [
    {
        question: "Who is the current Arsenal FC coach ?",
        answers: [         
                    {solution: "Arsene Wenger", correct: false},
                    {solution: "Jose Mourinho", corect: false},
                    {solution: "Bredan Rodgers", correct: false},
                    {solution: "Mikel Arteta", correct: true}]

      },
      {
          question: "Which year was the premiere league founded?",
          answers: [
              {solution: "1992", correct: true},
              {solution: "1996", correct: false},
              {solution: "1990", correct: false},
              {solution: "1994", correct: false}
          ]
      },
      {
            question: "Which team won the first premiere league title?",
            answers: [
                {solution: "Chelsea", correct: false},
                {solution: "Manchester United", correct: true},
                {solution: "Manchester City", correct: false},
                {solution: "Liverpool", correct: false}
              ]
             
      },
      {
            question: "Who has scored more career goals?",
            answers: [
                {solution: "Messi", correct: false},
                {solution: "Neymar", correct: false},
                {solution: "Ronaldo", correct: true},
                {solution: "Maradona", correct: false}
            ] 
      },
      {
            question: "Who scored the fastest goal in premiere league history?",
            answers: [
                {solution: "Christiano Ronaldo", correct:false},
                {solution: "Robin Van persie", correct: false},
                {solution: "Shane Long", correct: true},
                {solution: "Kun Aguero", correct: false}
            ]
                }
              ];
