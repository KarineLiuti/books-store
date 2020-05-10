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
}