const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const myHistory = document.querySelector('#history')
const historyModal = document.querySelector('#modal')
const closeModal = document.querySelector('#close-modal')
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo')
let winningScore = 3;
let isGameOver = false;


function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        history.push({ p1Score: p1.score, p2Score: p2.score });
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
p1.button.addEventListener('click', () => {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', () => {
    updateScores(p2, p1)

})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

let history = [];

myHistory.addEventListener('click', function () {
    const scoreHistoryList = document.getElementById('scoreHistory');
    scoreHistoryList.innerHTML = '';

    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `Player I: ${entry.p1Score} VS Player II: ${entry.p2Score}`;
        scoreHistoryList.appendChild(listItem);
    });

    historyModal.classList.add('is-active')
})

closeModal.addEventListener('click', () => {
    historyModal.classList.remove('is-active');
});

const modalBackground = document.querySelector('.modal-background');
modalBackground.addEventListener('click', () => {
    modal.classList.remove('is-active');
});



