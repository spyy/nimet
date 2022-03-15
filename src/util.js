let windowObjectReference = null; // global variable
let PreviousUrl; /* global variable that will store the
                    url currently in the secondary window */

export const openRequestedSinglePopup = url => {
  console.log(url);

  if(windowObjectReference == null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName", "popup");
  } else if(PreviousUrl !== url) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName", "popup");
    /* if the resource to load is different,
       then we load it in the already opened secondary window and then
       we bring such window back on top/in front of its parent window. */
    windowObjectReference.focus();
  } else {
    windowObjectReference.focus();
  };

  PreviousUrl = url;
  /* explanation: we store the current url in order to compare url
     in the event of another call of this function. */
}
