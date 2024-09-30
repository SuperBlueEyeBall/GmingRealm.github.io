document.querySelector("title").innerHTML = "Google";

function hidey() {
    var theURL = prompt(
        "Please enter a URL to show in your history instead of Shadow's Games\r\nMake sure to include https:// or http://\r\nLeave blank for Google Classroom"
    );
    var tabBar = prompt(
        "Please select a tab disguise by typing the corresponding letter\r\nLeave blank for Google Classroom\r\nc - Google Classroom\r\ng - Google\r\nb - Blank\r\nt - Custom"
    );
    if (tabBar !== "c" && tabBar !== "g" && tabBar !== "t" && tabBar !== "b") {
        var tabIcon = "https://ssl.gstatic.com/classroom/favicon.png";
        var tabName = "Classes";
    } else if (tabBar == "c") {
        var tabIcon = "https://ssl.gstatic.com/classroom/favicon.png";
        var tabName = "Classes";
    } else if (tabBar == "g") {
        var tabIcon = "https://google.com/favicon.ico";
        var tabName = "Google";
    } else if (tabBar == "t") {
        var tabIcon = prompt("URL for icon:");
        var tabName = prompt("Tab Name");
    } else if (tabBar == "" || tabBar == null) {
        var tabIcon = "https://ssl.gstatic.com/classroom/favicon.png";
        var tabName = "Classes";
    } else if (tabBar == "b") {
        var tabIcon =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Antonia_Sautter_Creations.png/120px-Antonia_Sautter_Creations.png";
        var tabName = "&lrm;";
    }
    function inFrame() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return !0;
        }
    }
    if (1 != inFrame()) {
        alert(
            "You must allow popups for this function to work. We will give you the prompt to allow popups if its not allowed yet. If it is, then you can disregard this messgage. If its disabled, then enable it through the prompt and press the button again. | It will take a second to load. Give it some time."
        );
        var testPopup = window.open("", "_blank", "toolbar=yes");
        if (testPopup && testPopup.closed) {
            // Do nothing, the browser will display a prompt asking the user to allow popups
        } else {
            // If the popup is not blocked, close it and proceed with the original code
            testPopup.close();
            var a = window.open("about:blank", "_blank");
            a.document.documentElement.innerHTML =
                "<!DOCTYPE html><html><title>" +
                tabName +
                '</title><link rel="icon" type="image/png" href=' +
                tabIcon +
                '><style>body {margin:0;}</style><body><iframe height="100%" width="100%" src="' +
                window.location.href +
                '"frameborder="0" allowfullscreen></iframe></body></html>';
            if (theURL == "" || theURL == null) {
                window.location.replace("https://classroom.google.com/h");
            } else {
                window.location.replace(theURL);
            }
        }
    }
}
/*
document.querySelector("title").innerHTML = "Google";

function hidey() {
    var theURL = prompt(
        "Please enter a URL to show in your history instead of Shadow's Games\r\nMake sure to include https:// or http://\r\nLeave blank for Google Classroom"
    );
    var tabBar = prompt(
        "Please select a tab disguise by typing the corresponding letter\r\nLeave blank for Google Classroom\r\nc - Google Classroom\r\ng - Google\r\nb - Blank\r\nt - Custom"
    );
    if (tabBar !== "c" && tabBar !== "g" && tabBar !== "t" && tabBar !== "b") {
        var tabIcon = "https://ssl.gstatic.com/classroom/favicon.png";
        var tabName = "Classes";
    } else if (tabBar == "c") {
        var tabIcon = "https://ssl.gstatic.com/classroom/favicon.png";
        var tabName = "Classes";
    } else if (tabBar == "g") {
        var tabIcon = "https://google.com/favicon.ico";
        var tabName = "Google";
    } else if (tabBar == "t") {
        var tabIcon = prompt("URL for icon:");
        var tabName = prompt("Tab Name");
    } else if (tabBar == "" || tabBar == null) {
        var tabIcon = "https://ssl.gstatic.com/classroom/favicon.png";
        var tabName = "Classes";
    } else if (tabBar == "b") {
        var tabIcon =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Antonia_Sautter_Creations.png/120px-Antonia_Sautter_Creations.png";
        var tabName = "&lrm;";
    }
    function inFrame() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return !0;
        }
    }
    if (1 != inFrame()) {
        var a = window.open("about:blank", "_blank");
        a.document.documentElement.innerHTML =
            "<!DOCTYPE html><html><title>" +
            tabName +
            '</title><link rel="icon" type="image/png" href=' +
            tabIcon +
            '><style>body {margin:0;}</style><body><iframe height="100%" width="100%" src="' +
            window.location.href +
            '"frameborder="0" allowfullscreen></iframe></body></html>';
        if (theURL == "" || theURL == null) {
            window.location.replace("https://classroom.google.com/h");
        } else {
            window.location.replace(theURL);
        }
    }
}
*/