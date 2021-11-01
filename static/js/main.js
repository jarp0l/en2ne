var io = new InputClass();

function keyPressed() {
    var val = document.getElementById('en-input').value;
    io.takeInput(val);
}

function clearBtnPressed() {
    document.getElementById('en-input').value = '';
    document.getElementById('output').value = '';
}

var clipboard = new ClipboardJS('#copy-button');

clipboard.on('success', function (event) {
    event.trigger.textContent = 'Copied!';
    window.setTimeout(function () {
        event.trigger.textContent = 'Copy';
        event.clearSelection();
    }, 2000);
});

clipboard.on('error', function (event) {
    if (document.getElementById('output').value.length != 0) {
        event.trigger.textContent = 'Error! Press Ctrl+C to copy';
        window.setTimeout(function () {
            event.trigger.textContent = 'Copy';
            event.clearSelection();
        }, 2000);
    }
});