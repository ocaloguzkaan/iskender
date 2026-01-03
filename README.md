# Iskender Design System

**A flavorsome, minimalist-maximalist CSS framework built for impact.**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-2.0.0-red)

## 🥙 The Philosophy

**Iskender** is not just a framework; it's a design ethos inspired by the legendary dish. It rejects the cold, sterile aesthetics of modern web design in favor of warmth, richness, and bold structural elements. 

We believe that digital interfaces should be **rich** and **satisfying**.
*   **No Neon**: We trade cyber-glare for deep, earthy contrast.
*   **No Ai-Gened Noise**: Every border and shadow is intentional.
*   **Pure Flavor**: A "Minimalist-Maximalist" approach—stripping away the unnecessary to maximize the impact of what remains.

## 🎨 The Palette

Our color system is derived from gastric harmony:

| Element | Color | Hex | Role |
| :--- | :--- | :--- | :--- |
| **The Sauce** | Rich Tomato Red | `#D93025` | Primary actions, headers, attention. |
| **The Butter** | Sizzling Gold | `#FBBC05` | Highlights, hover states, accents. |
| **The Foundation** | Pita Beige | `#FDFBF7` | Backgrounds, warmth, readability. |
| **The Char** | Grilled Dark Brown | `#3C2A20` | Text, borders, structure. |

## 📦 Installation

Simply download the `iskender.css` file and link it in your HTML project.

```html
<link rel="stylesheet" href="path/to/iskender.css">
```

Or clone the repository:

```bash
git clone https://github.com/yourusername/iskender-design-system.git
```

## 🚀 Usage

### Buttons
The "Sizzling" button style features a deep shadow that depresses on click.

```html
<!-- Primary Action -->
<button class="isk-btn">Order Now</button>

<!-- Accent Action -->
<button class="isk-btn isk-btn-gold">More Info</button>
```

### Cards
Cards feature a unique "Sauce Drip" hover effect (`::before` psuedo-element) that expands a red accent bar across the top.

```html
<div class="isk-card">
  <h3>Delicious Content</h3>
  <p>Rich text goes here.</p>
</div>
```

### Typography
We use **DM Serif Display** for headers to evoke tradition and **Lexend** for modern readability.

```css
/* Already included in iskender.css via Google Fonts import */
```

### Inverted Mode (Charred)
Toggle the class `.inverted` on the `<body>` tag to switch to the dark, "charred" theme.

```javascript
document.body.classList.toggle('inverted');
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

*Made with hunger.*
