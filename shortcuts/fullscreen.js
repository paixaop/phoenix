
/* FULLSCREEN */

setKeyHandler ( 'space', HYPER, () => {

  const window = Window.focused ();

  if ( !window ) return;

  window.setFullScreen ( !window.isFullScreen () );

});

