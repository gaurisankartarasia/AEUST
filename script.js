// enter modal open
 // Function to open the modal when the page loads
 $(document).ready(function() {
    $('#firstModal').modal('show');
  });
// <!-- disable ctrl + U -->
      
        document.addEventListener("keydown", function (e) {
  // Check if Ctrl key is pressed and the pressed key is 'u'
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault(); // Prevent the default action (viewing page source)
    // Optionally, you can display a custom message or take other actions here
  }
});

// <!-- dark js -->            
  
        const themeDropdown = document.getElementById('themeDropdown');
        const dropdownContent = themeDropdown.querySelector('.dropdown-content');
        const lightTheme = document.getElementById('lightTheme');
        const darkTheme = document.getElementById('darkTheme');

        // Retrieve the theme preference from localStorage
        const savedTheme = localStorage.getItem('theme');

        // If there's a saved theme, set the dropdown accordingly
        if (savedTheme) {
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
            }
        }

        themeDropdown.addEventListener('mouseenter', () => {
            dropdownContent.style.display = 'block';
        });

        themeDropdown.addEventListener('mouseleave', () => {
            dropdownContent.style.display = 'none';
        });

        lightTheme.addEventListener('click', () => {
            // Remove dark mode and save the theme preference to localStorage
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        });

        darkTheme.addEventListener('click', () => {
            // Add dark mode and save the theme preference to localStorage
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        });
  
        //   Connection lost
        function checkConnection() {
            var connectionLostElement = document.getElementById('connectionLost');
    
            function updateConnectionStatus() {
                if (navigator.onLine) {
                    // Connection is back
                    connectionLostElement.style.display = 'none';
                } else {
                    // Connection is lost
                    connectionLostElement.style.display = 'flex';
                }
            }
    
            // Initial check
            updateConnectionStatus();
    
            // Listen for online/offline events
            window.addEventListener('online', updateConnectionStatus);
            window.addEventListener('offline', updateConnectionStatus);
        }
    
        // Call the function on page load
        window.onload = checkConnection;

        // back to top

// Check if the user has scrolled down, show/hide the button accordingly
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById("back-to-top");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// Smoothly scroll to the top of the page when the button is clicked
document.getElementById("back-to-top").onclick = function () {
    scrollToTop();
};

function scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 10);
    }
}
// header text animation
 // Target the element you want to animate
 var textElement = document.getElementById('animated-text');

 // Set the text content
 textElement.innerText = 'We are Explorers!';

 // Split the text into individual characters
 var characters = textElement.innerText.split('');

 // Clear the original text content
 textElement.innerText = '';

 // Iterate through each character and create a span with the wave animation
 characters.forEach(function (char, index) {
     var span = document.createElement('span');
     span.innerText = char === ' ' ? '\u00A0' : char; // Use a non-breaking space for actual spaces
     span.classList.add('wave-animation');
     span.style.animationDelay = index * 0.1 + 's';
     textElement.appendChild(span);
 });
//  nimda sign simba simba repose
function sendMessage() {
    var userInput = document.getElementById("message-input").value;
    if (userInput.trim() === "") return;

    var chatMessages = document.getElementById("chat-messages");
    var userMessage = document.createElement("div");
    userMessage.innerHTML = `<strong>You:</strong> ${userInput}`;
    chatMessages.appendChild(userMessage);

    getChatGPTResponse(userInput);
    document.getElementById("message-input").value = "";
  }

  async function getChatGPTResponse(userInput) {
    var chatMessages = document.getElementById("chat-messages");
    var chatGPTMessage = document.createElement("div");
    chatGPTMessage.innerHTML = `<strong>Li2:</strong> ${await fetchChatGPTResponse(userInput)}`;
    chatMessages.appendChild(chatGPTMessage);
  }

  async function fetchChatGPTResponse(userInput) {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: userInput }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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',
          },
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error fetching ChatGPT response:', error);
      return 'I encountered an error. Please try again.';
    }
  }

  // Enable "Enter" key to send messages
  document.getElementById("message-input").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
