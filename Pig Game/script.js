'use strict'

const scoreP1 = document.getElementById('score--0');
const scoreP2 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current1Score = document.getElementById('current--0');
const current2Score = document.getElementById('current--1');
const message = document.getElementById('message');
scoreP1.textContent = 0;
scoreP2.textContent = 0;
let current1 = 0;
let current2 = 0;
let final1 = 0;
let final2 = 0;
let player1Active = true;
dice.classList.add('hidden');

btnRoll.addEventListener('click', function () {
    const random = Math.floor(Math.random() * (7 - 1) + 1);
    // console.log(random);
    dice.classList.remove('hidden');
    dice.src = `./Dice Images/Dice-${random}.png`
    if (random === 1) {
        // current1 = 0;
        if (player1Active) {
            current1 = 0;
            current1Score.textContent = current1;
        } else {
            current2 = 0;
            current2Score.textContent = current2;
        }
        player1Active = !player1Active;

    } else {
        if (player1Active) {
            current1 = current1 + random;
            // console.log(current1Score);
            current1Score.textContent = current1;
        } else {
            current2 = current2 + random;
            // console.log(current2Score);
            current2Score.textContent = current2;
        }

    }
    // switch (random) {
    //     case 1:
    //         dice.setAttribute('src', './Dice Images/dice-1.png');

    //         break;
    //     case 2:
    //         dice.setAttribute('src', './Dice Images/Dice 2.png');
    //         break;
    //     case 3:
    //         dice.setAttribute('src', './Dice Images/Dice 3.png');
    //         break;
    //     case 4:
    //         dice.setAttribute('src', './Dice Images/Dice 4.png');
    //         break;

    //     case 5:
    //         dice.setAttribute('src', './Dice Images/Dice 5.png');
    //         break;
    //     case 6:
    //         dice.setAttribute('src', './Dice Images/Dice 6.png');
    //         break;
    // }
});

btnHold.addEventListener('click', function () {
    if (player1Active) {
        final1 = final1 + current1;
        scoreP1.textContent = final1;
        if (final1 >= 100) {
            message.textContent = 'Player 1 is winner';
            current1 = 0;
            current2 = 0;
            final1 = 0;
            final2 = 0;

        }
        current1 = 0;
        current1Score.textContent = current1;
    } else {
        final2 = final2 + current2;
        scoreP2.textContent = final2;
        if (final2 >= 100) {
            message.textContent = 'Player 2 is winner';
        }
        current2 = 0;
        current2Score.textContent = current2;
    }

    player1Active = !player1Active;
});


btnNew.addEventListener('click', function () {
    current1 = 0, current2 = 0, final1 = 0, final2 = 0
    current1Score.innerText = current1;
    current2Score.innerText = current2;
    scoreP1.innerText = final1;
    scoreP2.innerText = final2;
})
