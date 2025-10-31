function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
    }
}

const myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
console.log(myBook.info());
