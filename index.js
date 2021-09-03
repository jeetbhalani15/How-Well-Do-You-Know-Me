var readlineSync = require('readline-sync');
console.log('Know About Me-Quiz Game\n');
var username = readlineSync.question("Hello There! What Is Your Name: ");

console.log('welcome' + " " + username);

var score = 0
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer) {
    console.log('congo!!! you are right\t');
    score = score + 2;
  }


  else {
    console.log('\t oops!!! you are worng');
    console.log("The correct answer is: "
      + answer);
    score = score - 1;
  }
}
{
  console.log(' your score is : ' + score);

}
console.log('\n-----------\n');
console.log('Lets start the game \n Few Instructions\n1. Type all the answer in captial\n2. lets Start!! Good Luck');
console.log('\n-----------\n');
console.log('Current Score:' + score);

// arry of objects

var questions = [
  {
    question: 'where do  I (jeet) live?: ',
    answer: 'KUTCH'
  },
  {
    question: 'what is his AGE?? :',
    answer: '21'
  },
  {
    question: 'In which feild is HE studing? :',
    answer: 'EC'
  }
  ,
  {
    question: 'What is his pet name :',
    answer: 'baliye'
  },

  {
    question: 'Which sports do he play? :',
    answer: 'badminton'
  },
  {
    question: 'In which college he was? :',
    answer: 'gec bharuch'
  }
];

//  loops for functions
for (var i = 0; i < questions.length; i++) {
  var curr = questions[i];
  play(curr.question, curr.answer);
}

console.log('\n----------------\n');
console.log('THANK YOU FOR PLAYING !');
console.log('YOU SCORED : ' + score);