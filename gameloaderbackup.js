
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
            "name":"Slither.io clone",
            "img":"img/slither-io.png",
            "path":"gfiles/slither-io/"
        },
        {
            "name":"Google Snake Modded",
            "img":"img/gsm1.png",
            "path":"gfiles/gsmV2/"
        },
        {
            "name":"BTD5 (fixed)",
            "img":"img/btd5.webp",
            "path":"gfiles/btd5fixed/"
        },
        {
            "name":"1v1 lol",
            "img":"img/1v1lol.png",
            "path":"gfiles/1v1lol/"
        },
        {
            "name":"House of Hazards",
            "img":"img/houseofhazards.jpg",
            "path":"gfiles/houseofhazards/"
        },
        {
            "name":"Slope 2",
            "img":"img/slope2.png",
            "path":"gfiles/slope2/"
        },
        {
            "name":"Subway Surfers",
            "img":"img/subwaysurfers.jpg",
            "path":"gfiles/subway-surfers/"
        },
        {
            "name":"Superhot Demo",
            "img":"img/superhot.jpg",
            "path":"gfiles/superhot-demo/"
        },
        {
            "name":"Time Shooter 2",
            "img":"img/timeshooter2.jpeg",
            "path":"gfiles/timeshooter2/"
        },
        {
            "name":"Time Shooter 3",
            "img":"img/timeshooter3.jpeg",
            "path":"gfiles/timeshooter3/"
        },
        {
            "name":"Better S.A.M. (TTS)",
            "img":"img/bettersam.png",
            "path":"gfiles/better-sam/"
        },
        {
            "name":"roblox V3 (Beta)",
            "img":"img/roblox.png",
            "path":"roblos.html"
        },
        {
            "name":"0hh1",
            "img":"img/0hh1.png",
            "path":"gfiles/0hh1/"
        },
        {
            "name":"0hn0",
            "img":"img/0hn0.png",
            "path":"gfiles/0hn0/"
        },
        {
            "name":"2048",
            "img":"img/2048.png",
            "path":"gfiles/2048/"
        },
        {
            "name":"Thirty Dollar Website",
            "img":"img/30dollarwebsite.jpg",
            "path":"gfiles/30dollarwebsite/"
        },
        {
            "name":"Alien Hominid",
            "img":"img/alienhominid.jpg",
            "path":"gfiles/alienhominid/"
        },
        {
            "name":"Amidst The Sky",
            "img":"img/amidstthesky.jpg",
            "path":"gfiles/amidstthesky/"
        },
        {
            "name":"Among Us",
            "img":"img/amongus.jpg",
            "path":"gfiles/among-us/"
        },
        {
            "name":"Animator vs Animation",
            "img":"img/animatorvsanimation.jpg",
            "path":"gfiles/animatorvsanimation/"
        },
        {
            "name":"Asteroids",
            "img":"img/asteroids.jpg",
            "path":"gfiles/asteroids/"
        },
        {
            "name":"Astray",
            "img":"img/astray.png",
            "path":"gfiles/astray/"
        },
        {
            "name":"Ballistic Chickens",
            "img":"img/ballistic-chickens.png",
            "path":"gfiles/ballistic-chickens/"
        },
        {
            "name":"Banjo-Kazooie",
            "img":"img/banjo-kazooie.png",
            "path":"gfiles/banjo-kazooie/"
        },
        {
            "name":"Basket and Ball",
            "img":"img/basket-and-ball.jpg",
            "path":"gfiles/basketandball/"
        },
        {
            "name":"Basketbros.io",
            "img":"img/basketbros.jpg",
            "path":"gfiles/basketbros/"
        },
        {
            "name":"Bloons Tower Defense",
            "img":"img/btd.jpg",
            "path":"gfiles/btd/"
        },
        {
            "name":"Bloons Tower Defense 2",
            "img":"img/btd2.jpg",
            "path":"gfiles/btd2/"
        },
        {
            "name":"Bloons Tower Defense 3",
            "img":"img/btd3.jpg",
            "path":"gfiles/btd3/"
        },
        {
            "name":"Blue",
            "img":"img/blue.png",
            "path":"gfiles/blue/"
        },
        {
            "name":"Cat Ninja",
            "img":"img/cat-ninja.jpg",
            "path":"gfiles/cat-ninja/"
        },
        {
            "name":"Champion Island",
            "img":"img/championisland.jpg",
            "path":"gfiles/champion-island/"
        },
        {
            "name":"Chess",
            "img":"img/chess.jpg",
            "path":"gfiles/chess/"
        },
        {
            "name":"Chill Radio",
            "img":"img/chillradio.jpg",
            "path":"gfiles/chill-radio/"
        },
        {
            "name":"Chrome Dinosaur Game",
            "img":"img/chromedino.jpg",
            "path":"gfiles/chrome-dino/"
        },
        {
            "name":"Circus Charlie",
            "img":"img/circus.jpg",
            "path":"gfiles/circus/"
        },
        {
            "name":"Clicker Heroes",
            "img":"img/clickerheroes.png",
            "path":"gfiles/clicker-heroes/"
        },
        {
            "name":"Cookie Clicker",
            "img":"img/cookieclicker.png",
            "path":"gfiles/cookieclicker/"
        },
        {
            "name":"CSGO Clicker",
            "img":"img/csgo.jpg",
            "path":"gfiles/csgo-clicker/"
        },
        {
            "name":"Cubefield",
            "img":"img/cubefield.jpg",
            "path":"gfiles/cubefield/"
        },
        {
            "name":"Custom Tetris",
            "img":"img/customtetris.jpg",
            "path":"gfiles/custom-tetris/"
        },
        {
            "name":"Deepest Sword",
            "img":"img/deepest-sword.jpg",
            "path":"gfiles/deepest-sword/"
        },
        {
            "name":"Dragon Ball Z Devolution",
            "img":"img/dbzdevolution.jpg",
            "path":"gfiles/dbzdevolution/"
        },
        {
            "name":"Doodle Jump",
            "img":"img/doodlejump.png",
            "path":"gfiles/doodle-jump/"
        },
        {
            "name":"DOOM",
            "img":"img/doom.jpg",
            "path":"gfiles/doom/"
        },
        {
            "name":"Drift Boss",
            "img":"img/driftboss.png",
            "path":"gfiles/drift-boss/"
        },
        {
            "name":"Eaglercraft 1.5.2",
            "img":"img/eaglercraft.png",
            "path":"gfiles/eaglercraft/"
        },
        {
            "name":"Eaglercraft 1.8.8",
            "img":"img/eaglerx.png",
            "path":"gfiles/eaglerx/"
        },
        {
            "name":"Edge Surf",
            "img":"img/edgesurf.png",
            "path":"gfiles/edgesurf/"
        },
        {
            "name":"Eggy Car",
            "img":"img/eggycar.png",
            "path":"gfiles/eggy-car/"
        },
        {
            "name":"Elastic Man",
            "img":"img/elasticman.jpg",
            "path":"gfiles/elastic-man/"
        },
        {
            "name":"EmulatorJS",
            "img":"img/ejs.jpeg",
            "path":"gfiles/ejs/"
        },
        {
            "name":"Fancy Pants Adventure",
            "img":"img/fpa.jpg",
            "path":"gfiles/fancypants/"
        },
        {
            "name":"Flappy Bird",
            "img":"img/flappybird.png",
            "path":"gfiles/flappybird/"
        },
        {
            "name":"Fluid Simulation",
            "img":"img/fluidsimulation.png",
            "path":"gfiles/fluid-simulation/"
        },
        {
            "name":"Five Nights at Freddy's",
            "img":"img/fnaf.jpeg",
            "path":"gfiles/fnaf/"
        },
        {
            "name":"Five Nights at Winston's",
            "img":"img/fnaw.jpg",
            "path":"gfiles/fnaw/"
        },
        {
            "name":"Friday Night Funkin",
            "img":"img/fnf.jpg",
            "path":"gfiles/fnf-week7/"
        },
        {
            "name":"Funny Shooter 2",
            "img":"img/funnyshooter2.jpg",
            "path":"gfiles/funnyshooter2/"
        },
        {
            "name":"GBA Emulator",
            "img":"img/gba.jpg",
            "path":"gfiles/gba/"
        },
        {
            "name":"Getaway Shootout",
            "img":"img/getaway-shootout.png",
            "path":"gfiles/getaway-shootout/"
        },
        {
            "name":"Google Snake",
            "img":"img/gsnake.png",
            "path":"gfiles/google-snake/"
        },
        {
            "name":"Hacker Typer",
            "img":"img/hackertyper.png",
            "path":"gfiles/hackertyper/"
        },
        {
            "name":"HexGL",
            "img":"img/hexgl.png",
            "path":"gfiles/hexgl/"
        },
        {
            "name":"Hextris",
            "img":"img/hextris.png",
            "path":"gfiles/hextris/"
        },
        {
            "name":"HTML Editor",
            "img":"img/htmledit.jpg",
            "path":"gfiles/html-editor/"
        },
        {
            "name":"Impossible Quiz",
            "img":"img/impossiblequiz.jpg",
            "path":"gfiles/impossible-quiz/"
        },
        {
            "name":"Incremancer",
            "img":"img/incremancer.png",
            "path":"gfiles/incremancer/"
        },
        {
            "name":"Jacksmith",
            "img":"img/jacksmith.png",
            "path":"gfiles/jacksmith/"
        },
        {
            "name":"Learn to Fly",
            "img":"img/ltf.png",
            "path":"gfiles/ltf/"
        },
        {
            "name":"Learn to Fly 2",
            "img":"img/ltf2.jpg",
            "path":"gfiles/ltf2/"
        },
        {
            "name":"Madalin Stunt Cars 2",
            "img":"img/madalincars2.jpg",
            "path":"gfiles/madalin-cars-2/"
        },
        {
            "name":"Minecraft Classic",
            "img":"img/classicminecraft.png",
            "path":"gfiles/mc-classic/"
        },
        {
            "name":"Minecraft Tower Defense",
            "img":"img/mctd.jpg",
            "path":"gfiles/mctd/"
        },
        {
            "name":"Minecraft Tower Defense 2",
            "img":"img/mctd2.jpg",
            "path":"gfiles/mctd2/"
        },
        {
            "name":"Mineblocks",
            "img":"img/mineblocks.png",
            "path":"gfiles/mineblocks/"
        },
        {
            "name":"Microsoft Flight Simulator",
            "img":"img/msflight.png",
            "path":"gfiles/msflight/"
        },
        {
            "name":"Minesweeper",
            "img":"img/minesweep.png",
            "path":"gfiles/minesweeper/"
        },
        {
            "name":"Moon Lander",
            "img":"img/moonlander.png",
            "path":"gfiles/moonlander/"
        },
        {
            "name":"Moto X3M",
            "img":"img/motox3m.png",
            "path":"gfiles/motox3m/"
        },
        {
            "name":"N64 Emulator",
            "img":"img/n64.jpg",
            "path":"gfiles/n64/"
        },
        {
            "name":"n-gon",
            "img":"img/n-gon.png",
            "path":"gfiles/n-gon/"
        },
        {
            "name":"OliCryptor",
            "img":"img/olicryptor.jpeg",
            "path":"gfiles/olicryptor/"
        },
        {
            "name":"Pac-Man",
            "img":"img/pacman.jpg",
            "path":"gfiles/pac-man/"
        },
        {
            "name":"Pac-Man 3D",
            "img":"img/pacman3d.jpeg",
            "path":"gfiles/pacman-3d/"
        },
        {
            "name":"Paper.io 2",
            "img":"img/paperio2.png",
            "path":"gfiles/paperio2/"
        },
        {
            "name":"PICO-8 Education",
            "img":"img/pico-8.png",
            "path":"gfiles/pico-8/"
        },
        {
            "name":"PiClient",
            "img":"img/eaglerx.png",
            "path":"gfiles/piclient/"
        },
        {
            "name":"POOM",
            "img":"img/poom.jpg",
            "path":"gfiles/poom/"
        },
        {
            "name":"Powder Game",
            "img":"img/powdergame.jpeg",
            "path":"gfiles/powder-game/dust2.html"
        },
        {
            "name":"Retro Bowl",
            "img":"img/retrobowl.jpg",
            "path":"gfiles/retro-bowl/"
        },
        {
            "name":"Riddle School",
            "img":"img/riddleschool.png",
            "path":"gfiles/riddleschool/"
        },
        {
            "name":"Riddle School 2",
            "img":"img/riddleschool2.png",
            "path":"gfiles/riddleschool2/"
        },
        {
            "name":"Riddle School 3",
            "img":"img/riddleschool3.png",
            "path":"gfiles/riddleschool3/"
        },
        {
            "name":"Riddle School 4",
            "img":"img/riddleschool4.png",
            "path":"gfiles/riddleschool4/"
        },
        {
            "name":"Riddle School 5",
            "img":"img/riddleschool5.png",
            "path":"gfiles/riddleschool5/"
        },
        {
            "name":"Riddle Transfer",
            "img":"img/riddletransfer.png",
            "path":"gfiles/riddletransfer/"
        },
        {
            "name":"Riddle Transfer 2",
            "img":"img/riddletransfer2.png",
            "path":"gfiles/riddletransfer2/"
        },
        {
            "name":"Ruffle (Flash Emulator)",
            "img":"img/ruffle.png",
            "path":"gfiles/ruffle-demo/"
        },
        {
            "name":"Run 2",
            "img":"img/run2.png",
            "path":"gfiles/run2/"
        },
        {
            "name":"Sandboxels",
            "img":"img/sandboxels.png",
            "path":"gfiles/sandboxels/"
        },
        {
            "name":"Sandspiel",
            "img":"img/sandspiel.png",
            "path":"gfiles/sandspiel/"
        },
        {
            "name":"Strike Force Heroes",
            "img":"img/sfh.jpg",
            "path":"gfiles/sfh/"
        },
        {
            "name":"Strike Force Heroes 2",
            "img":"img/sfh2.png",
            "path":"gfiles/sfh2/"
        },
        {
            "name":"Strike Force Heroes 3",
            "img":"img/sfh3.png",
            "path":"gfiles/sfh3/"
        },
        {
            "name":"Slope",
            "img":"img/slope.jpg",
            "path":"gfiles/slope/"
        },
        {
            "name":"Super Mario 64",
            "img":"img/sm64.jpg",
            "path":"gfiles/sm64/"
        },
        {
            "name":"Space Cadet Pinball",
            "img":"img/spacecadetpinball.jpg",
            "path":"gfiles/space-cadet-pinball/"
        },
        {
            "name":"Spelunky",
            "img":"img/spelunky.jpg",
            "path":"gfiles/spelunky/"
        },
        {
            "name":"Spinning Rat",
            "img":"img/spinningrat.png",
            "path":"gfiles/spinningrat/"
        },
        {
            "name":"Super Smash Flash",
            "img":"img/ssf.png",
            "path":"gfiles/ssf/"
        },
        {
            "name":"Tab Hider",
            "img":"img/tabhidder.png",
            "path":"gfiles/tab-hidder/"
        },
        {
            "name":"Tank Trouble 2",
            "img":"img/tanktrouble2.jpg",
            "path":"gfiles/tank-trouble-2/"
        },
        {
            "name":"Tanuki Sunset",
            "img":"img/tanuki.jpg",
            "path":"gfiles/tanuki-sunset/"
        },
        {
            "name":"Temple Run 2",
            "img":"img/templerun2.jpeg",
            "path":"gfiles/temple-run-2/"
        },
        {
            "name":"Tetris",
            "img":"img/tetris.jpg",
            "path":"gfiles/tetris/"
        },
        {
            "name":"Tiny Fishing",
            "img":"img/tiny-fishing.png",
            "path":"gfiles/tinyfishing/"
        },
        {
            "name":"Toss The Turtle",
            "img":"img/tosstheturtle.png",
            "path":"gfiles/tosstheturtle/"
        },
        {
            "name":"Overtype Typewriter",
            "img":"img/typewriter.jpeg",
            "path":"gfiles/typewriter/"
        },
        {
            "name":"Unfair Mario",
            "img":"img/unfairmario.jpg",
            "path":"gfiles/unfair-mario/"
        },
        {
            "name":"Very Normal Shooter",
            "img":"img/verynormalshooter.jpg",
            "path":"gfiles/verynormalshooter/"
        },
        {
            "name":"Vex 3",
            "img":"img/vex-3.jpg",
            "path":"gfiles/vex3/"
        },
        {
            "name":"Vex 4",
            "img":"img/vex4.jpg",
            "path":"gfiles/vex4/"
        },
        {
            "name":"Vex 5",
            "img":"img/vex-5.jpg",
            "path":"gfiles/vex5/"
        },
        {
            "name":"Vex 6",
            "img":"img/vex6.jpg",
            "path":"gfiles/vex6/"
        },
        {
          "name":"VM Linux",
          "img":"img/vmlinux.png",
          "path":"gfiles/vmlinux/"
        },
        {
            "name":"Wall Smash",
            "img":"img/wallsmash.png",
            "path":"gfiles/wallsmash/"
        },
        {
            "name":"Waterworks!",
            "img":"img/waterworks.png",
            "path":"gfiles/waterworks/"
        },
        {
            "name":"WBWWB",
            "img":"img/wbwwb.png",
            "path":"gfiles/wbwwb/"
        },
        {
            "name":"Weave Silk",
            "img":"img/weavesilk.jpg",
            "path":"gfiles/weavesilk/"
        },
        {
            "name":"Wordle",
            "img":"img/wordle.jpg",
            "path":"gfiles/wordle/"
        },
        {
            "name":"World's Hardest Game",
            "img":"img/hardestgame.jpg",
            "path":"gfiles/worlds-hardest-game/"
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