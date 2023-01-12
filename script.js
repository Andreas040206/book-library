let myLibrary = [];

function AddBook(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);
}

function addBookToLibrary(name, author, pages, read) {
  const newBook = new AddBook(name, author, pages, read);
  myLibrary.push(newBook);
  displayBook();
}

function createBookToLibrary() {
  if (
    inputTitle.value === "" ||
    inputAuthor.value === "" ||
    inputPages.value === ""
  ) {
    formTitleLab.style.visibility = "visible";
  } else {
    let bookTitle = document.getElementById("inputTitle").value;
    let bookAuthor = document.getElementById("inputAuthor").value;
    let bookPages = document.getElementById("inputPages").value;
    let readOrInput = document.getElementById("readOrInput").checked;
    addBookToLibrary(bookTitle, bookAuthor, bookPages, readOrInput);
    clearForm();
    hideForm();
    formTitleLab.style.visibility = "hidden";
  }
}

function displayBook() {
  removeAllChildNodes(bookCon);
  for (i = 0; i < myLibrary.length; i++) {
    let BookEl = document.createElement("div");
    BookEl.classList.add("newBookCon");
    BookEl.setAttribute("id", `book${i}`);
    bookCon.appendChild(BookEl);
    let newBookHeader = document.createElement("div");
    newBookHeader.classList.add("newBookHeader");
    newBookHeader.textContent = `${myLibrary[i].name}`;
    BookEl.appendChild(newBookHeader);
    let newBookAuthor = document.createElement("div");
    newBookAuthor.classList.add("newBookAuthor");
    newBookAuthor.textContent = `Author: ${myLibrary[i].author}`;
    BookEl.appendChild(newBookAuthor);
    let newBookPages = document.createElement("div");
    newBookPages.classList.add("newBookPages");
    newBookPages.textContent = `Pages: ${myLibrary[i].pages}`;
    BookEl.appendChild(newBookPages);
    let newBookRead = document.createElement("div");

    let readOrBtn = document.createElement("button");
    readOrBtn.classList.add("readOrBtn");

    readOrBtn.addEventListener("click", function () {
      thisElementId = this.parentElement.id.replace(/\D/g, "");
      if (myLibrary[thisElementId].read === false) {
        myLibrary[thisElementId].read = true;
      } else {
        myLibrary[thisElementId].read = false;
      }
      displayBook();
    });
    BookEl.appendChild(readOrBtn);

    if (myLibrary[i].read === false) {
      BookEl.style.background =
        "linear-gradient(40deg,rgb(213, 6, 6),rgb(153, 139, 139) 40%,rgb(168, 168, 168));";
      readOrBtn.textContent = "Not read";
    } else {
      BookEl.style.background =
        "linear-gradient( 40deg,rgb(6, 213, 13),rgb(139, 153, 139) 40%,rgb(168, 168, 168))";
      readOrBtn.textContent = "Read";
    }
    BookEl.appendChild(newBookRead);
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", function () {
      removeNumber = this.parentElement.id.replace(/\D/g, "");
      myLibrary.splice(removeNumber, 1);
      displayBook();
    });

    BookEl.appendChild(removeBtn);
  }
  bookCon.appendChild(addBookBtn);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function clearForm() {
  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";
  readOrInput.checked = false;
}

const bookCon = document.getElementById("bookCon");

const addBookBtn = document.getElementById("addBookBtn");
const createBtn = document.getElementById("createBtn");

const bookForm = document.getElementById("bookForm");
const formBackground = document.getElementById("formBackground");
const formTitleLab = document.getElementById("formTitleLab");

addBookBtn.addEventListener("click", function () {
  bookForm.style.visibility = "visible";
  formBackground.style.visibility = "visible";
});

function hideForm() {
  bookForm.style.visibility = "hidden";
  formBackground.style.visibility = "hidden";
}
