document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');

    // Sample questions data
    const questions = [
        { id: 1, question: "Is the sky blue?" },
        { id: 2, question: "Is the grass green?" },
        { id: 3, question: "Is water wet?" }
    ];

    // Object to store answers
    let answers = {};

    function loadQuestionViewPage() {
        let content = `
            <div id="question-section">
                <h2>Answer the Questions</h2>
        `;

        // Loop through the questions and create HTML for each
        questions.forEach((q, index) => {
            content += `
                <div class="question-block">
                    <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
                    <button class="answer-button" data-id="${q.id}" data-answer="yes">Yes</button>
                    <button class="answer-button" data-id="${q.id}" data-answer="no">No</button>
                </div>
                <br>
            `;
        });

        content += `
                <button id="submit">Submit</button>
                <button id="backButton">Go Back</button>
            </div>
        `;

        mainContent.innerHTML = content;

        // Attach event listeners to the buttons
        document.querySelectorAll('.answer-button').forEach(button => {
            button.addEventListener('click', handleAnswer);
        });
        document.getElementById('submit').addEventListener('click', handleSubmit);
        document.getElementById('backButton').addEventListener('click', loadViewSessionPage);
    }

    function handleAnswer(event) {
        const questionId = event.target.getAttribute('data-id');
        const answer = event.target.getAttribute('data-answer');

        // Store the answer
        answers[questionId] = answer;

        // Lock the buttons after answering
        const questionBlock = event.target.closest('.question-block');
        questionBlock.querySelectorAll('.answer-button').forEach(button => {
            button.disabled = true;
        });

        console.log(`Question ID ${questionId} answered: ${answer}`);
    }

    function handleSubmit() {
        console.log("Submit button clicked");
        console.log("Answers:", answers);

        // Save answers to localStorage (or send to server)
        localStorage.setItem('userAnswers', JSON.stringify(answers));

        alert("Your answers have been saved!");
    }

    function loadViewSessionPage() {
        if (typeof window.loadViewSessionPage === 'function') {
            window.loadViewSessionPage();
        }
    }

    // Expose function to be used by other scripts
    window.loadQuestionViewPage = loadQuestionViewPage;
});
