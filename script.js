function copyToClipboard(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    const copySuccess = document.getElementById('copySuccess');
    copySuccess.style.opacity = '1';
    
    // Get the position of the button
    const buttonRect = button.getBoundingClientRect();
    
    // Position the "Copied!" message to the right of the button
    copySuccess.style.top = buttonRect.top + 'px';
    copySuccess.style.left = (buttonRect.right + 10) + 'px';

    setTimeout(() => {
        copySuccess.style.opacity = '0';
    }, 1500);
}

copyToClipboard(text, button);
