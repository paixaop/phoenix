
/* Thunderbird */

setEventHandler ('windowDidOpen', magicThunderbirdOpen);

/* HELPERS */

function magicThunderbirdOpen ( window ) {
  const appName = window.app().name();
  const windowTitle = window.title();

  if ( !window.isNormal() ) return;
  Phoenix.log(`Window open event: ${appName}, Title: ${windowTitle}`);

  if ( !/Thunderbird/.test(appName) ) return;
  if ( !/Write/.test(windowTitle) ) return;
  Phoenix.log(`Center Thunderbird writing window`);

  centerWindow (window);
}
