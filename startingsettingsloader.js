(function () {
  const savedSettings = JSON.parse(localStorage.getItem('latestSettings')) || {};

  const defaultSettings = {
    backgroundColor: '',
    fontColor: '',
    headerColor: '',
    gameblockFontColor: '',
    gradient: '',
    backgroundURL: '',
    backgroundAttachment: 'fixed',
    imageSize: 100,
    fitToViewport: false,
    rotate: 0,
    transparency: 100
  };

  const settings = Object.assign({}, defaultSettings, savedSettings);

  // Log all settings from localStorage
  console.log("Settings loaded from localStorage (startingsettingsloader.js):", settings);

  // Dynamically create the #background container
  const backgroundDiv = document.createElement('div');
  backgroundDiv.id = 'background';
  backgroundDiv.style.position = 'fixed';
  backgroundDiv.style.top = '0';
  backgroundDiv.style.left = '0';
  backgroundDiv.style.width = '100vw';
  backgroundDiv.style.height = '100vh';
  backgroundDiv.style.zIndex = '-1'; // Ensure it's behind other content
  backgroundDiv.style.backgroundSize = 'cover';
  backgroundDiv.style.backgroundPosition = 'center';
  backgroundDiv.style.transition = 'all 0.3s ease';
  // backgroundDiv.style.opacity = settings.transparency / 100; // Apply transparency
  backgroundDiv.style.transform = `rotate(${settings.rotate}deg)`; // Apply rotation
  document.body.prepend(backgroundDiv); // Add the div to the top of the body

  console.log("Styles before applying settings (startingsettingsloader.js):", {
    BackgroundPosition: backgroundDiv.style.position,
    backgroundAttachment: backgroundDiv.style.backgroundAttachment,
    backgroundSize: backgroundDiv.style.backgroundSize
  });

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

  // Apply background image or gradient to the #background div
  if (settings.backgroundURL) {
    backgroundDiv.style.backgroundImage = `url(${settings.backgroundURL})`;
  } else if (settings.gradient) {
    backgroundDiv.style.backgroundImage = `linear-gradient(${settings.gradient})`;
  } else {
    backgroundDiv.style.backgroundColor = settings.backgroundColor || 'inherit'; // Apply background color if no image or gradient
  }

  // Apply background attachment (scroll or fixed)
  backgroundDiv.style.backgroundAttachment = settings.backgroundAttachment; // Can be 'scroll' or 'fixed'

  backgroundDiv.style.backgroundSize = settings.fitToViewport ? '100% auto' : `${settings.imageSize}%`;


  // Apply font color to all text inside the header
  const headerElements = document.querySelectorAll('header, header *'); // Select header and all its child elements
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
