var keyCount = 1;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.getElementById("nav-button").onclick = function() {
    openNav();
};

function showAddKeyModal() {
    closeNav();
    document.getElementById("addKeyModal").style.display = "block";
}

function closeModal() {
    document.getElementById("addKeyModal").style.display = "none";
}

document.getElementById("KeyHolder").oninput = function() {
    // If there's any input in Key Holder, disable the Available checkbox
    var keyHolderValue = this.value.trim();
    var availableCheckbox = document.getElementById("available");
    if (keyHolderValue) {
        availableCheckbox.checked = false;
        availableCheckbox.disabled = true;
    } else {
        availableCheckbox.disabled = false;
    }
};

document.getElementById("available").onchange = function() {
    // If Available is checked, disable and clear the Key Holder input
    var keyHolderInput = document.getElementById("KeyHolder");
    if (this.checked) {
        keyHolderInput.value = "";
        keyHolderInput.disabled = true;
    } else {
        keyHolderInput.disabled = false;
    }
};

document.getElementById("submitKey").onclick = function() {
    var keyName = document.getElementById("keyName").value.trim();
    var KeyHolder = document.getElementById("KeyHolder").value.trim() || "Keypie"; // Use "Keypie" if KeyHolder is empty
    var available = document.getElementById("available").checked;

    // Validation checks
    if (!keyName) {
        document.getElementById("keyNameError").style.display = "block";
        return;
    } else {
        document.getElementById("keyNameError").style.display = "none";
    }

    if (!available && !KeyHolder) {
        document.getElementById("KeyHolderError").style.display = "block";
        return;
    } else {
        document.getElementById("KeyHolderError").style.display = "none";
    }

    // Determine which container to append the key to
    var containerId = available ? "availableKeysContainer" : "notAvailableKeysContainer";
    var container = document.getElementById(containerId);

    var div = document.createElement("div");
    div.className = "key-item";
    if (!available) {
        div.classList.add("not-available");
    }

    var keyInfo = document.createElement("h4");
    keyInfo.innerText = `Key: ${keyName}`;
    div.appendChild(keyInfo);

    var holderInfo = document.createElement("p");
    holderInfo.innerText = `Key Holder: ${KeyHolder}`;
    div.appendChild(holderInfo);

    var availabilityInfo = document.createElement("p");
    availabilityInfo.innerText = `Status: ${available ? "Available" : "Not Available"}`;
    div.appendChild(availabilityInfo);

    container.appendChild(div);

    // Resetting the form fields after submission
    document.getElementById("keyName").value = "";
    document.getElementById("KeyHolder").value = "";
    document.getElementById("KeyHolder").disabled = false;
    document.getElementById("available").checked = false;
    document.getElementById("available").disabled = false;

    // Close the modal after submission
    document.getElementById("addKeyModal").style.display = "none";
};

