const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const categoryInput = document.getElementById('categoryInput');
const ratingInput = document.getElementById('ratingInput');
const commentsInput = document.getElementById('commentsInput');

const submitBtn = document.getElementById('submitBtn');
const errorMsg = document.getElementById('errorMsg');
const output = document.getElementById('output');

const outputName = document.getElementById('outputName');
const outputEmail = document.getElementById('outputEmail');
const outputCategory = document.getElementById('outputCategory');
const outputRating = document.getElementById('outputRating');
const outputComments = document.getElementById('outputComments');

const form = document.querySelector('.drawer-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    submitBtn.click();
});

submitBtn.addEventListener('click', function() {

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const category = categoryInput.value;
    const rating = parseInt(ratingInput.value);
    const comments = commentsInput.value.trim();

    if (!name || !email || !category || isNaN(rating) || !comments) {
        errorMsg.textContent = "Please fill in all fields correctly.";
        output.classList.add('hidden');
        return;
    }

    if (rating < 1 || rating > 5) {
        errorMsg.textContent = "Rating must be between 1 and 5.";
        output.classList.add('hidden');
        return;
    }

    errorMsg.textContent = "";

    let ratingDescription = rating >= 4 ? "Excellent" : rating === 3 ? "Good" : rating >= 2 ? "Average" : "Poor";
    let customThankYouMessage = `Thank you noting: "${comments.substring(0, 20)}..." Your feedback is valuable to us!`;

    outputName.textContent = name;
    outputEmail.textContent = email;
    outputCategory.textContent = category;
    outputRating.textContent = `${rating} Stars (${ratingDescription})`;
    outputComments.textContent = customThankYouMessage;

    output.classList.remove('hidden');

});