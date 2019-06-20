/* URL to retrieve data:
 *************************************************/
const url = 'https://api.myjson.com/bins/vr4nw';

/* Variable to store retrieved data:
 *************************************************/
let data;

/* Methods for adding content from retrieved data
 *************************************************/
const Docs = {
  populateAll() {
    for (let i = 0; i < data.length; i++) {
      Docs.article.addSection(i);
      Docs.nav.addItem(i);
    }
  },
  article: {
    addSection(i) {
      document.getElementById(
        'main-doc'
      ).innerHTML += `<section class="main-section" id="${data[i].href}">
      <header>${data[i].id}</header>
      <article>${data[i].article}</article>
     </section>`;
    }
  },
  nav: {
    addItem(i) {
      document.getElementById('nav-ul').innerHTML += `<li>
          <a class="nav-link" href="#${data[i].href}" rel="internal">
            ${data[i].id}
          </a>
        </li>`;
    }
  }
};

/* Axios methods (promise) to retrieve data:
 *************************************************/
axios
  .get(url)
  .then(response => (data = response.data))
  .then(() => Docs.populateAll())
  .catch(error => console.log(error));
