const myLibrary = [];

const libraryContainer = document.getElementById('library-container');

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID()
}

// Function to add a book to the library
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read, this.id);
    myLibrary.push(newBook);
}

// Sample books
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, true);
addBookToLibrary('1984', 'George Orwell', 328, false);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, true);
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 279, false);
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
console.log(myLibrary);


// Function to display books in the library
function displayBooks() {
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const title = document.createElement('h2');
        title.textContent = book.title;
        bookDiv.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;
        bookDiv.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;
        bookDiv.appendChild(pages);

        const readStatus = document.createElement('p');
        readStatus.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
        bookDiv.appendChild(readStatus);

        libraryContainer.appendChild(bookDiv);
    });
}

displayBooks();
