let inside = document.getElementById("jsonFile");

fetch('/data/index.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`ERROR: ${response.error}`)
        }
        return response.json()
    })
    .then(data => {
    for (let key in data) {
        inside.innerHTML+=`<p>${key}, ${data[key]["subjects"]}, ${data[key]["fav"]}</p>`;
    }
    }).catch(err => {
    alert(err);
    });
