// Chatbot functionality for ChatGPT integration

// Function to send a message to the ChatGPT API
async function sendMessageToChatGPT(message) {
    const apiKey = 'uaJnRyCzhzd1ETMyP78gqxXs5FABEYup'; // Replace with your actual OpenAI API key
    const url = 'https://api.openai.com/v1/chat/completions';
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: message }],
        }),
    });
    
    const data = await response.json();
    return data.choices[0].message.content; // Return the chatbot's response
}

// Function to handle sending a message and displaying the chatbot response
async function handleChatbotMessage() {
    const userMessage = document.getElementById('chatInput').value; // Get user inputs
    if (!userMessage) return; // Exit if no message is entered

    const chatBox = document.getElementById('chatBox');
    
    // Create and display user's message
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('user-message');
    userMessageElement.textContent = userMessage;
    chatBox.appendChild(userMessageElement);

    document.getElementById('chatInput').value = ''; // Clear input field

    // Fetch response from ChatGPT
    const botResponse = await sendMessageToChatGPT(userMessage);

    // Create and display bot's response
    const botMessageElement = document.createElement('div');
    botMessageElement.classList.add('bot-message');
    botMessageElement.textContent = botResponse;
    chatBox.appendChild(botMessageElement);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Event listener for sending the message when the button is clicked
document.getElementById('chatSendButton').addEventListener('click', handleChatbotMessage);

// Draggable functionality for the chatbot
const chatContainer = document.querySelector('.chat-container');
let isDragging = false;
let offsetX, offsetY;

// Mouse down event to initiate dragging
chatContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - chatContainer.getBoundingClientRect().left;
    offsetY = e.clientY - chatContainer.getBoundingClientRect().top;
});

// Mouse move event to move the chatbot
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        chatContainer.style.left = `${e.clientX - offsetX}px`;
        chatContainer.style.top = `${e.clientY - offsetY}px`;
    }
});

// Mouse up event to stop dragging
document.addEventListener('mouseup', () => {
    isDragging = false;
});
