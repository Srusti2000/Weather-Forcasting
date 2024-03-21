const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form input values
  const soilQuality = document.querySelector('#soil-quality').value;
  const humidity = document.querySelector('#humidity').value;
  const rainfall = document.querySelector('#rainfall').value;
  const cropType = document.querySelector('#crop-type').value;
  
  // Call API to get weather forecast and crop advisory based on input values
  // Use the fetched data to display alerts and advisories in the resultDiv
  
  // Example code to display output in resultDiv
  resultDiv.innerHTML = `<p>Weather Forecast:</p>
                         <ul>
                           <li>Sunny with occasional showers in the afternoon.</li>
                           <li>High humidity expected in the morning.</li>
                         </ul>
                         <p>Crop Advisory:</p>
                         <ul>
                           <li>${cropType} crop requires well-drained soil with pH between 6.0 and 7.5.</li>
                           <li>Apply recommended fertilizers and pesticides to prevent pests and diseases.</li>
                         </ul>`;
});
