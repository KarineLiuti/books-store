const db = require('../../config/database')
const BooksDao = require('../infra/books-dao')
module.exports = (app) => {
  
  app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body>
        </html>
    `)
  })
  
  app.get('/books', (req, res) => {
    const booksDao = new BooksDao(db);
    booksDao.list()
      .then(books => {
        return res.marko(
          require('../views/list/list.marko'),
          {
            books
          }
        )
      })
      .catch(error => console.error(error));
  })

  app.get('/books/register', function(req, resp) {
    resp.marko(require('../views/books/form/form.marko'), { book: {} })
  });

  app.get('/books/find/:id', (req, res) => {
    const booksDao = new BooksDao(db);
    booksDao.searchById(req.params.id)
      .then(book => {
        return res.marko(
          require('../views/books/form/form-update.marko'),
          {
            book
          }
        )
      })
      .catch(error => console.error(error));
  })

  app.get('/books/update', function(req, resp) {
    resp.marko(require('../views/books/form/form-update.marko'))
  });

  app.post('/books', function(req, resp) {
    const booksDao = new BooksDao(db);
    booksDao.add(req.body)
      .then(
        resp.redirect('/books')
      )
      .catch(error => console.error(error));
  });

  app.post('/books/update', function(req, resp) {
    const booksDao = new BooksDao(db);
    booksDao.update(req.body)
      .then(
        resp.redirect('/books')
      )
      .catch(error => console.error(error));
  });

  app.post('/books/delete', function(req, resp) {
    const booksDao = new BooksDao(db);
    booksDao.delete(req.body.id)
      .then(
        resp.redirect('/books')
      )
      .catch(error => console.error(error));
  });

  app.delete('/books/delete/:id', function(req, resp) {
    const id = req.params.id;

    const booksDao = new BooksDao(db);
    booksDao.delete(id)
    .then(() => resp.status(200).end())
    .catch(err => console.error(err));
});
}