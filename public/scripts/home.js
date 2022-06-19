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

function handleForm(event) {
        document.getElementById('blogTitle').innerHTML = document.getElementById('messageTitle').value;
        document.getElementById('blogMessage').innerHTML = document.getElementById('newMessage').value;
        const name = 'Dante'

        const d = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('blogTime').innerHTML = d.toLocaleDateString(undefined, options) + " by "
        document.getElementById('blogger').innerHTML = name
    }


/*function addMessage(){
    var title = getElementById('messageTitle').value
    var message= getElementById('newMessage').value
    var title = getElementById('messageTitle').value

    // (A) GET FORM DATA
      var form = document.getElementById("myForm");
      var data = new FormData(form);

      // (B) FETCH
        fetch("0-dummy.php", {
          method: "post",
          body: data
        })
        .then((res) => { return res.text(); })
        .then((txt) => { console.log(txt); })
        .catch((err) => { console.log(err); });

      // (C) PREVENT HTML FORM SUBMIT
      return false;

}*/