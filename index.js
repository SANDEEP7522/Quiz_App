const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

const questions = [
    {
        question: 'What is 8 + 2?',
        answers: [
            { text: '10', correct: true },
            { text: '22', correct: false },
            { text: '5', correct: false },
            { text: '3', correct: false }
        ]
    },
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'What is name of Creater?',
        answers: [
            { text: 'Sandeep', correct: true },
            { text: 'Anupam', correct: false },
            { text: 'Rohan', correct: false },
            { text: 'Sohan', correct: false }
        ]
    },
    {
        question: 'What is the value 2 & 3 = ?',
        answers: [
            { text: '5', correct: false },
            { text: '6', correct: false },
            { text: '2', correct: true },
            { text: '3', correct: false }
        ]
    },
    {
        question: 'What is this ?',
        answers: [
            { text: 'Nothing', correct: false },
            { text: 'Game App ', correct: false },
            { text: 'Qize App', correct: true },
            { text: 'Palying App', correct: false }
        ]
    },
    {
        question: 'Full form of HTML?',
        answers: [
            { text: 'Hypertext Markup Language', correct: true },
            { text: 'Hypertext Markup Languageses', correct: false },
            { text: 'Hypertext Markups Language', correct: false },
            { text: 'Hypertexts Markup Language', correct: false }
        ]
    },
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Cascading Style Sheetsn', correct: false },
            { text: 'Cascad Style Sheets', correct: false },
            { text: 'Cascading Styless Sheets', correct: true },
            { text: 'Cascading Supere Sheets', correct: false }
        ]
    }
];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
