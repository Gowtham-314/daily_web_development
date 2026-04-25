# HTML Mastery – Detailed Revision Notes

## 1. Advertisement Block (ad.html)

### Concept
Used to display a section like ads using <div>, <section>, or <aside>.

### Example
```html
<div style="background-color: yellow; padding: 10px; border-radius: 5px;">
  Buy Now!
</div>
```

### Advanced Tip
Use <aside> for ads (semantic meaning).

---

## 2. Audio (audio.html)

### Concept
Embedding audio files.

### Example
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
```

### Advanced
- autoplay works only if muted
- support multiple formats:
```html
<source src="audio.ogg" type="audio/ogg">
```

---

## 3. Button (button.html)

### Example
```html
<button onclick="alert('Hello')">Click</button>
```

### Advanced
Better navigation:
```html
<a href="page.html" class="btn">Go</a>
```

---

## 4. Disable Right Click

### Example
```html
document.addEventListener("contextmenu", e => e.preventDefault());
```

### Note
Not secure, only basic restriction.

---

## 5. Colors

### Example
```html
<p style="color: red;">Hello</p>
```

### Advanced
Use HEX:
```css
color: #ff5733;
```

---

## 6. Forms (Very Important)

### Example
```html
<form method="post">
  <input type="text" required>
  <input type="email">
  <input type="password">
</form>
```

### Advanced
- validation
- accessibility with labels
- backend connection needed

---

## 7. Hyperlinks

### Example
```html
<a href="https://google.com" target="_blank">Open</a>
```

### Advanced
Add security:
```html
rel="noopener noreferrer"
```

---

## 8. Iframes

### Example
```html
<iframe src="page.html" width="300"></iframe>
```

---

## 9. Images

### Example
```html
<img src="image.png" alt="description">
```

### Advanced
- Always use alt
- Optimize size

---

## 10. Lists

### Types
- Ordered
- Unordered
- Description

### Example
```html
<ul>
  <li>Item</li>
</ul>
```

---

## 11. Meta Tags

### Example
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
```

---

## 12. Div vs Span

### Difference
- div → block
- span → inline

---

## 13. Text Formatting

### Example
```html
<b>Bold</b>
<i>Italic</i>
<mark>Highlight</mark>
```

---

## 14. Video

### Example
```html
<video controls>
  <source src="video.mp4">
</video>
```

---

## Final Quick Revision

- Use semantic tags
- Close all tags
- Use CSS instead of old tags
- Use proper paths
- Validate forms

