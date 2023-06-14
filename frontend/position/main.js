function myfunction() {
  //const buttonElem = document.querySelector("#wrapper button");
  var inputElem = document.querySelector("#wrapper input").value;

  if (inputElem == "OFF") {
    inputElem = "ONN";
  } else {
    document.querySelector("#wrapper input").value = "OFF";
  }
}
