// Placeholder for any JavaScript you might need.
console.log("Page loaded");

const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('data_file');
const fileNameDisplay = document.getElementById('file-name');

if (dropZone) {
  dropZone.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      fileNameDisplay.textContent = `Selected File: ${selectedFile.name}`;
    }
  });

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
    }, false);
  });

  ['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => {
      dropZone.classList.add('dragover');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => {
      dropZone.classList.remove('dragover');
    }, false);
  });

  dropZone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length > 0) {
      fileInput.files = files;
      const selectedFile = files[0];
      fileNameDisplay.textContent = `Selected File: ${selectedFile.name}`;
    }
  });
}
