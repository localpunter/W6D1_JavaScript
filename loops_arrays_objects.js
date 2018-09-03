var movie = {
  title: 'It\'s a wonderful life',
  year: 1946,
  language: 'Spanish'
};

console.log('movie:', movie);

movie.cast = ['James Stewart', 'Donna Reid'];
movie.language = 'English';

var proprtyToAccess = 'subtitle-language';
movie[proprtyToAccess] = 'German';
movie.ratings = {
  critic: 94,
  audience: 95
};
// if there are special characters i.e. -, it must be in a string else it will error.
// all keys are strings, not symbols as in Ruby
console.log('movie:', movie);

var audienceRating = movie.ratings.audience;
// movie.ratings.audience takes the audience rating from movie.ratings

console.log('audience rating:', audienceRating);

for (var key in movie) {
  var value = movie[key];
  console.log(`The ${key} is ${value}`);
}
// forin is for an object
// forof is for an array

var keys = Object.keys(movie);
console.log('keys:', keys);




// var title = movie.title;
// console.log('title:', title);


// var sports = ["football", "tennis", "rugby"];
//
// sports.push('curling');
// sports.push('snooker');
// sports.push('darts');
//
// // console.log('sports:', sports);
//
// sports.unshift('basketball');
//
//
// // sports.pop()
//
//
// // var removedSport = sports.pop()
// //
// // console.log('removed sport:', removedSport);
//
//
// // console.log('sports:', sports);
// //
// // for (var currentSport of sports) {
// //   var uppercasedSport = currentSport.toUpperCase();
// //   console.log(uppercasedSport);
// // }
//
//
// console.log('sports:', sports);
//
// for (var i =0; i < sports.length; i++) {
//   var currentSport = sports[i];
//   var uppercasedSport = currentSport.toUpperCase();
//   console.log(uppercasedSport);
// }
//
//
// // var removedSport = sports.splice(3, 1, 'chess');
// //
// // console.log('removed sport:', removedSport);
// // console.log('sports:', sports);
//
//
//
// // var numberOfElements = sports.length;
// // console.log('number of elements:', numberOfElements);
// // returns - number of elements: 3
// //
// // var firstSport = sports[0];
// // console.log('first sport:', firstSport);
// // returns - first sport: football
