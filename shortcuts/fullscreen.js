
/* FULLSCREEN */

setKeyHandler ( 'space', HYPER_1, () => {

  const window = Window.focused ();

  if ( !window ) return;

  window.setFullScreen ( !window.isFullScreen () );

});

