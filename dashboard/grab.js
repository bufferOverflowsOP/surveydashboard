let inside = document.getElementById("jsonFile");

fetch('../data/index.json')
.then(response => response.json())
.then(data => {
    inside.innerHTML = data.name;
}).catch(err => {
    alert(`Error. Please fix`);
});
