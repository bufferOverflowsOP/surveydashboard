let inside = document.getElementById("jsonFile");

// Get data
fetch('/data/index.json')
    // Make sure response is good, kill yourself if it isn't
    .then(response => {
        if (!response.ok) {
            throw new Error(`ERROR: ${response.error}`)
        }
        return response.json()
    })
    .then(data => {
    for (let key in data) {
        // Add table entry for each name in data
        inside.insertAdjacentHTML('afterbegin', `
            <tr>
                <td>${key}</td>
                <td>${data[key]["subjects"]}</td>
                <td>${data[key]["fav"]}</td>
            </tr>`
        )
    }
    }).catch(err => {
    alert(err);
    });
