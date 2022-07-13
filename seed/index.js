require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require("../models/Movie");

const movies = [
  //movie 1
  {
    imdb_id: "6723592",
    name: "Tenet",
    year: 2020,
    image: {
      sm: "https://m.media-amazon.com/images/M/MV5BZWM4MDJjNzMtYjk5Ni00MTJkLThlNjAtZDdjODhlNzU4ZTcwXkEyXkFqcGdeQWFybm8@._V1_UX100_.jpg",
      md: "https://m.media-amazon.com/images/M/MV5BZWM4MDJjNzMtYjk5Ni00MTJkLThlNjAtZDdjODhlNzU4ZTcwXkEyXkFqcGdeQWFybm8@._V1_UX200_.jpg",
      lg: "https://m.media-amazon.com/images/M/MV5BZWM4MDJjNzMtYjk5Ni00MTJkLThlNjAtZDdjODhlNzU4ZTcwXkEyXkFqcGdeQWFybm8@._V1_UX400_.jpg",
      og: "https://m.media-amazon.com/images/M/MV5BZWM4MDJjNzMtYjk5Ni00MTJkLThlNjAtZDdjODhlNzU4ZTcwXkEyXkFqcGdeQWFybm8@.jpg"
    },
    premiere: "2020-08-26",
    genres: [
      "1",
      "27",
      "32"
    ],
    people: [
      {
        imdb_id: "0634240",
        name: "Christopher Nolan",
        department: "directing",
        job: "director",
        translations: [
          {
            country: "US",
            language: "en",
            name: "Christopher Nolan"
          }
        ]
      },
      {
        imdb_id: "0634240",
        name: "Christopher Nolan",
        department: "writing",
        translations: [
          {
            country: "US",
            language: "en",
            name: "Christopher Nolan"
          }
        ]
      }
    ],
    imdb_rating: 73,
    imdb_vote: 475686,
    translations: [
      {
        country: "US",
        language: "en",
        name: "Tenet",
        overview: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        poster: {
          sm: "https://m.media-amazon.com/images/M/MV5BOTFiNDEyMTItYmI0NC00NzVhLTlmNzktZjRiYmIwMTM4OWM0XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX100_.jpg",
          md: "https://m.media-amazon.com/images/M/MV5BOTFiNDEyMTItYmI0NC00NzVhLTlmNzktZjRiYmIwMTM4OWM0XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX200_.jpg",
          lg: "https://m.media-amazon.com/images/M/MV5BOTFiNDEyMTItYmI0NC00NzVhLTlmNzktZjRiYmIwMTM4OWM0XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX400_.jpg",
          og: "https://m.media-amazon.com/images/M/MV5BOTFiNDEyMTItYmI0NC00NzVhLTlmNzktZjRiYmIwMTM4OWM0XkEyXkFqcGdeQXVyODc0OTEyNDU@.jpg"
        }
      }
    ]
  },
]

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Movie.create(movies);
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })