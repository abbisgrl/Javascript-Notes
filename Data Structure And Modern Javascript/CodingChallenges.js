/*
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  const scoreEntries = Object.entries(game.scored);
  for(let [goalNumber,playerName] of scoreEntries){
    console.log(`Goal ${goalNumber}:${playerName}`);
  }

  //alternative way of handling the questions
  // for(let i in game.scored){
  //   console.log(`Goal ${i}:${game.scored[i]}`);
  // }
 
  console.log('-----------------')
  for(let i in game.odds){
    let teamStr ='';
    teamStr = i=='team1'?`Odds of Victory of ${game.team1}: ${game.odds.team1}`:i=='x'?teamStr = `Odds of Draw:${game.odds.x}`:teamStr = `Odds of Victory of ${game.team2}: ${game.odds.team2}`;
    console.log(teamStr);
  }

  console.log('-----------------');
  
  let average = 0;
  for(let value of Object.values(game.odds)){
    average+=value;
  }
  console.log(average/Object.values(game.odds).length);

  // let value = 0;
  // let count =0;
  // for(let i in game.odds){
  //   value+=game.odds[i];
  //   count++;
    
  // }

  // console.log(`Averages of odds is ${value/count}`);

  //1.Problem 1
  const[player1,player2] = game.players;
//   console.log(player1,player2);

  const[goalkeeper,...fieldPlayer] = player1;
  console.log(goalkeeper,fieldPlayer);

  const allplayers = [...player1,...player2];
  console.log(allplayers);

  const player1Final = [...player1,'Thiago','Coutinho','Perisic'];
  console.log(player1Final);

  const{odds:{team1,x:draw,team2}} = game;
  console.log(team1,draw,team2);

  */

// Coding challenge 2
/*
  const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

  //Building a set of all events 
  const events = new Set();
  for(const [time,event] of gameEvents){
    events.add(event);
  }
  console.log(events)

  //Deleting the 64 minute event
  gameEvents.delete(64);
  console.log(gameEvents);

  //printing the events with information of first half and second half
  for(const [time,event] of gameEvents){
    if(time<45){
      console.log(`[First Half] ${time}:${event}`);
    }else{
      console.log(`[Second Half] ${time}:${event}`)
    }
  }

  */


// Coding Challenge 3

//function to change the word with underscore to camel case

/*
const camelCase = function (str) {
  let [first,second] = str.split('_');

  //first way of solving the question
  // let finalAns = '';
  // finalAns+= first.toLowerCase();
  // let answer2 =second.toLowerCase();
  // answer2=answer2.replace(answer2[0],answer2[0].toUpperCase());
  // finalAns+=answer2;

  //second and best way to solving the question
  first=first.toLowerCase()
  second=second.toLowerCase()
  second=second.replace(second[0],second[0].toUpperCase());
  return first+second;

  //A brute way to solve the questions
  // finalAns+= wordArray[0].replace(wordArray[0].charAt(0), wordArray[0].charAt(0).toLowerCase());
  // for (let i = 1; i < wordArray.length; i++) {
  //   let ans =wordArray[i].toLowerCase();
  //   finalAns += ans.replace(ans.charAt(0), ans.charAt(0).toUpperCase())
  // }
  // return finalAns;
}

console.log(camelCase('delayed_departure'))

const arr = ['underscore_case','first_name','Some_Variable','calculate_AGE','delayed_departure'];
const answer =[];
for(const item of arr){
  answer.push(camelCase(item));
}
console.log(answer);

*/

//Coding Challenge 4 
/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flight = flights.split('+');
console.log(flight);

function getCode(str){
  return str.slice(0,3).toUpperCase();
}
for(const item of flight){
  const[Status,from,to,Time] = item.split(';');
  console.log(`${Status.startsWith('_Delayed')?'D':''} ${Status.replaceAll('_',' ').trim()} from ${getCode(from)} to ${getCode(to)} at ${Time.replace(':','h')}`);
}
*/

// Coding Challenge 5
const button = document.getElementById('poll');
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  // answers: new Array(4).fill(0),
  answers: JSON.parse(localStorage.getItem ('array')) ?? new Array(4).fill(0),
  registerNewAnswer() {
    var answer = parseInt(prompt(`What is your favourite programming language?
    0: JavaScript 
    1: Python
    2: Rust
    3: C+
    Enter Your Answer`
    ))

    if(answer>3){
      alert('Please enter valid option');
    }else{
      // console.log(answer,this.answers);
      this.answers[answer] = this.answers[answer]+1;
      // console.log(this.answers);
      localStorage.setItem('array',JSON.stringify(this.answers));
    }
  }
}
button.addEventListener('click',function(){
  poll.registerNewAnswer();
})
// var answer = localStorage.getItem('array');
// console.log(answer)
// poll.registerNewAnswer();
