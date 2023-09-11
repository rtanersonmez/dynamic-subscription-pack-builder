let packages = document.querySelector("#packages");
let properties = document.querySelector("#properties");

function createInput(type, name, className, id) {
    let input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.className = className || '';
    input.id = id;
    return input;
}

function getLastIdValue(parent, name) {
    let inputs = parent.querySelectorAll(`input[name='${name}[]']`);
    let lastInputId = inputs[inputs.length - 1].id;
    return parseInt(lastInputId.split("-")[1]);
}

function newPack() {
    let newTd = document.createElement("td");
    let newInput = createInput("text", "pack[]", "form-control", "pack-" + (getLastIdValue(packages, "pack") + 1));
    newTd.appendChild(newInput);
    packages.appendChild(newTd);

    let propertiesChild = properties.querySelectorAll("tr");
    propertiesChild.forEach(function (pc) {
        let element = document.createElement("td");
        let inp = createInput("checkbox", "check[]", '', "prop-" + newInput.id);
        element.append(inp);
        pc.append(element);
    });
    
    updateJSON();
}

function newProperty() {
    let newTd = document.createElement("td");
    let newTr = document.createElement("tr");

    let newInput = createInput("text", "property[]", "form-control", "property-" + (getLastIdValue(properties, "property") + 1));
    newTd.appendChild(newInput);
    newTr.appendChild(newTd);

    packages.querySelectorAll("td").forEach(function (pc) {
        if (pc.id !== "packName") {
            let idd = pc.querySelector("input").id.split("-")[1];
            let element = document.createElement("td");
            let newCheckbox = createInput("checkbox", "check[]", '', "prop-pack-" + idd);
            element.append(newCheckbox);
            newTr.append(element);
        }
    });

    properties.appendChild(newTr);
    updateJSON();
}

function updateJSON() {
    let data = {
        packs: [],
        properties: []
    };

    packages.querySelectorAll("td input[name='pack[]']").forEach(pack => {
        data.packs.push({
            id: pack.id,
            value: pack.value
        });
    });

    properties.querySelectorAll("tr").forEach(row => {
        let propertyInputs = row.querySelectorAll("input");
        let propertyObj = {
            property: {
                id: propertyInputs[0].id,
                value: propertyInputs[0].value
            },
            checkboxes: []
        };
        
        for (let i = 1; i < propertyInputs.length; i++) {
            propertyObj.checkboxes.push({
                id: propertyInputs[i].id,
                checked: propertyInputs[i].checked
            });
        }

        data.properties.push(propertyObj);
    });

    document.getElementById("jsonData").value = JSON.stringify(data);
}

function loadFromJSON() {
    let data = JSON.parse(document.getElementById("jsonData").value);
    if (!data) return;

    // Clear existing data
    while (packages.firstChild) {
        packages.removeChild(packages.firstChild);
    }
    while (properties.firstChild) {
        properties.removeChild(properties.firstChild);
    }

    // Add header to packages
    let headerTd = document.createElement("td");
    headerTd.id = "packName";
    headerTd.innerText = "Paket Adı";
    packages.appendChild(headerTd);

    // Load packages
    data.packs.forEach(pack => {
        let newTd = document.createElement("td");
        let newInput = createInput("text", "pack[]", "form-control", pack.id);
        newInput.value = pack.value;
        newTd.appendChild(newInput);
        packages.appendChild(newTd);
    });

    // Load properties
    data.properties.forEach(prop => {
        let newTr = document.createElement("tr");

        // Property name
        let newTd = document.createElement("td");
        let newInput = createInput("text", "property[]", "form-control", prop.property.id);
        newInput.value = prop.property.value;
        newTd.appendChild(newInput);
        newTr.appendChild(newTd);

        // Checkboxes
        prop.checkboxes.forEach(checkbox => {
            let td = document.createElement("td");
            let inp = createInput("checkbox", "check[]", '', checkbox.id);
            inp.checked = checkbox.checked;
            td.append(inp);
            newTr.append(td);
        });

        properties.appendChild(newTr);
    });
}

let tableOfPack = document.getElementById("tableOfPack");
let observer = new MutationObserver(function (mutations) {
    updateJSON();
});
let config = { attributes: true, childList: true, CharacterData: true, subtree: true };
observer.observe(tableOfPack, config);

function addInputListener(input) {
    input.addEventListener('input', function () {
        console.log('Bir input değeri değişti:', input.value, " - ", input.id);
        updateJSON();
    });
}
tableOfPack.querySelectorAll('input').forEach(addInputListener);

function manualUpdate() {
    updateJSON();
}

function deleteProperty(button) {
    // Silme işlemi
    let tr = button.parentElement.parentElement; 
    tr.parentNode.removeChild(tr);
    
    // JSON güncelle
    updateJSON();
}

function deletePack(button) {
    // Silme işlemi
    let td = button.parentElement;
    let index = Array.from(td.parentNode.children).indexOf(td); // Bulunan td'nin indexi
    
    td.parentNode.removeChild(td); // Paket adını sil

    // Aynı sütunda olan diğer özellikler için checkboxları sil
    let propTrs = document.querySelectorAll("#properties tr");
    propTrs.forEach(tr => {
        tr.removeChild(tr.children[index]);
    });

    // JSON güncelle
    updateJSON();
}


document.addEventListener('DOMContentLoaded', function() {
    let jsonDataValue = document.getElementById("jsonData").value;
    if (jsonDataValue) {
        loadFromJSON();
    }
});


// silme işlemi için 2 fonksiyon bıraktım
// <button class="btn btn-danger" onclick="deletePack(this)">Sil</button> 
// şeklinde dilediğin gibi kullanabilirsin