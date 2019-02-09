((d) => {
	

  let dragged = "";
  let wordsRight = 0;
  let snd = new Audio("../dist/sounds/trexRoar.mp3"); // buffers automatically when created
  


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
      if ( event.target.className === "dropzone" ) {
          event.target.style.background = "purple";
      }
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
      event.stopPropagation();
      
      // move dragged elem to the selected drop target
      
        //if the word entered doesn't match, change background colour
        if (event.target.id === "space1" && dragged.id === "word5") {      
          event.target.replaceWith(dragged);
          wordsRight += 1;
        } else  if ( event.target.className === "dropzone" ) {
          event.target.style.background = "red";
          }
               event.target.style.background = "red";


        if (event.target.id === "space2" && dragged.id === "word1") {      
          event.target.replaceWith(dragged);
          wordsRight += 1;
      } else  if ( event.target.className === "dropzone" ) {
          event.target.style.background = "red";
      }
               event.target.style.background = "red";

        if (event.target.id === "space3" && dragged.id === "word2") {      
          event.target.replaceWith(dragged);
          wordsRight += 1;
      } else  if ( event.target.className === "dropzone" ) {
          event.target.style.background = "red";
      }
               event.target.style.background = "red";

        if (event.target.id === "space4" && dragged.id === "word3") {      
          event.target.replaceWith(dragged);
          wordsRight += 1;
      } else  if ( event.target.className === "dropzone" ) {
          event.target.style.background = "red";
      }
               event.target.style.background = "red";

        if (event.target.id === "space5" && dragged.id === "word4") {      
          event.target.replaceWith(dragged);
          wordsRight += 1;
      } else  if ( event.target.className === "dropzone" ) {
          event.target.style.background = "red";
      }
               
        if(wordsRight === 1) {
          d.getElementById("stegosaurus-silhouette").classList.add("silhouette-80")
          
        }
        if(wordsRight === 2) {
          d.getElementById("stegosaurus-silhouette").classList.add("silhouette-60")
        }
         if(wordsRight === 3) {
          d.getElementById("stegosaurus-silhouette").classList.add("silhouette-40")
        }
         if(wordsRight === 4) {
          d.getElementById("stegosaurus-silhouette").classList.add("silhouette-20")
        }
         if(wordsRight === 5) {
          d.getElementById("stegosaurus-silhouette").classList.add("silhouette-00")
          snd.play();
        }
        
  }, false);


})(document);