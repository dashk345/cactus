function render(templateName, templateCode) {
  fetch('templates/' + templateName)
    .then(response => response.text())
    .then(code => {
      let template = _.template(code)
      templateCode(template)
    });
}

function renderMenu(pages) {
  render("menu.ejs", template => {
    document.getElementById("header").innerHTML = template({
      pages: pages
    })
  })
}
