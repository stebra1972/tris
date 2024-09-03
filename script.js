let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
    console.log(myLibrary);
}

function displayBooks() {
    const tableBody = document.querySelector("#libraryTable tbody");
    tableBody.innerHTML = ""; // Clear the table body

    myLibrary.forEach((book, index) => {
        let row = tableBody.insertRow();
        let titleCell = row.insertCell(0);
        let authorCell = row.insertCell(1);
        let pagesCell = row.insertCell(2);
        let readCell = row.insertCell(3);
        let deleteCell = row.insertCell(4);
        let toggleReadCell = row.insertCell(5);

        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        pagesCell.textContent = book.pages;
        readCell.textContent = book.read;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteBook(index);
        });
        deleteCell.appendChild(deleteButton);

        let toggleReadButton = document.createElement("button");
        toggleReadButton.textContent = "Toggle Read";
        toggleReadButton.addEventListener("click", () => {
            toggleReadStatus(index);
        });
        toggleReadCell.appendChild(toggleReadButton);
    });
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleReadStatus(index) {
    myLibrary[index].read = myLibrary[index].read === "yes" ? "no" : "yes";
    displayBooks();
}

document.getElementById("newBookButton").addEventListener("click", () => {
    document.getElementById("newBookForm").style.display = "block";
});

document.getElementById("onlyTableButton").addEventListener("click", () => {
    document.getElementById("newBookForm").style.display = "none";
});