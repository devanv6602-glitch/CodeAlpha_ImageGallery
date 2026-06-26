# Image Gallery

A modern, responsive image gallery built with **HTML**, **CSS**, and **JavaScript**. Browse 24 high-quality sample photos, filter by category, search by keyword, and view images in a full-screen lightbox with keyboard navigation.

![Gallery preview](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80)

## Features

- **Responsive grid layout** — Adapts to mobile, tablet, and desktop screens
- **24 sample images** — High-quality photos across five categories
- **Category filters** — Nature, Animals, Technology, Food, Travel
- **Live search** — Filter by title, category, or keywords as you type
- **Lightbox viewer** — Full-size images with captions and image counter
- **Navigation** — Previous/Next buttons and arrow-key support
- **Keyboard shortcuts** — `←` / `→` to navigate, `Esc` to close
- **Dark / light mode** — Toggle theme; preference saved in localStorage
- **Lazy loading** — Thumbnails load only when scrolled into view
- **Hover animations** — Smooth zoom and overlay effects on gallery cards
- **Accessible** — ARIA labels, skip link, and keyboard-friendly controls

## Project Structure

```
IMAGE GALLERY/
├── index.html      # Main HTML structure
├── style.css       # Styles, themes, and responsive layout
├── script.js       # Gallery data, filtering, lightbox logic
├── images/         # Folder for local image assets
└── README.md       # This file
```

## Getting Started

No build tools or dependencies required. Open the gallery in any modern browser:

1. Clone or download this project
2. Open `index.html` in your browser (double-click or use Live Server)

> **Note:** Sample images load from Unsplash CDN. An internet connection is required for the default setup. To work offline, add local images to the `images/` folder — see [images/README.md](images/README.md).

## How It Works

### Gallery grid

Images are stored in a JavaScript array (`galleryImages` in `script.js`). The `renderGallery()` function builds the grid dynamically, applying lazy loading via the native `loading="lazy"` attribute.

### Filtering

- **Category buttons** set `activeCategory` and re-render matching cards
- **Search input** matches against title, category name, and keyword tags
- Both filters work together in real time

### Lightbox

Click any gallery card to open the lightbox. The viewer shows the full-resolution image, a caption, and a position counter (e.g. `3 / 24`). Navigation wraps around at the first and last image.

| Action              | Control                    |
|---------------------|----------------------------|
| Open image          | Click a gallery card       |
| Next image          | Right arrow button or `→`  |
| Previous image      | Left arrow button or `←`   |
| Close lightbox      | Close button, backdrop click, or `Esc` |

### Dark / light mode

Click the sun/moon button in the header. The chosen theme is saved to `localStorage` and restored on your next visit. If no preference is saved, the gallery follows your system theme.

## Customization

### Add or remove images

Edit the `galleryImages` array in `script.js`:

```javascript
{
  id: 25,
  title: "Your Image Title",
  category: "travel",
  keywords: ["city", "urban"],
  src: "images/your-photo.jpg",
  thumb: "images/your-photo-thumb.jpg"
}
```

### Change colors

Edit CSS custom properties at the top of `style.css`:

```css
:root {
  --color-accent: #6366f1;
  --color-bg: #f4f6f9;
  /* ... */
}
```

### Add a category

1. Add a filter button in `index.html` with a matching `data-category` value
2. Use that category string in your image objects in `script.js`

## Browser Support

Works in all modern browsers that support:

- CSS Grid
- CSS Custom Properties
- Native lazy loading (`loading="lazy"`)
- ES6 JavaScript

Tested in Chrome, Firefox, Safari, and Edge.

## License

This project is free to use for learning and personal projects. Sample photographs are from [Unsplash](https://unsplash.com) and remain subject to the [Unsplash License](https://unsplash.com/license).

## Author

Built as a beginner-friendly web project demonstrating vanilla HTML, CSS, and JavaScript best practices.
