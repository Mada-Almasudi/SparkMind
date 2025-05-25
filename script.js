// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Ensure the form exists
    const communityForm = document.getElementById('community-form');
    const postList = document.getElementById('post-list');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Check if necessary elements exist
    if (!communityForm || !postList || !confirmationMessage) {
        console.error("Error: Form or elements missing.");
        return;
    }

    // Handle form submission
    communityForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission to handle it dynamically

        // Get form field values
        const username = document.getElementById('username').value;
        const topic = document.getElementById('topic').value;
        const message = document.getElementById('message').value;

        // Basic validation: Ensure all fields are filled
        if (!username || !topic || !message) {
            alert("All fields are required.");
            return;
        }

        // Create a new post element dynamically
        const postItem = document.createElement('div');
        postItem.classList.add('post-card');
        postItem.innerHTML = `
            <div class="post-header">
                <span class="post-username">${username}</span>
                <span class="post-topic">${topic}</span>
            </div>
            <p class="post-message">${message}</p>
            <div class="post-footer">
                <button class="like-btn">Like</button>
                <button class="highlight-btn">Highlight</button>
            </div>
            <div class="post-status"></div>
        `;

        // Insert the new post at the top of the list
        postList.insertBefore(postItem, postList.firstChild);

        // Clear form fields after submission
        communityForm.reset();

        // Display a confirmation message
        confirmationMessage.textContent = `Post by ${username} added successfully!`;
        confirmationMessage.style.display = 'block';

        // Hide the confirmation message after 3 seconds
        setTimeout(() => {
            confirmationMessage.style.display = 'none';
        }, 3000);
    });

    // Handle likes and highlights for posts
    postList.addEventListener('click', function (e) {
        if (e.target.classList.contains('like-btn')) {
            const post = e.target.closest('.post-card');
            const status = post.querySelector('.post-status');
            status.textContent = 'You liked this post!';
            status.style.color = '#f39c12';
        }

        if (e.target.classList.contains('highlight-btn')) {
            const post = e.target.closest('.post-card');
            post.style.border = '2px solid #f39c12'; // Highlight the border
            post.style.backgroundColor = 'rgba(243, 156, 18, 0.1)'; // Light background color
        }
    });
});


// Functionality for Habit Page
const addHabitButton = document.querySelector('.adds-habit-form button');
const habitInput = document.querySelector('.adds-habit-form input');
const habitList = document.querySelector('.steps-list');

if (addHabitButton) {
    addHabitButton.addEventListener('click', function() {
        const habitText = habitInput.value.trim();
        if (habitText) {
            const habitItem = document.createElement('li');
            habitItem.classList.add('habit-item');
            habitItem.innerHTML = `
                <input type="checkbox" id="habit-${Date.now()}">
                <label for="habit-${Date.now()}">${habitText}</label>
                <span class="delete-btn">X</span>
            `;
            habitList.appendChild(habitItem);
            habitInput.value = ''; // Clear input after adding
        }
    });
}

// Handle deleting habits
habitList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});

// Handle form submission on Budget & Expense Tracker page (Example)
const budgetForm = document.querySelector('form[action="submit_budget"]');
if (budgetForm) {
    budgetForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from submitting for demonstration purposes
        const income = document.getElementById('income').value;
        const expense = document.getElementById('expense').value;
        const amount = document.getElementById('amount').value;
        const date = document.getElementById('date').value;
        const notes = document.getElementById('notes').value;
        console.log(`Budget Added: Income: ${income}, Expense: ${expense}, Amount: ${amount}, Date: ${date}, Notes: ${notes}`);
    });
};

// Functionality to change page content dynamically (optional)
const dynamicContentButton = document.querySelector('#dynamic-content-btn');
if (dynamicContentButton) {
    dynamicContentButton.addEventListener('click', function() {
        const dynamicContent = document.querySelector('#dynamic-content');
        dynamicContent.innerHTML = `<p>New dynamic content has been added! 🎉</p>`;
        dynamicContent.style.backgroundColor = 'lightblue';
    });
}
