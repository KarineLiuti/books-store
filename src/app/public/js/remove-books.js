let booksTable = document.querySelector('#books');

booksTable.addEventListener('click', (event) => {
  let clickedElement = event.target;

  if(clickedElement.dataset.type == 'remove') {
    let bookId = clickedElement.dataset.ref;
    console.log(bookId)
    fetch(`http://localhost:3000/books/delete/${bookId}`, {
      method: 'DELETE'
    })
    .then(resp => {
      let tr = clickedElement.closest(`#book_${bookId}`);
      tr.remove()
    })
    .catch(error => {
      console.error(error)
    })
  }
})