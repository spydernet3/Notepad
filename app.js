function formatText(command) {
    document.execCommand(command, false, null);
}

function insertLink() {
    const url = prompt("Enter the URL:");
    document.execCommand('createLink', false, url);
}

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    // Logic to handle file upload
}

function exportDocument() {
    // Logic to export editor content as PDF
}
