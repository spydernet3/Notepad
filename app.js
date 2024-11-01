function formatText(command) {
    document.execCommand(command, false, null);
}

function insertLink() {
    const url = prompt("Enter the URL:");
    if (url) {
        document.execCommand('createLink', false, url);
    }
}

function createTable() {
    // Get number of rows and columns from user
    const rows = parseInt(prompt("Enter number of rows:"));
    const cols = parseInt(prompt("Enter number of columns:"));

    // Validate input
    if (!rows || !cols || rows <= 0 || cols <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    // Create table element
    const table = document.createElement("table");
    table.style.border = "1px solid #333";
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";

    // Populate table with rows and cells
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell();
            cell.textContent = " "; // Placeholder content
            cell.style.border = "1px solid #333";
            cell.style.padding = "5px";
        }
    }

    // Insert table into the editor
    const editor = document.getElementById("editor");
    editor.appendChild(table);
}

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    // Logic to handle file upload will be implemented here
}

function exportDocument() {
    // Logic to export editor content as PDF will be implemented here
    alert("Export functionality is not implemented yet.");
}
