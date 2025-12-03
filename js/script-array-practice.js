//STEP 1 - a string array
// let favoriteMovies = ['Demon Slayer - Infinity Castle', 'Demon Slayer - Mugen Train', 'Haikyu!! The Dumpster Battle', 'BLUE LOCK -EPISODE NAGI-', 'A Minecraft Movie']
// console.log(favoriteMovies[1]) // 2nd

//STEP 2 - constructor method
// let movies = new Array(5)
// movies[0] = 'Demon Slayer - Infinity Castle'
// movies[1] = 'Demon Slayer - Mugen Train'
// movies[2] = 'Haikyu!! The Dumpster Battle'
// movies[3] = 'BLUE LOCK -EPISODE NAGI-'
// movies[4] = 'A Minecraft Movie'

// console.log(movies[0]); // 1st

//STEP 3 - Add a new movie
// let movies = new Array(5)
// movies[0] = 'Demon Slayer - Infinity Castle'
// movies[1] = 'Demon Slayer - Mugen Train'
// movies[2] = 'Haikyu!! The Dumpster Battle'
// movies[3] = 'BLUE LOCK -EPISODE NAGI-'
// movies[4] = 'A Minecraft Movie'

// movies.splice(2, 0, "Jurassic World: Rebirth") // 3rd（index 2）
// console.log(movies.length)   // 6

//STEP 4 -  delete operator
// let movies = ['Demon Slayer - Infinity Castle', 'Demon Slayer - Mugen Train', 'Haikyu!! The Dumpster Battle', 'BLUE LOCK -EPISODE NAGI-', 'A Minecraft Movie']
// delete movies[0] // Delate 1st
// console.log(movies)

//STEP 5 - for/in loop
// let movies = ['Demon Slayer - Infinity Castle', 'Demon Slayer - Mugen Train', 'Haikyu!! The Dumpster Battle', 'BLUE LOCK -EPISODE NAGI-', 'A Minecraft Movie', 'Lilo & Stitch', 'Jurassic World: Rebirth']

// for (let index in movies) {
//     console.log(movies[index])
// }

//STEP 6 -  for/of loop
// let movies = ['Demon Slayer - Infinity Castle', 'Demon Slayer - Mugen Train', 'Haikyu!! The Dumpster Battle', 'BLUE LOCK -EPISODE NAGI-', 'A Minecraft Movie', 'Lilo & Stitch', 'Jurassic World: Rebirth']

// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 7 - Sort
// let movies = ['Demon Slayer - Infinity Castle', 'Demon Slayer - Mugen Train', 'Haikyu!! The Dumpster Battle', 'BLUE LOCK -EPISODE NAGI-', 'A Minecraft Movie', 'Lilo & Stitch', 'Jurassic World: Rebirth']

// let sortedMovies = movies.sort()

// for (let movie of sortedMovies) {
//     console.log(movie)
// }

//STEP 8 - Movies I like and regret watching
// let movies = ['Demon Slayer - Infinity Castle', 'Demon Slayer - Mugen Train', 'Haikyu!! The Dumpster Battle', 'BLUE LOCK -EPISODE NAGI-', 'A Minecraft Movie', 'Lilo & Stitch', 'Jurassic World: Rebirth']

// let leastFavMovies = ['Attack on Titan The Movie: The Last Attack', 'Dragonball Evolution', 'Death Note']

// console.log('Movies I like:\n\n')
// for (let movie of movies) {
//     console.log(movie)
// }

// console.log('\n\nMovies I regret watching:\n\n')
// for (let movie of leastFavMovies) {
//     console.log(movie)
// }

//STEP 9 - Reverse sorted
// let movies = ['Demon Slayer - Infinity Castle', 'Demon Slayer - Mugen Train', 'Haikyu!! The Dumpster Battle', 'BLUE LOCK -EPISODE NAGI-', 'A Minecraft Movie', 'Lilo & Stitch', 'Jurassic World: Rebirth']

// let leastFavMovies = ['Attack on Titan The Movie: The Last Attack', 'Dragonball Evolution', 'Death Note']

// movies = movies.concat(leastFavMovies)
// let reversedSorted = movies.sort().reverse()

// for (let movie of reversedSorted) {
//     console.log(movie)
// }


//STEP 10 - Last movie
// let movies = ['Demon Slayer - Infinity Castle', 'Demon Slayer - Mugen Train', 'Haikyu!! The Dumpster Battle', 'BLUE LOCK -EPISODE NAGI-', 'A Minecraft Movie', 'Lilo & Stitch', 'Jurassic World: Rebirth']

// let leastFavMovies = ['Attack on Titan The Movie: The Last Attack', 'Dragonball Evolution', 'Death Note']

// movies = movies.concat(leastFavMovies)
// let reversedSorted = movies.sort().reverse()
// let lastMovie = reversedSorted[reversedSorted.length - 1]

// console.log(lastMovie)


//STEP 11 - 1st movie
// let movies = ['Demon Slayer - Infinity Castle', 'Demon Slayer - Mugen Train', 'Haikyu!! The Dumpster Battle', 'BLUE LOCK -EPISODE NAGI-', 'A Minecraft Movie', 'Lilo & Stitch', 'Jurassic World: Rebirth']

// let leastFavMovies = ['Attack on Titan The Movie: The Last Attack', 'Dragonball Evolution', 'Death Note']

// movies = movies.concat(leastFavMovies)
// let reversedSorted = movies.sort().reverse()

// console.log(reversedSorted[0])

//STEP 12 - replace the movies
// let movies = ['Demon Slayer - Infinity Castle', 'Demon Slayer - Mugen Train', 'Haikyu!! The Dumpster Battle', 'BLUE LOCK -EPISODE NAGI-', 'A Minecraft Movie', 'Lilo & Stitch', 'Jurassic World: Rebirth']

// let leastFavMovies = ['Attack on Titan The Movie: The Last Attack', 'Dragonball Evolution', 'Death Note']

// movies = movies.concat(leastFavMovies)
// let reversedSorted = movies.sort().reverse()

// let replacementMovies = ['GODZILLA: ORTHOchomatic', 'Chainsaw Man – The Movie: Reze Arc', 'JUJUTSU KAISEN: Execution']

// let indicesToReplace = []
// for (let i = 0; i < leastFavMovies.length; i++) {
//     let idx = reversedSorted.indexOf(leastFavMovies[i])
//     if (idx >= 0) {
//         indicesToReplace.push(idx)
//     }
// }
// indicesToReplace.forEach((idx, i) => {
//     reversedSorted[idx] = replacementMovies[i]
// });

// for (let movie of reversedSorted) {
//     console.log(movie)
// }


//STEP 13 - only the movie names
// let movieRanking = [
//   ['Demon Slayer - Infinity Castle', 1],
//   ['Demon Slayer - Mugen Train', 2],
//   ['Haikyu!! The Dumpster Battle', 3],
//   ['BLUE LOCK -EPISODE NAGI-', 4],
//   ['A Minecraft Movie', 5]
// ]

// movieRanking.forEach(pair => {
//   let onlyTitles = pair.filter(item => typeof item === "string")
//   onlyTitles.forEach(title => console.log(title))
// })


//STEP 14 -  employees
// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY']

// let showEmployee = function (empArray) {
//     console.log('Employees:\n\n')
//     for (let name of empArray) {
//         console.log(name)
//     }
// }

// showEmployee(employees)

//STEP 15 -  Filtering false, null, 0 and blank values
// function filterValues(arr) {
//     return arr.filter(function (value) {
//         return value !== false && value !== null && value !== 0 && value !== ""
//     })
// }

// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16 - random item
// function getRandomItem(arr) {
//     let randomIndex = Math.floor(Math.random() * arr.length)
//     return arr[randomIndex]
// }

// let nums = [1,2,3,4,5,6,7,8,9,10]
// console.log(getRandomItem(nums))


//STEP 17 - Largest number
// function getLargestNumber(arr) {
//   return Math.max(...arr);
// }

// let numbers = [1, 25, 3, 150, 70]      // test
// console.log(getLargestNumber(numbers)) // 150