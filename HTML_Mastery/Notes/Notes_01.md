# HTML Basic Notes (Based on `HTML_Mastery/HTML_Basic`)

These notes are written from the files in the `HTML_Basic` folder.
Goal: understand what each file teaches, when to use it, and common mistakes to avoid.

## 1) `ad.html`

### What it teaches
- How to show a simple advertisement block using `<div>`.
- How inline CSS styles are applied (`background-color`, `padding`, `border`, `border-radius`).

### Important point
- There is no standard `<ad>` HTML tag. Use semantic tags like `<section>`, `<aside>`, or `<div>`.

---

## 2) `audio.html`

### What it teaches
- Embedding audio using `<audio>`.
- Using attributes: `controls`, `autoplay`, `muted`, `loop`.
- Using `<source>` for fallback and multiple formats.

### Best practice
- Prefer relative paths like `asserts/Audio.mp3` instead of local server URLs like `http://127.0.0.1:5500/...`.
- Many browsers block autoplay unless audio is muted.

---

## 3) `button.html`

### What it teaches
- Navigation button: wrapping `<button>` inside `<a href="...">`.
- JavaScript click event: `onclick="dosomething()"`.
- DOM update with `document.getElementById(...).innerHTML`.

### Best practice
- For navigation, plain `<a>` styled as button is usually cleaner.
- Keep JavaScript functions descriptive, like `updateGreeting()`.

---

## 4) `click_disable.html`

### What it teaches
- Preventing right-click context menu with:
	`document.addEventListener('contextmenu', event => event.preventDefault())`
- Displaying status text after action.

### Note
- Disabling right click improves protection only slightly; users can still inspect content in many ways.

---

## 5) `color.html`

### What it teaches
- Text colors and page background color.
- Basic color names (`red`, `green`, `blue`, etc.).

### Mistakes seen
- Extra `\` after a heading line.
- One extra `</p>` closing tag.
- `<center>` is obsolete in modern HTML. Use CSS: `text-align: center;`.

---

## 6) `forms.html`

### What it teaches
- Building a form with many input types:
	`text`, `date`, `number`, `radio`, `email`, `tel`, `password`.
- Label binding via `for` + input `id`.
- Validation using `required`.
- Dropdown using `<select>` and `<option>`.

### Good things in file
- Nice field variety.
- Uses placeholder text and required fields.

### Improvements
- Form `action` points to a local page. For real projects, send data to backend endpoint.
- Add `method="post"` when submitting sensitive data.
- Body text color and background combination can be improved for readability.

---

## 7) `hyperlinks.html`

### What it teaches
- Basic link with `<a href="...">`.
- `target="_self"` and `target="_blank"`.
- `mailto:` links for opening email apps.

### Best practice
- For external links with `_blank`, add:
	`rel="noopener noreferrer"`
	to improve security.

---

## 8) `iframes.html`

### What it teaches
- Embedding another page inside current page using `<iframe>`.
- Setting `width`, `height`, `title`.

### Best practice
- Keep `title` attribute (good for accessibility).
- Prefer relative file paths for local project examples.

---

## 9) `images.html`

### What it teaches
- Displaying online and local images.
- `alt`, `title`, `height`, `width` usage.
- Making image clickable using `<a>`.

### Mistakes seen
- `https:/www.google.com` should be `https://www.google.com`.
- Path style `asserts\Peter_Griffin.webp` works on Windows but `/` is preferred in web paths:
	`asserts/Peter_Griffin.webp`.

---

## 10) `list.html`

### What it teaches
- Unordered list: `<ul><li>...`.
- Ordered list: `<ol><li>...`.
- Description list: `<dl><dt><dd>`.

### Mistake seen
- Missing closing `</dl>` near the end.

---

## 11) `meta_tags.html`

### What it teaches
- Important meta tags:
	- `charset`
	- `viewport`
	- `description`
	- `keywords`
	- `author`
	- `http-equiv="refresh"`

### Note
- `<meta http-equiv="refresh" content="5">` refreshes every 5 seconds, usually not needed for most pages.

---

## 12) `span_div.html`

### What it teaches
- `<div>` is block-level container.
- `<span>` is inline container for styling part of text.

### Good use
- Correctly highlights one phrase in paragraph using `<span>`.

---

## 13) `text_formatting.html`

### What it teaches
- Common formatting tags:
	`b`, `i`, `u`, `s`, `mark`, `del`, `sub`, `sup`, `small`, `q`, `samp`, `kbd`, `var`, `ins`.

### Mistakes seen
- Invalid lines:
	- `This is <mal text.`
	- `This is <normal text.`
- `<big>` and `<tt>` are obsolete in HTML5.

---

## 14) `video.html`

### What it teaches
- Embedding video with `<video>`.
- Attributes: `controls`, `autoplay`, `muted`, `loop`, `width`, `height`.
- Using `<source>` element for compatibility.

### Best practice
- Use forward slash in paths: `asserts/Video.mp4`.
- Keep fallback text for unsupported browsers.

---

## Overall Summary

You have covered strong HTML basics:
- media (`audio`, `video`, `img`)
- forms
- links
- iframe
- text formatting
- lists
- metadata
- div/span containers

Main improvements to focus next:
1. Use relative paths and web-style slashes (`/`).
2. Fix small syntax errors (missing closing tags, broken URLs).
3. Replace obsolete tags (`center`, `big`, `tt`) with CSS.
4. Prefer semantic HTML and accessibility-friendly attributes.

## Quick Revision Checklist

- Always start with `<!DOCTYPE html>`.
- Add `<meta charset="UTF-8">` and viewport meta.
- Use `alt` for images and `title` for iframes when needed.
- Close all opened tags properly.
- Test links and media paths after writing.
- Use CSS for styling instead of outdated HTML tags.
