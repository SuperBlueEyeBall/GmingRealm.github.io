if (!window.top.location.href.startsWith("https://skybase-alpha.github.io/")) {
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
} else {
    alert("this site is poopoo");
    window.close();
}
function gameHide(gamePath) {
    var a = window.open("about:blank", "_blank");
    a.document.documentElement.innerHTML =
        "<!DOCTYPE html><html><title>" +
        tabName +
        '</title><link rel="icon" type="image/png" href=' +
        tabIcon +
        '><style>body {margin:0;}</style><body><iframe height="100%" width="100%" src="' +
        gamePath +
        '"frameborder="0" allowfullscreen></iframe></body></html>';
}

var gamesText = `{
    "games":[
        {
            "name":"Example #1",
            "img":"img/coolcustom.png",
            "path":"/"
        },
        {
            "name":"Example #2",
            "img":"img/coolcustom.png",
            "path":"/"
        },
        {
            "name":"Example #3",
            "img":"img/coolcustom.png",
            "path":"/"
        },
        {
            "name":"Example #4",
            "img":"img/coolcustom.png",
            "path":"/"
        },
        {
            "name":"Example #5",
            "img":"img/coolcustom.png",
            "path":"/"
        },
        {
            "name":"Example #6",
            "img":"img/coolcustom.png",
            "path":"/"
        },
        {
            "name":"Example #7",
            "img":"img/coolcustom.png",
            "path":"/"
        },
        {
            "name":"Example #8",
            "img":"img/coolcustom.png",
            "path":"/"
        },
        {
            "name":"Example #9",
            "img":"img/coolcustom.png",
            "path":"/"
        },
        {
            "name":"Example #10",
            "img":"img/coolcustom.png",
            "path":"/"
        }
    ]
}`;
var gameObject = JSON.parse(gamesText);
for (i in gameObject.games) {
    let elem1 = document.createElement("div");
    elem1.className = "game-button";
    document.getElementById("gameSelect").appendChild(elem1);
    let elem2 = document.createElement("a");

    elem2.href = gameObject.games[i].path;

    elem1.appendChild(elem2);
    let elem3 = document.createElement("img");
    elem3.src = gameObject.games[i].img;
    elem3.alt = gameObject.games[i].name;
    elem2.appendChild(elem3);
    let elem4 = document.createElement("p");
    elem4.innerHTML = gameObject.games[i].name;
    elem2.appendChild(elem4);
}
const gamesContainer = document.getElementById("gameSelect");
const searchBar = document.getElementById("search");
// Listen for input event on the search bar
searchBar.addEventListener("input", (e) => {
    const query = searchBar.value.trim().toLowerCase();

    // Loop through all the games in the container and show/hide them depending on whether they match the search query
    for (let game of gamesContainer.children) {
        if (game instanceof Element) {
            if (query) {
                const gameName = game.querySelector("p").innerText.trim().toLowerCase();
                if (gameName.includes(query)) {
                    game.removeAttribute("hidden");
                } else {
                    game.setAttribute("hidden", "");
                }
            } else {
                game.removeAttribute("hidden");
            }
        }
    }
});
// if (localStorage.getItem("hidden") == "y") {
//   hidey();
//   console.log("fff");
// }
