/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

const initialize = () => {
    scores = [0, 0];
    roundscore = 0;
    activePlayer = 0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    //document.querySelector('.player-0-panel').classlist.remove('winner');
    //document.querySelector('.player-1-panel').classList.remove('winner');  

};

initialize();

/* All this code has been displaced to the initialize function

let scores = [0, 0]; //all in one place
let roundscore = 0; // score at at time in the game

let activePlayer = 0; // one player will be 0, the other one 1

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0'; */


// Displays the numbr in the HTML

//document.querySelector('#current-' + activePlayer).textContent = dice ; //setter(sets a value)
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice +'</em>'; //typecoarcion 

/* let whatever = document.querySelector('#name-1').textContent; // getter(get a value)
console.log(whatever); */

document.querySelector('.btn-new').addEventListener('click', initialize)

    //// Function Next Player, used in the next sequences

    const nextPlayer = () => {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //terniary operator
        roundscore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
    
        document.querySelector('.dice').style.display = 'none';
    }


// Hide the dice when game didn't start

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function () { //addEventListener takes to parameters (event, function)

    //1 Random number

    let dice = Math.floor(Math.random() * 6) + 1;

    //2 Display the number

    let diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // 3 Update the total score  --------!!! In rder to keep the code DRY, the fuction is defined above

    if (dice !== 1) {
        //add score 
        roundscore += dice;
        // roundscore = roundscore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundscore;
    } else {
        // next player  
        nextPlayer();
        // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //terniary operator
        // roundscore = 0;
        // document.getElementById('current-0').textContent = 0;
        // document.getElementById('current-1').textContent = 0;

        // document.querySelector('.player-0-panel').classList.toggle('active');
        // document.querySelector('.player-1-panel').classList.toggle('active');

        // //document.querySelector('.player-0-panel').classList.remove('active');
        // //document.querySelector('.player-1-panel').classList.add('active');

        // document.querySelector('.dice').style.display = 'none';
    };

});

document.querySelector('.btn-hold').addEventListener('click', function(){

    // add current score to total score
    scores[activePlayer] += roundscore;
    //update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Who is the winner?
     if (scores[activePlayer] >= 100) {
         document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
     } else {
            //change player
            nextPlayer();


     }
});

// DOES NOT WORK: full disclosure, 29/30 don't work. If you click HOLD after winning, score keeps adding. Watch lesson 53 and finish