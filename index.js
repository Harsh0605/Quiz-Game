var rs = require("readline-sync");
var chalk = require(`chalk`);
console.log("----------------------------------------------")
console.log(chalk.green.bold(`HEY! BUDDY LET'S PLAY THIS AMAZING SPACE QUIZ !!!`));
console.log("----------------------------------------------")
console.log(chalk.white.bold("Rules and guidelines::\n1. There are going to be total 10 questions.\n2. All questions are compulsory.\n3. Each right answer will give 4 points.\n4. Each wrong answer deduct 2 points.\n5. To give your answer just enter the desired option."))
console.log("")
var username=rs.question (chalk.redBright.bold ("May! I have your name? "))
console.log(chalk.white.bold(`Hey!${username} it's nice to meet you!`))
console.log("")
console.log(chalk.yellowBright("Let's get this quiz started!"))
console.log("")
var score = 0
var questions=[
  {
    prompt: chalk.greenBright("1. Who envented the telescope?\n[a]Hans Lippershey\n[b]Galileo\n[c]Johannes Kepler."),
    answer:"a"
  },
    {
      prompt:chalk.greenBright("2. Which of these objects is the farthest from the sun?\n[a]90377 Sedna\n[b]Neptune\n[c]Kuiper Belt"),
      answer:"a"
    },

    {
      prompt:chalk.greenBright("3. What is the smallest planet in the solar system by mass?\n[a]Saturn\n[b]Mars\n[c]Neptune"),
      answer:"a"
    },
    
    {
      prompt:chalk.greenBright("4. What is the visible part of the sun called?\n[a]the stratosphere\n[b]the photosphere\n[c]the atmosphere"),
      answer:"b"
    },
    
    {
    prompt:chalk.greenBright( "5.How many times larger is the radius of the Sun than that of the Earth?\n[a] 4.8\n\[b]1,025 \n[c]109"),
    answer: "c"
    },
    
    {
    prompt:chalk.greenBright ("6.When did the Space Age begin?\n[a]1957\n[b]1941\n[c]1999"),
    answer:"a"
    },

    {
    prompt:chalk.greenBright ("7.With which US spacecraft did Neil Armstrong and Edwin Aldrin, Jr.land on the moon?\n[a]Apollo 7\n[b]Apollo 11\n[c]Apollo 17"),
    answer:"b"
    },

    {
    prompt:chalk.greenBright ("8.What is the name of the India's first rocket?\n[a]Aryabhatta\n[b]PSLV\n[c] SLV-3"), 
    answer:"c"
    },
   
    {
     
    prompt:chalk.greenBright ("9.Which spacecraft was Laika, the first living creature sent into the space?\n[a]Sputnik 2 \n\[b]Sputnik 3\n[c]Vostok 1"),
    answer: "a"
  },

  {
    prompt:chalk.greenBright ("10.What is the name of the first space tourist?\n[a]Dennis Tito\n[b]Greg Olsen\n[c]Richard Gariott"),
    answer:"a"
  },
]
for(var i=0; i<questions.length;i++){
  var response =prompt(questions[i].prompt)
  if(response==questions[i].answer){
    alert(chalk.yellow("WOOAAHH! It's a right answer!"));
     score=score+4;
  console.log(chalk.blue(`Your score is ${score}`));
  console.log("------------------");
  }else{
    alert(chalk.yellow("Hey!It's a wrong answer!"))
    score=score-2;
  console.log(chalk.blue(`Your score is ${score}`));
  console.log("------------------");
  }
}
console.log(chalk.whiteBright.bold.bgYellow("Congratulations! You scored: "+ score));
console.log("------------------");

console.log(chalk.green.bold("Thanks for playing! Have a nice day!"))


