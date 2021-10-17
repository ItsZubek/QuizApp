var questions = [
	{
		question: "How long does it take the Earth to orbit the Sun?",
		answerA: "365 days",
		answerB: "24 hours",
		answerC: "12 hours",
		answerD: "183 days",
		correctAnswer: "A"
	},
		{
		question: "What year did World War II end?",
		answerA: "1949",
		answerB: "1919",
		answerC: "1945",
		answerD: "none of the above",
		correctAnswer: "C"
	},
	{
		question: "What is the most expensive Pokemon Card",
		answerA: "Pikachu",
		answerB: "Gyrardos",
		answerC: "Raichu",
		answerD: "Charizard",
		correctAnswer: "D"
	},
	{
		question: "Which color is not part of RGB?",
		answerA: "Red",
		answerB: "Blue",
		answerC: "White",
		answerD: "Green",
		correctAnswer: "C"
	},

];

var currentQuestionIndex = 0;
var score = 0;
const SubmitBtn = document.getElementById("submitbutton");
const questionText = document.getElementById("question");
const AText = document.getElementById("A_content");
const BText = document.getElementById("B_content");
const CText = document.getElementById("C_content");
const DText = document.getElementById("D_content");

function Quiz() {
	questionText.innerHTML = questions[currentQuestionIndex].question;
	AText.innerHTML = questions[currentQuestionIndex].answerA;
	BText.innerHTML = questions[currentQuestionIndex].answerB;
	CText.innerHTML = questions[currentQuestionIndex].answerC;
	DText.innerHTML = questions[currentQuestionIndex].answerD;

}
function FindSelected() {
	const allAnswers = document.querySelectorAll('.answers');
	let answer = undefined;
	allAnswers.forEach((answerEl) => {
		if(answerEl.checked) 
		{
			answer = answerEl.id;
		}
	});
	return answer;
}
function Deselect() {
	const allAnswers = document.querySelectorAll('.answers');
	allAnswers.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

Quiz();

SubmitBtn.addEventListener("click", () => {
	const currentAnswer = FindSelected(); //we get the answer
	//if there is any answer we do below
	if(currentAnswer) 
	{
		if(currentAnswer === questions[currentQuestionIndex].correctAnswer) //if answer is correct we ++ score
		{
			score++;
		}
		currentQuestionIndex++;
		if(currentQuestionIndex < questions.length) //if there are any more questions
		{
			Deselect();
			Quiz();
		}
		else 
		{
			alert("You got " + score + " out of " + questions.length + " questions right!");
		}
}
});
