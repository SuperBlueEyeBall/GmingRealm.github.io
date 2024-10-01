function hidey() {
    alert(
        "Popups must be allowed to use this feature. If not allowed yet, we give you the prompt to enable, and then just press the hide tab button again to use the feature."
    );
    var openIn = prompt("Select the URL to open in\nType '1' for 'about:blank'\nType '2' for 'blob:*'\nIf invalid or blank, it will default to opening in 'about:blank'");
    if (openIn === null) {
        // User pressed Cancel, exit the function
        return;
    }

    var theURL = prompt(
        "Please enter a URL to show in your history instead of Shadow's Games\r\nMake sure to include https:// or http://\r\nLeave blank for Google Classroom"
    );
    if (theURL === null) {
        // User pressed Cancel, exit the function
        return;
    }

    var tabBar = prompt(
        "Please select a tab disguise by typing the corresponding letter\r\nLeave blank for Google Classroom\r\nc - Google Classroom\r\ng - Google\r\nb - Blank\r\nt - Custom"
    );
    if (tabBar === null) {
        // User pressed Cancel, exit the function
        return;
    }

    if (openIn === "1") {
        var tabIcon = "https://ssl.gstatic.com/classroom/favicon.png";
        var tabName = "Classes";                                            // About blank open
        var a = window.open("about:blank", '_blank');
    } else if (openIn === "2") {
        const blob = new Blob([/* your blob data */], {type: 'text/plain'});
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
    } else {
        var tabIcon = "https://ssl.gstatic.com/classroom/favicon.png";
        var tabName = "Classes";
        var a = window.open("about:blank", '_blank');
    }
    if (theURL == "" || theURL == null) {
        window.location.replace("https://classroom.google.com/h");
    } else {
        window.location.replace(theURL);
    }
}

// Set tab name and favicon

// Function to set tab name
function setTabName() {
  // Check if website allows cross-origin
  if (document.domain === window.location.hostname) {
    // Prompt user to choose tab name
    let tabName = prompt("Choose tab name. Press cancel to use the actual website's tab name.");
    if (tabName === null) {
      // If prompt was cancelled, set tab name to URL without protocol
      tabName = window.location.href.replace(/^https?:\/\//, "");
    }
    document.title = tabName;
  } else {
    // If website doesn't allow cross-origin, prompt user to set tab name
    let tabName = prompt("Set tab name:");
    document.title = tabName;
  }
}

// Function to set tab favicon
function setTabFavicon() {
  // Prompt user to choose tab favicon
  let faviconUrl = prompt("Choose tab favicon. Cancel to use actual website's favicon.");
  if (faviconUrl === null) {
    // If prompt was cancelled, try to find favicon
    let url = window.location.href;
    let faviconUrls = [
      url + "/favicon.ico",
      url + "/favicon.png",
      url + "/favicon.jpg",
      url.replace(/\/[^\/]+$/, "") + "/favicon.ico",
      url.replace(/\/[^\/]+$/, "") + "/favicon.png",
      url.replace(/\/[^\/]+$/, "") + "/favicon.jpg"
    ];
    for (let faviconUrl of faviconUrls) {
      fetch(faviconUrl)
        .then(response => {
          if (response.ok) {
            document.querySelector("link[rel='icon']").href = faviconUrl;
            return;
          }
        })
        .catch(() => {});
    }
    // If favicon not found, prompt user to set it from an image URL
    faviconUrl = prompt("Favicon not found. Set it from an image URL:");
    document.querySelector("link[rel='icon']").href = faviconUrl;
  } else {
    // If user chose a favicon URL, set it
    document.querySelector("link[rel='icon']").href = faviconUrl;
  }
  // Store favicon URL in local storage
  localStorage.setItem("faviconUrl", faviconUrl);
}

// Call functions
setTabName();
setTabFavicon();