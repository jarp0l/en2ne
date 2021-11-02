function constructURL() {
    return window.location.origin + window.location.pathname + '?input=' + btoa(document.getElementById('en-input').value); // base64 encode input
}


var io = new InputClass();

function keyPressed() {
    var val = document.getElementById('en-input').value;
    io.takeInput(val);
}

function clearBtnPressed() {
    document.getElementById('en-input').value = '';
    document.getElementById('output').value = '';
}

function checkQueryStr() {
    let queryStr = new URLSearchParams(window.location.search);
    if (queryStr.has('input')) {
        let input = queryStr.get('input');
        decodedInput = atob(input); // base64 decode input
        document.getElementById('en-input').value = decodedInput;
        document.getElementById('convert-button').click();
        document.getElementById('input-url').value = constructURL();
    }
}


let clipboard = new ClipboardJS('#copy-button')

clipboard.on('success', function (event) {
    let previousVal = document.getElementById('copy-button').textContent;
    event.trigger.textContent = 'Copied!';
    window.setTimeout(function () {
        event.trigger.textContent = previousVal;
        event.clearSelection();
    }, 1000);
});

clipboard.on('error', function (event) {
    if (document.getElementById('output').value.length != 0) {
        event.trigger.textContent = 'Error! Press Ctrl+C to copy';
        window.setTimeout(function () {
            event.trigger.textContent = previousVal;
            event.clearSelection();
        }, 1000);
    }
});


let clipboardShareBtn = new ClipboardJS('#share-btn', {
    text: function () {
        return window.location.origin + window.location.pathname + '?input=' + btoa(document.getElementById('en-input').value)
    } // base64 encode input
});

clipboardShareBtn.on('success', function (event) {
    let previousVal = document.getElementById('share-btn').textContent;
    event.trigger.textContent = 'Copied!';
    document.getElementById('input-url').value = constructURL();
    document.getElementById('input-url').select();
    window.setTimeout(function () {
        event.trigger.textContent = previousVal;
        event.clearSelection();
    }, 1000);
});


let checkbox = document.getElementById('auto-convert-checkbox');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        document.getElementById('en-input').setAttribute('onkeyup',
            'keyPressed()');

        document.getElementById('convert-button').click();
    } else {
        document.getElementById('en-input').removeAttribute('onkeyup');
    }
});