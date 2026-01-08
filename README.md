# 📚 Book Library System (OOP Implementation)

A professional and lightweight Book Library application built using **Object-Oriented Programming (OOP)** principles in JavaScript. This project serves as a comprehensive guide to understanding both classical and modern JavaScript concepts.

---

## 🚀 Features
- **Add/Remove Books:** Manage your library collection dynamically.
- **Data Validation:** Built-in checks to ensure all book details are provided.
- **Smart Formatting:** Book titles are automatically capitalized using Getters.
- **Live Statistics:** Real-time tracking of the total number of books using Static methods.
- **Modern UI:** Responsive design built with SASS nesting and variables.

## 🛠️ Tech Stack
- **JavaScript (ES6+):** Logic, Classes, and DOM Manipulation.
- **SASS (SCSS):** Advanced styling with Mixins and Variables.
- **HTML5:** Semantic structure.

---

## 🧠 Core JavaScript Concepts Used

### 1. Function Constructors & Prototypes
I used a **Function Constructor** for the notification system. This demonstrates how to attach methods to the `prototype` to save memory, a fundamental concept in JavaScript's inheritance model.

### 2. ES6 Classes
The core application logic is organized into Classes. This provides a cleaner syntax and makes the code more maintainable and scalable.

### 3. Encapsulation (Getters & Setters)
To ensure data integrity, I implemented:
- **Getters:** To format data (e.g., converting titles to uppercase) when accessed.
- **Setters:** To validate data before it is assigned to the object properties.



### 4. Static Methods
The book counter is handled by a **Static Method**. Since the total number of books is a property of the library itself, not an individual book, it is called directly on the `Book` class.

### 5. Event Delegation
To optimize performance, I used **Event Delegation**. Instead of adding a listener to every delete button, I attached a single listener to the parent element, allowing it to handle events for current and future list items.



---

## 📂 Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/Asilbek2706/Books-Library-JS.git](https://github.com/Asilbek2706/Books-Library-JS.git)
