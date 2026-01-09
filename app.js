// Regular Book class
class Book {
    #price;
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.#price = price;
    }
    getPrice() {
        return `$${this.#price}`;
    }

    static formatTitle(str) {
        return str.toUpperCase();
    }
}

// Inheritance class from Book
class EBook extends Book {
    constructor(title, author, price, format = "PDF") {
        super(title, author, price);
        this.format = format;
    }

    getInfo() {
        return `${this.title} (Digital ${this.format})`;
    }
}

const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

bookForm.addEventListener('submit', e => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;
    const type = document.getElementById('type').value;

    let newBook;
    if (type === 'EBook') {
        newBook = new EBook(title, author, price);
    } else {
        newBook = new Book(title, author, price);
    }

    addBookToUI(newBook);
    updateTotal()
    bookForm.reset();
});

function addBookToUI(book) {
    const li = document.createElement('li');
    if (book instanceof EBook) li.classList.add('ebook-type');

    li.innerHTML = `
        <div>
            <strong>${Book.formatTitle(book.title)}</strong> - ${book.author}
            <br> <small>Price: ${book.getPrice()}</small>
        </div>
        <button class="delete-btn">X</button>
    `;
    bookList.appendChild(li);
}

bookList.addEventListener('click', e => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
        updateTotal();
    }
});

function updateTotal() {
    document.getElementById('totalCount').innerText = bookList.children.length;
}