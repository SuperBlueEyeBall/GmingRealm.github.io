window.onload = () => {
    const savedSettings = JSON.parse(localStorage.getItem('latestSettings')) || {};

    // Clear existing background styles first to avoid conflicts
    document.body.style.background = '';
    document.body.style.backgroundImage = '';

    // Apply background image if set and clear gradient
    if (savedSettings.backgroundURL) {
        document.body.style.backgroundImage = `url(${savedSettings.backgroundURL})`;
        document.body.style.backgroundSize = savedSettings.fitToViewport ? '100% auto' : `${savedSettings.imageSize}%`;
        document.body.style.backgroundAttachment = savedSettings.backgroundAttachment || 'fixed'; // Default to 'fixed'
    }

    // Apply background gradient if set
    if (savedSettings.gradient) {
        const gradientSize = savedSettings.imageSize; // Use imageSize to control gradient size
        document.body.style.backgroundImage = `linear-gradient(${savedSettings.gradient})`;
        document.body.style.backgroundSize = `${gradientSize}%`; // Control the gradient size with the imageSize setting
        document.body.style.backgroundAttachment = savedSettings.backgroundAttachment || 'fixed';
    }

    // Apply background color only if no gradient or image is used
    if (!savedSettings.backgroundURL && !savedSettings.gradient && savedSettings.backgroundColor) {
        document.body.style.backgroundColor = savedSettings.backgroundColor;
    }

    // Apply header color
    const header = document.querySelector('header');
    if (header && savedSettings.headerColor) {
        header.style.backgroundColor = savedSettings.headerColor;
    }

    // Apply font color (for all text in the body)
    if (savedSettings.fontColor) {
        document.body.style.color = savedSettings.fontColor;

        // Apply font color specifically for all text elements (buttons, inputs, etc.)
        const textElements = document.querySelectorAll('body, button, input, h1, h2, h3, p');
        textElements.forEach(el => {
            el.style.color = savedSettings.fontColor;
        });
    }
};
