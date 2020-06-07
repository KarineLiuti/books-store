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
            console.log(err);
            return reject('Ops! We had an erroe to register this book. Please try again.');
          }
          resolve();
        }
      )
    });
  }
}

module.exports = BooksDao;