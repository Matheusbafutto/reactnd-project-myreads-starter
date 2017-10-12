export function getAll() {
  return new Promise( (resolve, reject) => {
    let result = [
        {
          title: 'Arte da guerra',
           shelf:'Read',
           imageLinks: { thumbnail:'oi' }
         },
        {
          title: 'Comer rezar amar',
           shelf:'wantToRead',
           imageLinks: { thumbnail:'oi' }
         },
        {
          title: 'Rise of the Lich King',
           shelf:'currentlyReading',
           imageLinks: { thumbnail:'oi' }
         },
        {
          title: 'Branca de Neve',
           shelf:'Read',
           imageLinks: { thumbnail:'oi' }
         },
        {
          title: 'Alice',
           shelf:'Read',
           imageLinks: { thumbnail:'oi' }
         },
    ]
    resolve(result);
  })
}

export function update(book, shelf) {
  return new Promise( (resolve, reject) => {
    resolve();
  })
}
