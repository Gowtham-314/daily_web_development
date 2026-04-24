# HTML Notes 00 (From Selected Folders)

These notes are based on the following folders:
- HTML_Mastery/HTML_0
- HTML_Mastery/HTML_Form
- HTML_Mastery/HTML_lists
- HTML_Mastery/HTML_Table
- HTML_Mastery/HTML_Tags

Goal: understand each file in simple language and revise quickly.

## 1. HTML_0 Folder

### first-web-page.html
- Shows a basic HTML page structure:
	`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.
- Uses heading (`<h1>`) and paragraphs (`<p>`).
- Good starting file for beginners.

### simple-page.html
- Demonstrates simple styling with inline CSS.
- Uses `<hr>` and scrolling text with `<marquee>`.
- Uses `<center>` and custom `<bottom>` tag.

Important:
- `<marquee>` and `<center>` are obsolete in modern HTML.
- `<bottom>` is not a standard HTML tag.

### html-elements.html
- Combines multiple elements in one file:
	button, form, labels, inputs, image, table.
- Good as an element practice sheet.

Issue seen:
- Comments written as `<! ... >` are invalid. Correct format is `<!-- ... -->`.

### navigation-bar.html
- Builds a simple menu area with a button to show/hide list.
- Uses `hidden` attribute and inline JavaScript expression.

Good concept:
- Basic interactivity in HTML using button click.

Improvement:
- Menu items should be wrapped in `<li>` inside `<ul>` for proper structure.

### sample-web-page.html
- Demonstrates a full sample layout with:
	header, section, buttons, table, footer, CSS, and small JavaScript.
- Uses semantic tags like `<main>`, `<header>`, `<section>`, `<footer>`.

Issues seen:
- Custom tags `<top>` and `<bottom>` are not standard.
- CSS class `.h1ero` looks like a typo for `.hero`.

---

## 2. HTML_Form Folder

### label-tag-example.html
- Explains two ways to use `<label>`:
1. `for` attribute linked to input `id`.
2. Wrapping `<input>` inside `<label>`.

Why label is important:
- Better accessibility.
- Clicking label focuses/selects related input.

Issue seen:
- Same `id` value used for multiple inputs (`Student`). IDs should be unique.

### label-tag-practice.html
- Small practice file for label + radio input.
- Good for understanding basic label association.

---

## 3. HTML_lists Folder

### html-lists.html
- Covers:
	unordered list (`<ul>`), ordered list (`<ol>`), reversed list, type, start, and description list (`<dl>`).
- Good coverage of list variations.

Styling note:
- `list-style-type: none;` removes bullets/numbers visually.

### marquee.html
- Explains marquee attributes with examples:
	`behavior`, `direction`, `scrollamount`, `bgcolor`, `width`, `height`, `loop`.

Important:
- `<marquee>` is deprecated. Use CSS animations for modern projects.

---

## 4. HTML_Table Folder

### basic-table.html
- Basic table creation with rows and columns.
- Uses CSS for border, padding, border-collapse.

Note:
- Using `border-collapse: collapse;` and `border-spacing` together can conflict in behavior.

### table-styling.html
- Compares two tables with different styling.
- Shows how id-specific styling works (`#t01`).

### table-colspan.html
- Demonstrates `colspan`.
- One header cell spans two columns.

### table-rowspan.html
- Demonstrates `rowspan`.
- One cell spans two rows.

### nested-table.html
- Shows table inside table (nested table).

Best practice for tables:
- Use `<caption>`, `<thead>`, `<tbody>` for readable structure.
- Use tables only for tabular data, not for page layout.

---

## 5. HTML_Tags Folder

### html-heading-structure.html
- Shows heading hierarchy from `<h1>` to `<h6>`.
- Includes paragraph content.

Key idea:
- Heading order should follow logical structure.

### html-fundamentals-showcase.html
- Demonstrates headings, paragraph, `<hr>`, comments, and images.

Issue seen:
- Lines starting with `//` in HTML body are not valid comments.
- In HTML, comments must be `<!-- comment -->`.

### html-tags.html
- Includes:
	headings, paragraph, marquee, table, meta description, external CSS, external JS.
- Good example of combining HTML + CSS + JS files.

Issues seen:
- `<marquee dir="left">` should be `direction="left"` (if used).
- CSS file linked as `html-tags.css`, but folder contains `html-tagscss`.
	This filename mismatch can stop styles from loading.

### html-tags.js
- Displays two alert messages.
- Basic JavaScript file connection with HTML.

### html-tagscss
- Contains CSS styling for body, headings, table, rows, and cells.

---

## Common Mistakes Found Across Files

1. Use of obsolete tags:
- `<marquee>`, `<center>`, `<big>`, `<tt>` style patterns should be replaced by CSS.

2. Use of non-standard custom tags:
- `<top>`, `<bottom>` are not valid semantic HTML tags.

3. Invalid comments:
- `// comment` and `<! comment >` are not valid in HTML body.
- Use `<!-- comment -->`.

4. ID reuse in forms:
- Same `id` used on multiple inputs can break label linking and scripts.

5. File/path mismatch:
- If filename in `<link>` does not match actual file, CSS will not load.

---

## Quick Revision Checklist

- Use proper HTML skeleton (`doctype`, `head`, `body`).
- Keep heading order meaningful (`h1` to `h6`).
- Use labels correctly with unique input IDs.
- Use modern CSS instead of deprecated tags.
- Use valid HTML comments only.
- Verify linked CSS/JS filenames exactly.
- Use tables for data, not layout.
- Test page once after every change.

## Final Learning Summary

You have practiced a strong beginner set:
- basic pages
- forms and labels
- all common list types
- table features (basic, colspan, rowspan, nested, styling)
- heading/tag fundamentals
- linking CSS and JavaScript

Next step to improve:
- Convert deprecated patterns to modern HTML5 + CSS best practices.
