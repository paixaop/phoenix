
/* KEYS */

const HYPER_1 = ['ctrl', 'alt', 'cmd'];
const HYPER_2 = ['ctrl', 'cmd'];;
const DOUBLE_KEY_INTERVAL = 250;

/* OTHERS */

const SHELL_PATH = '/bin/bash';
const OSASCRIPT_PATH = '/usr/bin/osascript';

const CENTER_WIDTH = 1280;
const CENTER_HEIGHT = 800;

const DEVTOOLS_SHRINK_HEIGHT = 75;

const FOCUS_WINDOW_CHECK_CYCLES = 10;
const FOCUS_WINDOW_CHECK_INTERVAL = 250;

const GROW_AMOUNT = 50;

const JSON_INDENTATION = 2;

const MODAL_APPEARANCE = 'dark';
const MODAL_DURATION = 1;
const MODAL_ANIMATION_DURATION = .2;
const MODAL_WEIGHT = 24;

const LEFT_WIDTH_PERCENTAGE = 40; // Set it to 50 if you want symmetric left and right sides' widths
const TOP_HEIGHT_PERCENTAGE = 50; // Set it to 50 if you want symmetric top and bottom sides' heights

const QUIT_BLACKLIST = ['Finder'];

const SNAPPING_THRESHOLD = 20;

const SPACES_SWITCH_WRAP = true;
const SPACES_OVERLAY_DURATION = MODAL_DURATION / 2;
const SPACES_LIST_RAW_PATH = '~/.config/phoenix/spaces/list_raw.json';
const SPACES_LIST_PATH = '~/.config/phoenix/spaces/list.json';
const SPACES_ALFRED_APPS = ['/Applications/Alfred 5.app', '/Applications/Alfred 4.app', '/Applications/Alfred 3.app', '/Applications/Alfred 2.app', '/Applications/Alfred.app'];
const SPACES_ALFRED_PRESELECT = true;
const SPACES_ALFRED_PRESELECT_DELAY = 0.1;
const SPACES_UPDATE_CYCLES = 5;
const SPACES_UPDATE_INTERVAL = 1000;

// Name your monitor based on their resolutions
// This only works if two different monitors different resolutions
const MONITORS = {
    lg: ['7680x2160', '6720x1890', '5120x1440'],
    mac: ['1792x1120', '1728x1117','2056x1329']
};

// Set the monitor where all new windows will open in
const MAIN_MONITOR = "lg"
