function getURL() {
    let url = document.querySelector("#input-url").value;
    const API_KEY = 'ELi0PD9RQgEoA9EzcwpSug==tFCqZXRLwDbZH6gn';
    
    // Construct the API endpoint URL
    let apiUrl = 'https://api.api-ninjas.com/v1/whois?domain=' + encodeURIComponent(url);
    
    // Make the HTTP GET request
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-Api-Key':'ELi0PD9RQgEoA9EzcwpSug==tFCqZXRLwDbZH6gn'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response data
        console.log(data);
        // Assuming you want to display the result in some HTML element with id "result"
        document.querySelector("#result").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });
}
// Add event listener for form submission
document.getElementById("urlform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    getURL(); // Call the function to get exchange rates
}); 