(function () {
    const savedSettings = JSON.parse(localStorage.getItem('latestSettings')) || {};

    const defaultSettings = {
        backgroundColor: '',
        fontColor: '',
        headerColor: '',
        gameblockFontColor: '',
        gradient: '',
        backgroundURL: '',
        backgroundAttachment: 'fixed',  // Can be 'fixed' or 'scroll'
        imageSize: 100,
        fitToViewport: false,
        rotate: 0,
        transparency: 100
    };

    const settings = Object.assign({}, defaultSettings, savedSettings);

    // Log all settings from localStorage
    console.log("Settings loaded from localStorage (startingsettingsloader.js):", settings);

    // Find the #background container
    const backgroundDiv = document.getElementById('background');

    // Set common styles for the background
    backgroundDiv.style.top = '0';
    backgroundDiv.style.left = '0';
    backgroundDiv.style.width = '100vw';
    backgroundDiv.style.height = '100vh';
    backgroundDiv.style.zIndex = '-1';  // Ensure it's behind other content
    backgroundDiv.style.backgroundSize = 'cover';
    backgroundDiv.style.backgroundPosition = 'center';
    backgroundDiv.style.transition = 'all 0.3s ease';
    backgroundDiv.style.transform = `rotate(${settings.rotate}deg)`;  // Apply rotation
    backgroundDiv.style.backgroundSize = settings.fitToViewport ? '100% auto' : `${settings.imageSize}%`;

    // Apply background image or gradient to the #background div
    if (settings.backgroundURL) {
        backgroundDiv.style.backgroundImage = `url(${settings.backgroundURL})`;
    } else if (settings.gradient) {
        backgroundDiv.style.backgroundImage = `linear-gradient(${settings.gradient})`;
    } else {
        backgroundDiv.style.backgroundColor = settings.backgroundColor || 'inherit';  // Apply background color if no image or gradient
    }

    // Apply background attachment and handle scroll/fixed behavior
    if (settings.backgroundAttachment === 'fixed') {
        backgroundDiv.style.position = 'fixed';  // Make the background fixed in place
    } else {
        backgroundDiv.style.position = 'absolute';  // Allow the background to scroll with the page
    }

    console.log("Styles before applying settings (startingsettingsloader.js):", {
        BackgroundPosition: backgroundDiv.style.position,
        backgroundAttachment: backgroundDiv.style.backgroundAttachment,
        backgroundSize: backgroundDiv.style.backgroundSize
    });

    // Apply font and header colors
    const inlineStyles = `
    body {
      background-color: ${settings.backgroundColor || 'inherit'};
      color: ${settings.fontColor || 'inherit'};
    }
    header {
      background-color: ${settings.headerColor || 'inherit'};
    }
    .game-button a, .title {
      color: ${settings.gameblockFontColor || 'inherit'};
    }
  `;

    const styleTag = document.createElement('style');
    styleTag.innerHTML = inlineStyles;
    document.head.appendChild(styleTag);

    // Apply font color to all text inside the header
    const headerElements = document.querySelectorAll('header, header *');  // Select header and all its child elements
    headerElements.forEach(el => {
        el.style.color = settings.fontColor || 'inherit';
    });

    // Apply gameblock font color to all elements with class "title"
    const titleStuff = document.querySelectorAll('.title');
    titleStuff.forEach(el => {
        el.style.color = settings.gameblockFontColor || 'inherit';
    });

    console.log("Styles after applying settings (startingsettingsloader.js):", {
        BackgroundPosition: backgroundDiv.style.position,
        backgroundAttachment: backgroundDiv.style.backgroundAttachment,
        backgroundSize: backgroundDiv.style.backgroundSize
    });

})();
