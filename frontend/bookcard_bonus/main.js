const book_List = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/9548/9780954852023.jpg",
    alreadyRead: false,
  },
  {
    title: "Things Fall Apart",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5098/9781509858637.jpg",
    author: "Chinua Achebe",
    alreadyRead: true,
  },

  {
    title: "Fairy tales",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1410/9780141033570.jpg",
    author: "Hans Christian Andersen",
    alreadyRead: true,
  },
  {
    title: "The Divine Comedy",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7847/9781784701994.jpg",
    author: "Dante Alighieri",
    alreadyRead: false,
  },
  {
    title: "Pride and Prejudice",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8452/9781845298258.jpg",
    author: "Jane Austen",
    alreadyRead: false,
  },

  {
    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8460/9781846041242.jpg",
    author: "Samuel Beckett",
    alreadyRead: true,
  },

  {
    title: "The Brothers Karamazov",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3305/9780330523622.jpg",
    author: "Fyodor Dostoevsky",
    alreadyRead: false,
  },

  {
    title: "The Decameron",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7807/9781780722405.jpg",
    author: "George Eliot",
    alreadyRead: true,
  },

  {
    title: "Middlemarch",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7807/9781780723044.jpg",
    author: "Giovanni Boccaccio",
    alreadyRead: true,
  },

  {
    title: "Invisible Man",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/2413/9780241351642.jpg",
    author: "Ralph Ellison",
    alreadyRead: true,
  },

  {
    title: "Medea",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/9252/9781925228601.jpg",
    author: "Euripides",
    alreadyRead: false,
  },

  {
    title: "Absalom, Absalom!",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1410/9780141038872.jpg",
    author: "William Faulkner",
    alreadyRead: false,
  },

  {
    title: "The Sound and the Fury",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4019/9781401954406.jpg",
    author: "Gustave Flaubert",
    alreadyRead: true,
  },

  {
    title: "Gypsy Ballads",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1419/9780141976143.jpg",
    author: "Federico Garc\u00eda Lorca",
    alreadyRead: true,
  },

  {
    title: "A Doll's House",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/2413/9780241351635.jpg",
    author: "Henrik Ibsen",
    alreadyRead: false,
  },

  {
    title: "Ulysses",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1419/9780141988511.jpg",
    author: "James Joyce",
    alreadyRead: true,
  },

  {
    title: "Stories",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4019/9781401948368.jpg",
    author: "Franz Kafka",
    alreadyRead: true,
  },

  {
    title: "The Trial",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/7611/9780761169253.jpg",
    author: "Franz Kafka",
    alreadyRead: false,
  },

  {
    title: "The Castle",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/6118/9781611800586.jpg",
    author: "Franz Kafka",
    alreadyRead: false,
  },

  {
    title: "The Sound of the Mountain",
    img: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5098/9781509852505.jpg",
    author: "Yasunari Kawabata",
    alreadyRead: true,
  },
];

var cont = document.getElementById("books_container");
var list = document.createElement("ul");
list.id = "myUL";
for (var i = 0; i < book_List.length; i++) {
  var book_item_desc = document.createElement("li");
  var pTag = document.createElement("p");
  var image = document.createElement("img");
  image.src = book_List[i].img;
  book_item_desc.appendChild(image);
  var book_desc = document.createTextNode(
    book_List[i].title + " by " + book_List[i].author
  );
  pTag.appendChild(book_desc);
  book_item_desc.appendChild(pTag);
  if (book_List[i].alreadyRead) {
    book_item_desc.style.borderWidth = "3px";
    book_item_desc.style.borderColor = "green";
    book_item_desc.style.boxShadow = "5px 10px 18px green";
  }
  list.appendChild(book_item_desc);
}
cont.appendChild(list);

function searchFunction() {
  var input, filter, ul, li, p, i, txtValue;

  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function sortFunction() {
  var book_read_list = [];
  for (var i = 0; i < book_List.length; i++) {
    if (book_List[i].alreadyRead) {
      book_read_list.push({
        title: book_List[i].title,
        img: book_List[i].img,
        author: book_List[i].author,
      });
    }
  }
  console.log(book_read_list);
}

/*
    var book_item_desc = document.createElement("li");
    var pTag = document.createElement("p");
    //var image = document.createElement("img");
    //image.src = book_read_list.img;
    // book_item_desc.appendChild(image);
    var book_desc = document.createTextNode(
      book_read_list["title"] + " by " + book_read_list["author"]
    );
    console.log(book_desc);
    pTag.appendChild(book_desc);
    book_item_desc.appendChild(pTag);
    // if (book_read_list[i].alreadyRead) {
    //   book_item_desc.style.borderWidth = "3px";
    //   book_item_desc.style.borderColor = "green";
    // }
    list.appendChild(book_item_desc);
  }

  cont.appendChild(list);

 
  }

  console.log(book_read_list);
}

 */

/*
var cont = document.getElementById("books_container");
var list = document.createElement("ul");
list.id = "myUL";
const list_element = document.getElementById("books_container");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let rows = 5;

function DisplayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;

  let loop_start = rows_per_page * page;
  let loop_end = loop_start + rows_per_page;
  let paginatedItems = items.slice(loop_start, loop_end);
  //console.log(paginatedItems);
  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];
    
    var book_item_desc = document.createElement("li");
    var pTag = document.createElement("p");
    var image = document.createElement("img");
    image.src = book_List[i].img;
    book_item_desc.appendChild(image);
    var book_desc = document.createTextNode(
      book_List[i].title + " by " + book_List[i].author
    );
    pTag.appendChild(book_desc);
    book_item_desc.appendChild(pTag);
    if (book_List[i].alreadyRead) {
      book_item_desc.style.borderWidth = "3px";
      book_item_desc.style.borderColor = "green";
      book_item_desc.style.boxShadow = "5px 10px 18px green";
    }
    list.appendChild(book_item_desc);
  }
  cont.appendChild(list);
}

DisplayList(book_List, list_element, rows, 1);

*/
