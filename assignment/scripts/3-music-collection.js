console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [
];

/**
 * Question 1: Create a function named `addToCollection`.
 * 
 * This function should:
    - Take in a `collection` parameter, so that this function can be used to add to *either collection*
    - Take in the album's `title`, `artist`, `yearPublished` as input parameters
    - Create a new object having the above properties
    - Add the new object to the end of the `collection` array
    - `return` the newly created object
 */
function addToCollection(collection, title, artist, yearPublished) {
  let obj = {
    title,
    artist,
    yearPublished
  };
  collection.push(obj);
  return obj;
}


/**
 * Question 2: Use and Test the `addToCollection` function:
  - Add 6 albums to **your** collection.
  - `console.log`` each album as added using the function's returned value.
  - After all are added, console.log the `collection` array.
 */
addToCollection(myCollection, 'Let It Bleed', 'The Rolling Stones', 1969);
addToCollection(myCollection, 'Sticky Fingers', 'The Rolling Stones', 1971);
addToCollection(myCollection, 'Abbey Road', 'The Beatles', 1969);
addToCollection(myCollection, 'Please Please Me', 'The Beatles', 1963);
addToCollection(myCollection, 'London Calling', 'The Clash', 1979);
addToCollection(myCollection, `The Three E.P.'s`, 'The Beta Band', 1998);
console.log(myCollection)

/**
 * Question 3: Create a function named `showCollection`. This function should:
  - Take in a `collection` parameter. (This allows it to be reused to show any array of album objects!)
  - Loop over the `collection` and `console.log` each album's information 
  formatted **within a single string**,
  - Test the `showCollection` function.
 */
const showCollection = collection => {
  for (let album of collection) {
    console.log(`${album.title} by ${album.artist} published in ${album.yearPublished}`);
  }
};

showCollection(myCollection);

/**
 * Question 4: Add a function named `findByArtist`. This function should:
  - Take in a `collection` parameter. Remember, we want to be able to search any collection!
  - Take in an `artist` (string) parameter
  - Create an empty array to hold any matching results, if any
  - Loop through the `collection` and add any album objects with a matching artist to the array.
  - Return the array with the matching results. (If no results are found, an empty array should be returned.)

- Test the `findByArtist` function.
 */
const findByArtist = (collection, artist) => {
  let matches = [];
  for (let album of collection) {
    if (album.artist === artist) {
      matches.push(album);
    }
  }
  return matches;
};

let test = findByArtist(myCollection, 'The Beatles');
console.log(test);

/**
 * Stretch goal #1: Create a function called `search` that will allow for 
 * searching by `artist` **and** `year`. This function should:
  - Take in a `collection` parameter.
  - Take in a `searchCriteria` parameter.

  The returned output from `search` should meet these requirements:
    - Return a new array of all items in the `collection` matching **all** of the 
    search criteria.
    - If no results are found, return an empty array.
    - If there is no search object, an empty search object
    , or missing `artist`/`year` data provided as input, 
    `return` **all albums** from the `collection` being searched.
 */
function search(collection, searchCriteria) {
  let matchingAlbums = [];
  for (let album of collection) {
    if (album.artist === searchCriteria.artist && album.yearPublished === searchCriteria.year) {
      matchingAlbums.push(album);
    }
  }
  if (Object.keys(searchCriteria).length === 0 || searchCriteria.artist === undefined || searchCriteria.year === undefined) {
    return collection;
  } else {
    return matchingAlbums;
  }
}

let criteria = {
  artist: 'The Beatles',
  year: 1969
};

// Appears to be working but failing tests
search(myCollection, criteria);

/**
 * Stretch goal #2:
 */

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
