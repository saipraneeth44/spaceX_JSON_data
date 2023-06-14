/*

const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    img: "http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    img: "http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg",
    author: "Brian Christian",
    alreadyRead: true,
  },

  {
    title: "The Most Human Human",
    img: "http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Most Human Human",
    img: "http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg",
    author: "Brian Christian",
    alreadyRead: true,
  },
];

for (var i = 0; i < books.length; i++) {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const h5 = document.createElement("h5");
  const h6 = document.createElement("h6");

  const DOM_img = document.createElement("img");

  h3.textContent = books[i].title;
  h5.textContent = books[i].author;
  h6.textContent = books[i].alreadyRead;

  DOM_img.src = books[i].img;

  div.append(h3);
  div.append(h5);
  div.append(h6);
  div.appendChild(DOM_img);

  let con = document.getElementById("author");
  con.append(div);
}

*/

function checkFunction() {
  var nameValue = document.getElementById("name").value;
  if (nameValue.includes("?")) {
    alert("User has entered ?");
  } else {
    document.getElementById("showText").innerHTML =
      "Username Entered:-  " + nameValue;
  }
}
