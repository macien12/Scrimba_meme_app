# 🐱 Pumpkin's Purrfect Meme Picker

An interactive web application that matches your current mood with the purrfect cat meme or GIF! Built with vanilla JavaScript, modern CSS, and Vite as part of the Scrimba Frontend Developer Career Path.

---

## 📸 Demo & Overview

Select your current emotional state, choose whether you want static images or animated GIFs, and hit **Get Image** to display a matching cat meme in a responsive modal popup.

### ✨ Features

- **Dynamic Emotion Picker:** Automatically extracts and renders unique emotion radio tags from the data set.
- **GIF Filter Toggle:** Checkbox option to filter results down to animated GIFs only.
- **Random Meme Selection:** Selects a random matching meme when multiple cat images match the selected emotion.
- **Interactive Modal Popup:** Displays the selected cat image or GIF with accessible alt text.
- **Smooth UX:** Highlights selected radio buttons and allows closing the modal via the close button or clicking outside the modal.

---

## 🛠️ Tech Stack

- **JavaScript (ES6+):** Dynamic DOM manipulation, modular imports/exports, array filtering (`filter`, `includes`), and randomized selection.
- **HTML5 & CSS3:** Semantic markup, custom radio buttons, Flexbox layout, and CSS modal overlay.
- **Vite:** Next-generation frontend tooling and development server.
- **Google Fonts:** Karla typography.

---

## 📁 Project Structure

```text
Scrimba_meme_app/
├── images/             # Cat meme image files (JPEG and GIF) & mascot
├── data.js             # Cat meme objects with emotions and GIF flags
├── index.html          # Application markup and modal structure
├── index.css           # Styling, layout, and modal animations
├── index.js            # App logic, event listeners, and filtering functions
├── package.json        # Dependencies and Vite scripts
├── vite.config.js      # Vite build configuration
└── README.md           # Project documentation
```

---

## 📚 Acknowledgments

This project was built following the **Scrimba Frontend Developer Career Path** module on JavaScript concepts and DOM manipulation.
