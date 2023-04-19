// https://www.mediaevent.de/javascript/DOM-Knoten-suchen.html
// https://wiki.selfhtml.org/wiki/JavaScript/Operatoren/Nullish_Coalescing_Operator

let points = Number(localStorage.getItem("points")) ?? 0;
let round = Number(localStorage.getItem("rounds")) ?? 0;
if(localStorage.getItem('life') <= 0) localStorage.setItem('life', String(5));
let life = Number(localStorage.getItem("life")) ?? 5;
if(localStorage.getItem('level') <= 0) localStorage.setItem('level', String(1));
let level = Number(localStorage.getItem("level")) ?? 1;
let userInput = document.querySelector('#answer span');
let question = {
    'result': 0,
    'question': '',
    'check': 'wrong'
};

function startGame() {
    setTask();
    // ToDo: add class hidden to start button and remove class hidden to gameplay button
    document.querySelector('#startGame').classList.add('hidden');
    document.querySelector('#gameplay').classList.remove('hidden');

}
function displayInput(buttonValue) {
    // ToDo: show input form user
    document.querySelector('#answer span').innerHTML += buttonValue;



}
function checkInput() {
    // ToDo: check if answer is right
    if(Number(userInput.innerHTML) === Number(question['result'])){
        userInput.style.background = 'green';
        question ['check'] = 'right';
        points++;
        level++;
    } 
    else{
        userInput.style.background = 'red';
        question ['result'] = 'wrong';
        life--;
    }


    renderLife();
    // ToDo: if end of life
    if(life === 0){
        let buttons = document. querySelectorAll('button:not([id="clearResult"])'); // select all buttons
        buttons.forEach(function(button) {
            button.disabled = true;
        });
        //document.querySelector('#startGame').classList.remove('hidden');
    }
    else{
        setTimeout(setTask, 2000);
        
    }
    
    saveScore();
    
}

function saveScore() {
    // ToDo: save all in localStorage
    localStorage.setItem('points', String(points));
    localStorage.setItem('rounds', String(round));
    localStorage.setItem('level', String(level));
    localStorage.setItem('life', String(life));


    addQuestion(round, question['question'], question['result'], question['check']);
    displayQuestions();
}

function reset() {
    // ToDo: reset input from user
    userInput.style.background = 'transparent';
    userInput.innerHTML = '';

}

function setTask() {
    renderLife();
    // ToDo: reset input field
        reset();
        round++;
    // ToDo: random Numbers
        let a = Math.floor(Math.random() * 49 + 1);
        let b = Math.floor(Math.random() * 59 + 1);
        let c = Math.floor(Math.random() * 9 + 1);
    mathTask(level, a, b, c);
    // ToDo: output questions
    document.getElementById('score').innerHTML =`Level ${level} Punkte ${points} Runde ${round}`;
    document.getElementById('question').innerText = question['question'];
}

function renderLife() {
    // ToDo: insert lifes

    let insertHeart = document.getElementById('life');
    insertHeart.innerHTML = '';
    for(let i = 1; i <= 5; i++) {
        if (i<= life) {
            insertHeart.innerHTML += '<img src="./heart.svg" alt="Leben" class ="heart green" >';
        }
        else{
            insertHeart.innerHTML += '<img src="./heart.svg" alt="Leben" class ="heart red" >';
        }
    }

}

// reset all stored content
document.getElementById('clearResult').addEventListener('click', function () {
    localStorage.clear();
    deleteDatabase();
    window.location.reload();
})

// the questions
function mathTask(level, a, b, c) {
    switch (level) {
        case 1:
            question['result'] = a + b;
            question['question'] = `Was ist das Ergebnis aus ${a} + ${b}`;
            break;
        case 2:

            question['result'] = a - b;
            question['question'] = `Was ist das Ergebnis aus ${a} - ${b}`;
            break;
        case 3:
            question['result'] = a * b;
            question['question'] = `Was ist das Ergebnis aus ${a} * ${b}`;
            break;
        case 4:
            question['result'] = a * b / a;
            question['question'] = `Was ist das Ergebnis aus ${a} * ${b} / ${a}`;
            break;
        case 5:
            question['result'] = a + b * c;
            question['question'] = `Was ist das Ergebnis aus ${a} + ${b} * ${c}`;
            break;
        case 6:
            question['result'] = (a + b) * c;
            question['question'] = `Was ist das Ergebnis aus (${a} + ${b}) * ${a}`;
            break;
        case 7:
            question['result'] = b - c;
            question['question'] = `Was ist das Ergebnis aus ${a} * ${b} / ${a} - ${c}`;
            break;
        case 8:
            question['result'] = a;
            question['question'] = `Was ist die Quadratwurzel von ${a*a}`;
            break;
        case 9:
            question['result'] = b;
            question['question'] = `Was ist der Logarithmus von ${Math. pow(a, b)} zur Basis ${a}`;
            break;
        // default:
        //     alert("Leider keine Aufgabe!");
    }
    console.log(question['result']);
}

