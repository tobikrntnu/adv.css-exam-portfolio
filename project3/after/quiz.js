const openQuizBtn = document.getElementById('openQuizBtn');
const closeQuizBtn = document.getElementById('closeQuizBtn');
const quizModal = document.getElementById('quizModal');
const quizForm = document.getElementById('quizForm');
const quizResult = document.getElementById('quizResult');

openQuizBtn.addEventListener('click', () => {
  quizModal.hidden = false;
  quizForm.reset();
  quizForm.style.display = 'block';
  quizResult.hidden = true;
});

closeQuizBtn.addEventListener('click', () => {
  quizModal.hidden = true;
});

quizForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let score = 0;
  const formData = new FormData(quizForm);

  if (formData.get('q1') === 'correct') score++;
  if (formData.get('q2') === 'correct') score++;
  if (formData.get('q3') === 'correct') score++;
  if (formData.get('q4') === 'correct') score++;

  quizResult.textContent = `You got ${score} out of 4 correct!`;
  quizResult.hidden = false;
  quizForm.style.display = 'none';
});
