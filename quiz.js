let currentQuestion = 0;
let score = 0;
let timeLeft = 20;
let timer;

function startQuiz() {

currentQuestion = 0;
score = 0;

showQuestion();

}

function showQuestion() {

const quiz = document.getElementById("quiz");

if (!quiz) return;

if (currentQuestion >= questions.length) {

quiz.innerHTML = `
<h2>🎉 مسابقه تمام شد</h2>
<p>امتیاز شما: ${score} از ${questions.length}</p>

<p>
${
score==questions.length
? "🏆 عالی! شما استاد قزوین هستید."
: score>=8
? "🥇 خیلی خوب! اطلاعات فوق‌العاده‌ای دارید."
: score>=6
? "🥈 خوب بود، اما هنوز جای پیشرفت دارید."
: "📚 دوباره امتحان کن تا بیشتر با قزوین آشنا شوی."
}
</p>

<button onclick="startQuiz()">شروع دوباره</button>
`;

return;

}

const q = questions[currentQuestion];

quiz.innerHTML = `

<h2>سوال ${currentQuestion+1}</h2>

<h3>${q.question}</h3>

<div id="answers"></div>

<p>⏱ زمان: <span id="timer">${timeLeft}</span></p>

`;

const answers = document.getElementById("answers");

q.options.forEach((option,index)=>{

const btn=document.createElement("button");

btn.innerText=option;

btn.style.display="block";

btn.style.margin="10px auto";

btn.style.padding="12px";

btn.style.width="80%";

btn.onclick=function(){

checkAnswer(index);

};

answers.appendChild(btn);

});

startTimer();

}

function checkAnswer(answer){

clearInterval(timer);

if(answer===questions[currentQuestion].answer){

score++;

}

currentQuestion++;

timeLeft=20;

showQuestion();

}

function startTimer(){

clearInterval(timer);

timer=setInterval(()=>{

timeLeft--;

const t=document.getElementById("timer");

if(t){

t.innerText=timeLeft;

}

if(timeLeft<=0){

clearInterval(timer);

currentQuestion++;

timeLeft=20;

showQuestion();

}

},1000);

}

window.startQuiz = startQuiz;

