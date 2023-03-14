
//OBS: AS ARROW FUNCTION REMOVE O RETURN E AS CHAVES E A PALAVRA FUNCION
const movies = [
{id: 1, MovieName: 'Deja Vu'},
{id: 2, MovieName: 'Laravel'},
{id: 3, MovieName: 'Bolero'},
]
console.log(movies.find(movie => movie.MovieName == 'Bolero'))