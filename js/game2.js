((d) => {
	
	let spaces = d.getElementById("spaces");
  let space1 = d.getElementById("space1");
  let space2 = d.getElementById("space2");
  let dragged = "";
  let wordsRight = 0;

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
          event.target.style.background = "purple";
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
      // if ( event.target.className === "dropzone" ) {
        //if the word entered doesn't match, change background colour
        if (event.target.id === "space1" && dragged.id === "word5") {      
          event.target.replaceWith(dragged);
          wordsRight += 1;
      }
               event.target.style.background = "red";

        if (event.target.id === "space2" && dragged.id === "word1") {      
          event.target.replaceWith(dragged);
          wordsRight += 1;
      }
               event.target.style.background = "red";

        if (event.target.id === "space3" && dragged.id === "word2") {      
          event.target.replaceWith(dragged);
          wordsRight += 1;
      }
               event.target.style.background = "red";

        if (event.target.id === "space4" && dragged.id === "word3") {      
          event.target.replaceWith(dragged);
          wordsRight += 1;
      }
               event.target.style.background = "red";

        if (event.target.id === "space5" && dragged.id === "word4") {      
          event.target.replaceWith(dragged);
          wordsRight += 1;
      }
               event.target.style.background = "red";

    
  }, false);


})(document);