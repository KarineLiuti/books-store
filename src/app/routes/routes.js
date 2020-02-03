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
  
  app.get('/livros', (req, res) => {
    res.marko(
      require('../views/list/list.marko'),
      {
        books: [
          {
            id: 1,
            title: 'Learn Node JS'
          },
          {
            id: 2,
            title: 'Learn Java'
          }
        ]
      }
    )
  })
}