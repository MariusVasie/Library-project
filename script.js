const myLibrary = [];

const libraryContainer = document.getElementById('library-container');
const addBookButton = document.getElementById('add-book-btn');
const formContainer = document.getElementById('form-container');
const bookForm = document.getElementById('book-form');

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
    const newBook = new Book(title, author, pages, read);
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
        bookDiv.setAttribute('data-id', book.id);

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

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove book';
        deleteButton.addEventListener('click', () => {
            const bookId = bookDiv.getAttribute('data-id');
            const bookIndex = myLibrary.findIndex(b => b.id === bookId);
            if (bookIndex !== -1) {
                myLibrary.splice(bookIndex, 1);
                libraryContainer.removeChild(bookDiv);
            }})
        bookDiv.appendChild(deleteButton);

        libraryContainer.appendChild(bookDiv);
    });
}

displayBooks();

// Function to show the add book form
function showAddBookForm() {
    addBookButton.addEventListener('click', () => {
        formContainer.classList.toggle('hidden');
        addBookButton.classList.toggle('hidden');
    })
}

showAddBookForm();

// Function to handle form submission
function handleFormSubmission() {

    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const read = document.getElementById('read').checked;

        addBookToLibrary(title, author, pages, read);

        // Clear the library display and re-display books
        libraryContainer.innerHTML = '';
        displayBooks();

        // Reset and hide the form
        bookForm.reset();
        formContainer.classList.toggle('hidden');
        addBookButton.classList.toggle('hidden');
    })
}

handleFormSubmission();
