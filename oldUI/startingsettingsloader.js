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

  const backgroundDiv = document.createElement('div');
  backgroundDiv.id = 'background';
  backgroundDiv.style.position = 'absolute';  // Ensure it can scroll
  backgroundDiv.style.top = '0';
  backgroundDiv.style.left = '0';
  backgroundDiv.style.width = '100vw';
  backgroundDiv.style.height = `${document.body.scrollHeight}px`;  // Set to full page height
  backgroundDiv.style.zIndex = '-1';  // Ensure it's behind other content
  backgroundDiv.style.backgroundSize = 'cover';
  backgroundDiv.style.backgroundPosition = 'center';
  backgroundDiv.style.transition = 'all 0.3s ease';
  backgroundDiv.style.transform = `rotate(${settings.rotate}deg)`;  // Apply rotation
  backgroundDiv.style.backgroundSize = settings.fitToViewport ? '100% auto' : `${settings.imageSize}%`;

  // ...

  // Apply header color
  document.querySelector('header').style.backgroundColor = settings.headerColor;
  // document.querySelector('header').style.boxShadow = 0,2px,5px,rgba(0, 0, 0, 0.1);


  // Apply header font color (using font color settings)
  document.querySelector('header').style.color = settings.fontColor;

  // Apply game block font color to the body
  document.body.style.color = settings.gameblockFontColor;

  document.body.style.color = settings.mainFontColor || settings.gameblockFontColor;

  // ...

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

  document.body.appendChild(backgroundDiv);  // Append the background div to the body

  console.log("Styles after applying settings (startingsettingsloader.js):", {
    BackgroundPosition: backgroundDiv.style.position,
    backgroundAttachment: settings.backgroundAttachment,
    backgroundSize: backgroundDiv.style.backgroundSize
  });

})();