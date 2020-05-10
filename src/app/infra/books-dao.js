class BooksDao {

  constructor(db) {
    this._db = db;
  }

  list(callback) {
    return this._db.all('SELECT * FROM LIVROS', (err, result) => {
      return callback(err, result);
    })
  }
}

module.exports = BooksDao;