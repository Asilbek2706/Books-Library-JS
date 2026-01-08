// --- 1. FUNCTION CONSTRUCTOR ---
function UI_Tools() {}

UI_Tools.prototype.showAlert = function(message, type) {
    const div = document.createElement('div');
    div.className = `alert ${type}`;
    div.innerText = message;

    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    setTimeout(() => document.querySelector('.alert').remove(), 2500);
};

// --- 2. ES6 CLASS & GETTER/SETTER ---
class Book {
    constructor(title, author, isbn) {
        this._title = title;
        this.author = author;
        this.isbn = isbn;
    }

    get title() {
        return this._title.toUpperCase();
    }

    set title(newTitle) {
        this._title = newTitle.length > 0 ? newTitle : "Nomsiz";
    }

    // --- 3. STATIC METHOD ---
    static updateCount() {
        const count = document.querySelectorAll('#book-list li').length;
        document.getElementById('totalCount').innerText = count;
    }
}

const uiTools = new UI_Tools();

document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if(title === '' || author === '' || isbn === '') {
        uiTools.showAlert("Fill in all fields.!", "error");
    } else {
        const book = new Book(title, author, isbn);

        const list = document.getElementById('book-list');
        const li = document.createElement('li');
        li.innerHTML = `
            <span><strong>${book.title}</strong> - ${book.author}</span>
            <button class="delete">X</button>
        `;
        list.appendChild(li);

        Book.updateCount();

        uiTools.showAlert("Book added!", "success");
        e.target.reset();
    }
});

document.getElementById('book-list').addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        Book.updateCount();
        uiTools.showAlert("Book is deleted", "success");
    }
});