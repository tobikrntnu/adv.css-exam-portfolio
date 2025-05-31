function showQuestion(button) {
	const container = button.closest('.question-container');
	const question = container.querySelector('.question');
	const feedback = container.querySelector('.question__feedback');
  
	// Fjern 'hidden' klassen for å vise popupen
	question.classList.remove('hidden');
	feedback.classList.remove('hidden');
	
	// Skjul knappen etter at popupen vises
	button.style.display = 'none'; // Skjuler spørsmåls-knappen
  }
  
  function checkAnswer(button) {
	const container = button.closest('.question-container');
	const feedbackElement = container.querySelector('.question__feedback');
	const correctAnswer = container.dataset.correctAnswer.trim();
  
	const allButtons = container.querySelectorAll('.question__answer button');
	allButtons.forEach(btn => btn.classList.remove('correct', 'incorrect'));
  
	const userAnswer = button.textContent.trim();
  
	if (userAnswer === correctAnswer) {
	  button.classList.add('correct');
	  feedbackElement.textContent = 'Correct! 🎉';
	  feedbackElement.style.color = 'green';
	} else {
	  button.classList.add('incorrect');
	  feedbackElement.textContent = 'Wrong, try again!';
	  feedbackElement.style.color = 'red';
	}
  }
  
  function closeQuestion(closeButton) {
	const container = closeButton.closest('.question-container');
	const question = container.querySelector('.question');
	const questionButton = container.querySelector('.question-button');
  
	// Skjul spørsmålet og vis knappen igjen
	question.classList.add('hidden');
	questionButton.style.display = 'inline-block'; // Vist spørsmåls-knappen igjen
  }
  