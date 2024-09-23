(function () {
    const savedSettings = JSON.parse(localStorage.getItem('latestSettings')) || {};

    const defaultSettings = {
        backgroundColor: '#ffffff',
        fontColor: '#000000',
        headerColor: '#333333',
        gradient: '',
        backgroundURL: '',
        backgroundAttachment: 'fixed',
        imageSize: 100,
        fitToViewport: false
    };

    const settings = Object.assign({}, defaultSettings, savedSettings);

    const inlineStyles = `
    body {
      background-color: ${settings.backgroundColor};
      background-image: ${settings.backgroundURL ? `url(${settings.backgroundURL})` : (settings.gradient ? `linear-gradient(${settings.gradient})` : 'none')};
      background-size: ${settings.fitToViewport ? '100% auto' : `${settings.imageSize}%`};
      background-attachment: ${settings.backgroundAttachment};
      color: ${settings.fontColor};
    }
    header {
      background-color: ${settings.headerColor};
      color: ${settings.fontColor}; /* Apply font color to the header */
    }
  `;

    const styleTag = document.createElement('style');
    styleTag.innerHTML = inlineStyles;
    document.head.appendChild(styleTag);
})();
