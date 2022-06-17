/*Javascript file for home page
Created 17/06/2022 by Alexander Atwell*/

function showMore() {
//function to display more or less text on blog post
  var dots = document.getElementById("ellipsis");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("sm");

  if (dots.style.display === "none") {
  // If more text is hidden
    dots.style.display = "inline";
    btnText.innerHTML = "Continue reading...";
    moreText.style.display = "none";
  } else {
  // If more text is shown
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}