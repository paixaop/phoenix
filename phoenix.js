
/* IMPORT */

require ( './config/phoenix.js' );
require ( './config/constants.js' );
require ( './config/apps.js' );

require ('./helpers/is-user-app.js');
require ( './helpers/alert.js' );
require ( './helpers/log_frame.js' );
require ( './helpers/key_to_string.js' );
require ( './helpers/append_file.js' );
require ( './helpers/center_window.js' );
require ( './helpers/detect_named_anchor.js' );
require ( './helpers/exists_file.js' );
require ( './helpers/exists_files.js' );
require ( './helpers/find_window.js' );
require ( './helpers/focus_window.js' );
require ( './helpers/get_focused_screen.js' );
require ( './helpers/get_named_anchor.js' );
require ( './helpers/get_named_frame.js' );
require ( './helpers/get_space_index.js' );
require ( './helpers/get_space_name.js' );
require ( './helpers/get_window_screen.js' );
require ( './helpers/grow_frame.js' );
require ( './helpers/index2keycode.js' );
require ( './helpers/is_anchored.js' );
require ( './helpers/log.js' );
require ( './helpers/modal.js' );
require ( './helpers/modal_screen.js' );
require ( './helpers/modal_window.js' );
require ( './helpers/osascript.js' );
require ( './helpers/read_file.js' );
require ( './helpers/read_json.js' );
require ( './helpers/set_anchor.js' );
require ( './helpers/set_event_handler.js' );
require ( './helpers/set_events_handler.js' );
require ( './helpers/set_frame.js' );
require ( './helpers/set_key_handler.js' );
require ( './helpers/set_layout.js' );
require ( './helpers/set_keys_handler.js' );
require ( './helpers/shell.js' );
require ( './helpers/switch_space.js' );
require ( './helpers/write_file.js' );
require ( './helpers/write_json.js' );
require ( './helpers/screen_names.js' );

require ( './shortcuts/blacklist.js' );
require ( './shortcuts/center.js' );
require ( './shortcuts/corners.js' );
require ( './shortcuts/desktop_icons.js' );
require ( './shortcuts/expand.js' );
//require ( './shortcuts/focus.js' );
require ( './shortcuts/fullscreen.js' );
require ( './shortcuts/info.js' );
require ( './shortcuts/window_info.js' );
require ( './shortcuts/grow.js' );
require ( './shortcuts/halves.js' );
require ( './shortcuts/pause.js' );
//require ( './shortcuts/quit.js' );
require ( './shortcuts/reload.js' );
require ( './shortcuts/sides.js' );
require ( './shortcuts/spaces.js' );
require ( './shortcuts/sixths.js' );
require ( './shortcuts/split_view.js' );
require ( './shortcuts/spotlight.js' );
require ( './shortcuts/thirds.js' );
require ( './shortcuts/lg.js' );
require ( './shortcuts/layouts.js' );
require ( './shortcuts/busylight.js' );

//require ( './mouse/snapping.js' );
require ( './mouse/center.js' );

require ( './magic/chrome.js' );
require ( './magic/thunderbird.js' );
require ( './magic/start_apps.js' );
require ( './magic/developer_tools.js' );
require ( './magic/move_to_main_monitor.js');

//require ( './magic/finder.js' );
//require ( './magic/hyper.js' );
//require ( './magic/iterm.js' );
//require ( './magic/terminal.js' );
//require ( './magic/vscode.js' );


existsFiles ( SPACES_ALFRED_APPS, hasAlfred => {

  if ( !hasAlfred ) return;

  require ( './spaces/alfred.js' );
  require ( './spaces/list.js' );
  // require ( './spaces/overlay.js' );

});

/* LOADED */

modalScreen ({ icon: App.get ( 'Phoenix' ).icon () });
