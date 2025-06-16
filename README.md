# 🍲 Digital Recipe Book

A simple and interactive web-based recipe book that allows users to add, view, and delete their favorite recipes.  
Built using **HTML**, **CSS**, and **JavaScript**, this project demonstrates key JavaScript concepts like DOM manipulation, event handling, and local storage.

---

## ✅ What I Learned from Project 1 – Digital Recipe Book

This was my first hands-on JavaScript project, where I focused on clarity, structure, and functionality. The goal was to build a recipe app using only frontend technologies with clean UX.

---

## 🔧 Features Implemented

- **Form with Validation**
  - Fields: Recipe name, ingredients, instructions, and image.
  - All fields are mandatory.
  - Modern inline validation (no alerts).

- **Image Upload and Preview**
  - Handled via `FileReader` API.
  - Converts images to Base64 for display and storage.

- **Add Recipe to List**
  - Stored each recipe as an object in a `recipes[]` array.
  - Each entry has a unique `id`, name, ingredients, instructions, and image.

- **Display Recipes**
  - Dynamically displayed using `forEach()` loop.
  - Rendered inside styled containers.

- **Search Functionality**
  - Real-time filtering using `.filter()` and `.includes()` on recipe names.

- **Delete Functionality**
  - Recipes can be deleted individually using their unique ID.

- **Save to Local Storage**
  - Recipes saved to `localStorage` along with a timestamp.
  - Automatically cleared after 30 minutes for data freshness.

- **Form Reset After Submit**
  - Used `.reset()` and manual cleanup to clear fields and image preview.

---

## 🧠 Concepts Practiced

- DOM manipulation
- Event handling
- Form validation
- Image preview via FileReader & Base64
- `forEach`, `filter`, `includes`
- `localStorage` with time-based expiry
- Defensive programming
- Code readability and clean structure

---

## 🚀 How to Run

1. **Clone this repository:**

   ```bash
   git clone https://github.com/Subhadip77/project-01-recipe-book.git
