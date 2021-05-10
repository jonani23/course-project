//Show/hide menu items 
const hamburgerIcons = document.querySelector(".menu");
const menuItems = document.querySelector(".topnav");
const toggleMenu = function () {
    menuItems.classList.toggle("open");
}
hamburgerIcons.addEventListener("click", toggleMenu);

// Display More Functionality
// 1. Create a comic book array
const comicBooks = [

    {

        title: "Fun Home: A Family Tragicomic",

        author: "by Alison Bechdel",

        rating: "5 stars",

        href: "./fun-home.html",

        imgSrc: "public/images/fun-home.jpg",

        imgAlt: "Fun Home: A Family Tragicomic comic book cover",

    },

    {

        title: "Hunter X Hunter Vol. 1",

        author: "by Yoshihiro Togashi",

        rating: "5 stars",

        href: "./hunter-x-hunter.html",

        imgSrc: "public/images/hunter-x-hunter.jpg",

        imgAlt: "Hunter X Hunter comic book cover",

    },

    {

        title: "The Walking Dead, Vol. 1: Days Gone Bye",

        author: "by Robert Kirkman",

        rating: "4 stars",

        href: "./the-walking-dead.html",

        imgSrc: "./public/images/the-walking-dead.jpg",

        imgAlt: "The Walking Dead, Vol. 1: Days Gone Bye comic book cover",

    }

]


// select the 'Display More' button using getElementByID

const displayMoreButton = document.getElementById('addmore');

// grab div for all comic books

const bookCovers = document.querySelector(".figure");

// create function to add new elements to the index page using for loop

const displayMore = function () {
    for (i = 0; i < 3; i++) {
        let book = comicBooks[i]

        // let's create parent div for new book
        let newBook = document.createElement('figure');
        newBook.className = "comiccover";


        // image
        let bookImg = document.createElement('img');
        bookImg.src = book.imgSrc;
        bookImg.setAttribute('alt', book.imgAlt);
        newBook.appendChild(bookImg);

        // title
        let title = document.createElement('figcaption');
        title.appendChild(document.createTextNode(book.title));
        title.className = "caption";
        newBook.appendChild(title);



        // <br> tag
        let spacing = document.createElement('br');
        newBook.appendChild(spacing);

        let author = document.createTextNode(book.author);
        newBook.appendChild(author);

        newBook.appendChild(spacing);


        let rating = document.createTextNode(book.rating);
        newBook.appendChild(rating);

        newBook.appendChild(spacing);



        // anchor tag
        let href = document.createElement('a');
        newBook.appendChild(spacing);
        let link = document.createTextNode("Details");
        href.appendChild(link);
        link.href = book.href;
        newBook.appendChild(href);

        //appending new comics
        bookCovers.appendChild(newBook);

    }

}
displayMoreButton.addEventListener("click", displayMore);