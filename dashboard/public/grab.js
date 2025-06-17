let inside = document.getElementById("jsonFile");

Object.prototype.getByIndex = function(index) {
    return this[Object.keys(this)[index]];
};

fetch('test.json')
.then(response => response.json())
.then(data => {
    var lengthOf = Object.keys(data).length;
    var where = 0;

    for (var i = 0; i < lengthOf; i++) {
        var name = Object.keys(data);
        inside.innerHTML += `<div class="tt">
        <div class="td">${name[where]}</div>`;
        keyValue = data.getByIndex(i);
        for (var j = 0; j < 2; j++) {
            inside.innerHTML += `<div class="td">${keyValue.getByIndex(j)}</div>`;
        }
        inside.innerHTML += `</div>`;
        where++;
    }
}).catch(err => {
    alert(`Error. Please fix`);
});