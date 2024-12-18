function calculateScore() {
    let score = 0;
    
    // Correct answers
    const correctAnswers = {
        q1: "Paris",
        q2: "JavaScript",
        q3: "Bill Gates"
    };
    
    // Check answers
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    
    for (const [key, value] of formData.entries()) {
        if (correctAnswers[key] === value) {
            score++;
        }
    }

    // Display result
    const result = document.getElementById('result');
    result.textContent = `Your Score: ${score} / 3`;
}
