// --- FEEDBACK FORM ---
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

const drawerForm = document.querySelector('.drawer-form');

if (drawerForm) {
    drawerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
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
}


// --- REGISTRATION & KIOSK  ---

function generateGreeting(name, age) {
    let status = "";
    if (age < 18) {
        status = "Minor";
    } else {
        status = "Adult";
    }
    return `Hello, ${name}! You are ${age} years old and classified as an ${status}. Welcome to Cafélyr!`;
}

const activity2Form = document.getElementById('activity2Form');
const act2FullName = document.getElementById('act2FullName');
const act2Age = document.getElementById('act2Age');
const act2Email = document.getElementById('act2Email');
const act2Password = document.getElementById('act2Password');
const act2Msg = document.getElementById('act2Msg');

const registrationSection = document.getElementById('registrationSection');
const kioskSection = document.getElementById('kioskSection');


const accName = document.getElementById('accName');
const accAge = document.getElementById('accAge');
const accStatus = document.getElementById('accStatus');
const accEmail = document.getElementById('accEmail');
const accPassword = document.getElementById('accPassword');


if (activity2Form) {
    activity2Form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullNameVal = act2FullName.value.trim();
        const ageVal = act2Age.value.trim();
        const emailVal = act2Email.value.trim();
        const passwordVal = act2Password.value.trim();

        act2Msg.classList.remove('hidden');

        if (fullNameVal === "" || ageVal === "" || emailVal === "" || passwordVal === "") {
            act2Msg.className = "error";
            act2Msg.innerHTML = "<strong>Error:</strong> Please fill in all required fields (Name, Age, Email, Password).";
            return;
        }

        const ageNumber = parseInt(ageVal);
        if (isNaN(ageNumber) || ageNumber <= 0) {
            act2Msg.className = "error";
            act2Msg.innerHTML = "<strong>Error:</strong> Please enter a valid age.";
            return;
        }

        let statusText = ageNumber < 18 ? "Minor" : "Adult";
        const greetingText = generateGreeting(fullNameVal, ageNumber);
        
        accName.textContent = fullNameVal;
        accAge.textContent = ageNumber;
        accStatus.textContent = statusText;
        accEmail.textContent = emailVal;
        accPassword.textContent = "•••••••• (secure)";

        act2Msg.className = "success";
        act2Msg.innerHTML = `<strong>Success!</strong> ${greetingText}<br>Proceeding to kiosk menu...`;


        setTimeout(function() {
            if (registrationSection) {
                registrationSection.classList.add('hidden');
            }
            if (kioskSection) {
                kioskSection.classList.remove('hidden');
            }
        }, 1500);
    });
}