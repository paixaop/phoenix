
/* GET WINDOW SCREEN */

function getWindowScreen ( window = Window.focused () ) {

  if( !isUserApp(window) ) return Screen.main ();

  if ( win ) return window.screen () || Screen.main ();

  return Screen.main ();

}
