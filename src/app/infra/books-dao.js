class BooksDao {

  constructor(db) {
    this._db = db;
  }

  list(callback) {
    return new Promise((resolve, reject) => {
      this._db.all('SELECT * FROM LIVROS', (err, result) => {
        if (err) return reject("Ops! We got a problem to list your books.")

        return resolve(result);
      })
    })

  }

  searchById(id) {
    console.log('metod', id)
    return new Promise((resolve, reject) => {
      this._db.get(`
            SELECT * FROM LIVROS WHERE id = ?
            `,
            [id],
        function (error, results, fields) {
          if (error) {
            console.log(error);
            return reject('Ops! We had an error to search this id. Please try again.');
          }
          console.log('results', results)
          resolve(results);
        }
      )
    })
  }

  add(book) {
    return new Promise((resolve, reject) => {
      this._db.run(`
            INSERT INTO LIVROS (
                    titulo,
                    preco,
                    descricao
                ) values (?, ?, ?)
            `,
        [
          book.title,
          book.price,
          book.description
        ],
        function (err) {
          if (err) {
            return reject('Ops! We had an erroe to register this book. Please try again.');
          }
          resolve();
        }
      )
    });
  }

  update(book) {
    return new Promise((resolve, reject) => {
      this._db.run(`
        UPDATE LIVROS SET
        titulo = ?,
        preco = ?,
        descricao = ?
        WHERE id = ?
      `, [
        book.titulo,
        book.preco,
        book.descricao,
        book.id
      ],
      err => {
        if(err) {
          return reject('Ops! We had an erroe to register this book. Please try again.');
        }
      })
      return resolve()
    })
  }
}

module.exports = BooksDao;