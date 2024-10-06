// GET Request
document.querySelector('#getButton').addEventListener('click', getData);
function getData() {
const resultBox = document.querySelector('#getResult');
resultBox.textContent = 'Running GET request...';
fetch('https://jsonplaceholder.typicode.com/photos/2')
    .then(response => response.json())
    .then(data => {
    resultBox.textContent = JSON.stringify(data, null, 2);
    console.log(resultBox)
    })
    .catch(error => {
    resultBox.textContent = 'Error fetching data: ' + error;
    });
}
