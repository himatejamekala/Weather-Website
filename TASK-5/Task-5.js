// index.js
document.getElementById('add').addEventListener('click', function() {
  const city = document.getElementById('cityinput').value;
  const apiKey = '6f21d5193eb8db97c039fc4e53c23723'; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          document.getElementById('cityoutput').textContent = data.name;
          document.getElementById('description').textContent = data.weather[0].description;
          document.getElementById('temp').textContent = `Temperature: ${data.main.temp}°C`;
          document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
      })
      .catch(error => {
          console.error('Error fetching the weather data:', error);
          alert('Could not retrieve weather data. Please try again.');
      });
});