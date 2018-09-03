var movies = [
  {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    director: 'Frank Capra',
    cast: [
      'James Stewart',
      'Donna Reed'
    ],
    ratings: {
      critic: 94,
      audience: 95
    }
  },
  {
    title: 'Black Panther',
    year: 2018,
    director: 'Ryan Coogler',
    cast: [
      'Chadwick Boseman',
      'Michael B. Jordan'
    ],
    ratings: {
      critic: 97,
      audience: 77
    }
  },
  {
    title: 'Star Wars: The Last Jedi',
    year: 2017,
    director: 'Rian Johnson',
    cast: [
      'Mark Hamill',
      'Carrie Fisher'
    ],
    ratings: {
      critic: 91,
      audience: 48
    }
  },
  {
    title: 'Citizen Kane',
    year: 1941,
    director: 'Orson Welles',
    cast: [
      'Joseph Cotten',
      'Dorothy Comingore'
    ],
    ratings: {
      critic: 100,
      audience: 90
    }
  },
];

// 1. Loop through the array of movies and make each movie's title all capital letters.

// for (var i =0; i < movies.length; i++) {
//   var currentMovie = movies[i];
//   var uppercasedMovie = currentMovie.title.toUpperCase();
//   console.log(uppercasedMovie);
// }

for (var movie of movies) {
  var title = movie.title;
  var capsTitle = title.toUpperCase();
  movie.title = capsTitle;
}

console.log('movies:', movies);

// for (var currentMovieTitle of movies) {
//   console.log(movies.title.toUpperCase);
// }
//
// console.log('movies:', title);



// 2. Loop through the array and find the movie with the title Citizen Kane. log its year of release.

for (var movie of movies) {
  if (movie.title.toUpperCase()  === 'Citizen Kane'.toUpperCase()) {
    console.log(`Year of release for Citizen Kane:, ${movie.year}`);
  }
}



// 3. Using a different kind of loop, iterate through the movies and log each movie's title and audience rating.

for (var i = 0; i < movies.length; i++) {
  var movie = movies[i];
  var audienceRating = movie.ratings.audience;
  console.log(`${movie.title} has an audience rating of ${audienceRating}`);
}


// movies: [ { title: 'IT\'S A WONDERFUL LIFE',
//     year: 1946,
//     director: 'Frank Capra',
//     cast: [ 'James Stewart', 'Donna Reed' ],
//     ratings: { critic: 94, audience: 95 } },
//   { title: 'BLACK PANTHER',
//     year: 2018,
//     director: 'Ryan Coogler',
//     cast: [ 'Chadwick Boseman', 'Michael B. Jordan' ],
//     ratings: { critic: 97, audience: 77 } },
//   { title: 'STAR WARS: THE LAST JEDI',
//     year: 2017,
//     director: 'Rian Johnson',
//     cast: [ 'Mark Hamill', 'Carrie Fisher' ],
//     ratings: { critic: 91, audience: 48 } },
//   { title: 'CITIZEN KANE',
//     year: 1941,
//     director: 'Orson Welles',
//     cast: [ 'Joseph Cotten', 'Dorothy Comingore' ],
//     ratings: { critic: 100, audience: 90 } } ]
// Year of release for Citizen Kane:, 1941
// IT'S A WONDERFUL LIFE has an audience rating of 95
// BLACK PANTHER has an audience rating of 77
// STAR WARS: THE LAST JEDI has an audience rating of 48
// CITIZEN KANE has an audience rating of 90
