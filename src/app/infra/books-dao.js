class BooksDao {

  constructor(db) {
    this._db = db;
  }

  list(callback) {
    return new Promise((resolve, reject) => {
      this._db.all('SELECT * FROM LIVROS', (err, result) => {
        if(err) return reject("Ops! We got a problem to list your books.")

        return resolve(result);
      })
    })
    
  }
}

module.exports = BooksDao;