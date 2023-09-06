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
};

showCollection(myCollection);

const findByArtist = (collection, artist) => {
  let matches = [];
  for (let album of collection) {
    if (album.artist === artist) {
      matches.push(album);
    }
  }
  return matches;
};

let test = findByArtist(myCollection, 'The Beta Band');
console.log(test);

function search(collection, searchCriteria) {
  console.log(searchCriteria);
  let matchingAlbums = [];

  for (let album of collection) {
    if (album.artist === searchCriteria.artist && album.yearPublished === searchCriteria.year) {
      matchingAlbums.push(album);
    }
  }
  if (searchCriteria === '' || (searchCriteria.artist === '' || searchCriteria.year === '')) {
    return collection;
  } else {
    return matchingAlbums;
  }
}

let criteria = {
  artist: 'The Cats',
  year: 1969
};

// Appears to be working but failing tests
let tester = search(myCollection, criteria);
console.log(tester);

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
