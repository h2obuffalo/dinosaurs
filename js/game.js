((d) => {
  
  let spaces = d.getElementById("spaces");
    let dragged;

  /* events fired on the draggable target */
 d.addEventListener("drag", function( event ) {

   }, false);

  d.addEventListener("dragstart", function( event ) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      event.target.style.opacity = .5;
  }, false);

  d.addEventListener("dragend", function( event ) {
      // reset the transparency
      event.target.style.opacity = "";
  }, false);

  /* events fired on the drop targets */
  d.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      event.preventDefault();
  }, false);

  d.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className === "dropzone" ) {
          event.target.style.background = "orange";
      }

  }, false);

  d.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className === "dropzone" ) {
          event.target.style.background = "";
      }

  }, false);

  d.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if ( event.target.className === "dropzone" ) {
          event.target.style.background = "";
          // dragged.parentNode.removeChild( dragged );
          event.target.replaceWith(dragged);
      }
    
  }, false);


})(document);