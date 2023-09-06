console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [
];

function addToCollection(collection, title, artist, yearPublished) {
  let obj = {
    title,
    artist,
    yearPublished
  };
  collection.push(obj);
  return obj;
}

addToCollection(myCollection, 'Let It Bleed', 'The Rolling Stones', 1969);
addToCollection(myCollection, 'Sticky Fingers', 'The Rolling Stones', 1971);
addToCollection(myCollection, 'Abbey Road', 'The Beatles', 1969);
addToCollection(myCollection, 'Please Please Me', 'The Beatles', 1963);
addToCollection(myCollection, 'London Calling', 'The Clash', 1979);
addToCollection(myCollection, `The Three E.P.'s`, 'The Beta Band', 1998);
console.log(myCollection)

const showCollection = collection => {
  for (let album of collection) {
    console.log(`${album.title} by ${album.artist} published in ${album.yearPublished}`);
  }
}

showCollection(myCollection);

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
