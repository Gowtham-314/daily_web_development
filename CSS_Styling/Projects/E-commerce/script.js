function showPage(page) {
  const content = document.getElementById('Contact');

  const pages = {
    contact: "<h1></h1>"
  };

  content.innerHTML = pages[page];
}