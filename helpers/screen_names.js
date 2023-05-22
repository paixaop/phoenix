
function setScreenNames(monitors = MONITORS) {
    let screensWithNames = {};
    const screens = Screen.all();
    for(const s in screens) {
        let id = screens[s].identifier();
        let r = screens[s].flippedFrame();

        let resolution = `${r.width}x${r.height}`;

        for(let m in monitors) {
            if (!Array.isArray(monitors[m])) {
                monitors[m] = Array.from(monitors[m]);
            }

            if( monitors[m].includes(resolution) )  {
                Phoenix.log(`Monitor ${m} associated with screen: ${id} at resolution ${resolution}`);
                screensWithNames[m] = screens[s];
                break;
            }
        } 
    }
    for(let m in monitors) {
        if( !screensWithNames[m]) {
            Phoenix.log(`WARNING: Monitor ${m} @ ${monitors[m]} not detected or has different resolution than specified in Phoenix configuration.`)
        }
    }
    return screensWithNames;
}

function getScreenFromName(name) {
    const screensWithNames = setScreenNames();
    Phoenix.log(`Monitor ${name} mapped to ${screensWithNames[name].identifier()} ${screenToString(screensWithNames[name])}`);
    return screensWithNames[name];
}

function isScreenName(screen, name) {
    const screensWithNames = setScreenNames();
    return screensWithNames[name].identifier() === screen.identifier();
}

function screenToString(screen) {
    const size = screen.flippedFrame();
    return `resolution: ${size.width}x${size.height} origin: (${size.x}, ${size.y})`;
}

function monitor(screen) {
    const screensWithNames = setScreenNames();
    for(const s in screensWithNames) {
        if( screensWithNames[s].identifier() === screen.identifier() ) {
            return s;
        }
    }
    return undefined;
}