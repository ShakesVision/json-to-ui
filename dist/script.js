// const jsonUrl = "https://jsonplaceholder.typicode.com/todos/";
const jsonUrl = prompt("Enter the URL of the JSON data:");
let data;
fetch(jsonUrl)
    .then(response => response.json())
    .then(res => {
data = res;

const jsonTree = $('#json-tree');
jsonTree.JSONView(data,{collapsed: true});
});

const convertButton = document.getElementById('convert');
convertButton.addEventListener('click', () => {
  const selectedPropertiesInput = document.querySelector('.selected-properties');
  const selectedProperties = selectedPropertiesInput.value.split(',');
  const targetElement = document.getElementById('result');
  targetElement.innerHTML = ''; // clear any existing content in the result div
  displaySelectedProperties(data, selectedProperties, targetElement);
});

function displaySelectedProperties(data, selectedProperties, targetElement) {
  // Loop through the data array
  for (let i = 0; i < data.length; i++) {
    const objectData = data[i];
    // Create a new p element for each selected property and append to the target element
    for (let j = 0; j < selectedProperties.length; j++) {
      const propertyName = selectedProperties[j];
      const propertyValue = objectData[propertyName];
      const newP = document.createElement('p');
      newP.id = propertyName;
      newP.textContent = propertyValue;
      targetElement.appendChild(newP);
    }
  }
}