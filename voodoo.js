(function () {
    var previewPane = document.getElementById("previewPane");
    var editor = document.getElementById("editor");
    var editorForm = document.getElementById('editorForm');
    var submitButton = document.getElementById('submitButton');
    var inputURL = document.getElementById('inputURL');
    
    function renderPreview () {
        previewPane.innerHTML = marked(editor.value);
    }
    function submitForm () {
        editorForm.setAttribute('action', inputURL.value);
        editorForm.submit();
    }
    
    inputURL.value = editorForm.getAttribute('action');
    editor.addEventListener("input", renderPreview);
    submitButton.addEventListener("click", submitForm);
    renderPreview();
}());