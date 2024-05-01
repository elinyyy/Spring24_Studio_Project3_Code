fetch('https://internal-accidental-aspen.glitch.me/data.json')
  .then(response => response.json())
  .then(data => {
    // Do something with the JSON data
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });