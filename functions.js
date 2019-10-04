function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function fn () {
  //Get the button
  const mybutton = document.getElementById("Btn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document


  const flexBox1 = document.getElementsByClassName('flex1');
  const flexBox2 = document.getElementsByClassName('flex2');
  
  const button = document.getElementById("open-modal");
  let count = 0;
  button.addEventListener('click', () => {
    count += 1;
    const modal = document.getElementById("modal");
    modal.style.display = "block";
  });
  const buttonClose = document.getElementById("close-modal")
  buttonClose.addEventListener('click', () => {
    count += 1;
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  });


}

function domReady(fn) {
  document.addEventListener("DOMContentLoaded", fn);
  if (document.readyState === "interactive" || document.readyState === "complete" ) {
    fn();
  }
}

domReady(fn) 