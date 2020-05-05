
const nextButton = document.getElementById('next-btn');
const questionElement = document.getElementById('question');
const resetButton = document.getElementById('reset-btn');
const startButton = document.getElementById('start-btn');
const answerButtonsElement = document.getElementById('options');
const welcomeElement = document.getElementById('welcome-msg');

let currentQuestionIndex, shuffledQuestions, points;

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
    startButton.classList.add('hide');
    nextButton.classList.remove('hide');
    shuffledQuestions = myQuestions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    points = 0;
    setNextQuestion();
};

function setNextQuestion() {
    resetState()
    displayQuestions(shuffledQuestions[currentQuestionIndex])
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
};

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
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

const myQuestions = [
    {
        question: "What is the current Arsenal FC coach ?",
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
