document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('qaForm');
    const questionList = document.getElementById('question-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const questionInput = document.getElementById('question');
        const question = questionInput.value.trim();

        if (question !== '') {
            addQuestion(question);
            questionInput.value = '';
        }
    });

    function addQuestion(question) {
        const questionItem = document.createElement('div');
        questionItem.classList.add('question-item');
        questionItem.innerHTML =` <p><strong>Q:</strong> ${question}</p><p><strong>A:</strong> Please wait for an answer...</p>`;
        questionList.appendChild(questionItem);
    }
});
