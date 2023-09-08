console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [
];

/**
 * Question 1: Create a function named `addToCollection`.
 * 
 * This function should:
    - Take in a `collection` parameter, so that this function can be used to add to *either collection*
    - Take in the album's `title`, `artist`, `yearPublished`, `tracks` as input parameters
    - Create a new object having the above properties
    - Add the new object to the end of the `collection` array
    - `return` the newly created object
 */
function addToCollection(collection, title, artist, yearPublished, tracks) {
  let obj = {
    title,
    artist,
    yearPublished,
    tracks
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
addToCollection(myCollection, `The Dark Side of the Moon`, 'Pink Floyd', 1973, [{ name: 'Brain Damage', duration: 3.78 }, { name: 'Money', duration: 6.38 }, { name: 'Us and Them', duration: 7.83 }]);
console.log(myCollection)

myCollection[0].tracks = [
  {
    name: 'Gimme Sheleter',
    duration: 4.55
  },
  {
    name: 'Love in Vain',
    duration: 4.32
  },
  {
    name: `You Can't Always Get What You Want`,
    duration: 5
  }
];
myCollection[1].tracks = [
  {
    name: 'Wild Horses',
    duration: 5.72
  },
  {
    name: 'Dead Flowers',
    duration: 4.08
  },
  {
    name: `Brown Sugar`,
    duration: 3.83
  }
];
myCollection[2].tracks = [
  {
    name: 'Oh! Darling',
    duration: 3.45
  },
  {
    name: 'Come Together',
    duration: 4.33
  },
  {
    name: 'You Never Give Me Your Money',
    duration: 4.03
  }
];
myCollection[3].tracks = [
  {
    name: 'Please Please Me',
    duration: 3.03
  },
  {
    name: 'I Saw Her standing There',
    duration: 2.93
  },
  {
    name: 'Twist and Shout',
    duration: 2.55
  }
];
myCollection[4].tracks = [
  {
    name: 'Train in Vain',
    duration: 3.18
  },
  {
    name: 'The Guns of Brixton',
    duration: 3.20
  },
  {
    name: 'London Calling',
    duration: 3.33
  }
];
myCollection[5].tracks = [
  {
    name: 'I Know',
    duration: 3.98
  },
  {
    name: 'Dry the Rain',
    duration: 6.08
  },
  {
    name: 'Dr Baker',
    duration: 4.15
  }
];

/**
 * Question 3: Create a function named `showCollection`. This function should:
  - Take in a `collection` parameter. (This allows it to be reused to show any array of album objects!)
  - Loop over the `collection` and `console.log` each album's information 
  formatted **within a single string**,
  - Test the `showCollection` function.
 */
const showCollection = collection => {
  for (let album of collection) {
    console.log(`${album.title} by ${album.artist} published in ${album.yearPublished} with tracks:`);
    for (let track of album.tracks) {
      console.log(`${track.name}: ${track.duration} minutes`)
    }
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
search(myCollection, criteria);

/**
 * Stretch goal #2: Add an array of `tracks` to each of your album objects. 
 * Each track should have a `name` and `duration`. 
 * You will need to update the functions to support this new property:
  - Update the `addToCollection` function to also take an input parameter for the array of tracks.
  - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
  - ```
    TITLE by ARTIST, published in YEAR:
        1. NAME: DURATION
        2. NAME: DURATION
        3. NAME: DURATION
    TITLE by ARTIST, published in YEAR:
        1. NAME: DURATION
        2. NAME: DURATION
    ```
  - Update `search` to allow an optional `trackName` search criteria. 
    - IF the search object has a `trackName` property, only search for that, *ignoring* any `artist` or `year` properties.
 */
console.log(myCollection);



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
