require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require("../models/Movie");

const movies = [
  {
    imdb_id: "0848228",
    name: "The Avengers",
    year: 2012,
    image: {
      sm: "https://m.media-amazon.com/images/M/MV5BMTcwNTg1Nzg2MF5BMl5BanBnXkFtZTcwNDEwOTUwOA@@._V1_UX100_.jpg",
      md: "https://m.media-amazon.com/images/M/MV5BMTcwNTg1Nzg2MF5BMl5BanBnXkFtZTcwNDEwOTUwOA@@._V1_UX200_.jpg",
      lg: "https://m.media-amazon.com/images/M/MV5BMTcwNTg1Nzg2MF5BMl5BanBnXkFtZTcwNDEwOTUwOA@@._V1_UX400_.jpg",
      og: "https://m.media-amazon.com/images/M/MV5BMTcwNTg1Nzg2MF5BMl5BanBnXkFtZTcwNDEwOTUwOA@@.jpg"
    },
    premiere: "2012-04-27",
    genres: [
      "1",
      "3",
      "27"
    ],
    people: [
      {
        imdb_id: "0923736",
        name: "Joss Whedon",
        department: "directing",
        job: "director",
        translations: [
          {
            country: "US",
            language: "en",
            name: "Joss Whedon"
          }
        ]
      },
      {
        imdb_id: "0923736",
        name: "Joss Whedon",
        department: "writing",
        translations: [
          {
            country: "US",
            language: "en",
            name: "Joss Whedon"
          }
        ]
      },
      {
        imdb_id: "0672015",
        name: "Zak Penn",
        department: "writing",
        translations: [
          {
            country: "US",
            language: "en",
            name: "Zak Penn"
          }
        ]
      }
    ],
    imdb_rating: 80,
    imdb_vote: 1361878,
    translations: [
      {
        country: "US",
        language: "en",
        name: "The Avengers",
        overview: "Earth&apos;s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        poster: {
          sm: "https://m.media-amazon.com/images/M/MV5BMzFjMzQ4OWItNGNlMi00ZGQ5LWFhNzUtNjllZmY1ZGMxNTBjXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
          md: "https://m.media-amazon.com/images/M/MV5BMzFjMzQ4OWItNGNlMi00ZGQ5LWFhNzUtNjllZmY1ZGMxNTBjXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
          lg: "https://m.media-amazon.com/images/M/MV5BMzFjMzQ4OWItNGNlMi00ZGQ5LWFhNzUtNjllZmY1ZGMxNTBjXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
          og: "https://m.media-amazon.com/images/M/MV5BMzFjMzQ4OWItNGNlMi00ZGQ5LWFhNzUtNjllZmY1ZGMxNTBjXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
        }
      }
    ]
  },
  {
    imdb_id: "0078346",
    name: "Superman",
    year: 1979,
    image: {
      sm: "https://m.media-amazon.com/images/M/MV5BYzY2NGE1ZDQtM2MzNi00ZWViLThmZDEtMWIxZjczYTFjYzk4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX100_.jpg",
      md: "https://m.media-amazon.com/images/M/MV5BYzY2NGE1ZDQtM2MzNi00ZWViLThmZDEtMWIxZjczYTFjYzk4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX200_.jpg",
      lg: "https://m.media-amazon.com/images/M/MV5BYzY2NGE1ZDQtM2MzNi00ZWViLThmZDEtMWIxZjczYTFjYzk4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX400_.jpg",
      og: "https://m.media-amazon.com/images/M/MV5BYzY2NGE1ZDQtM2MzNi00ZWViLThmZDEtMWIxZjczYTFjYzk4XkEyXkFqcGdeQXVyNzU1NzE3NTg@.jpg"
    },
    premiere: "1979-02-08",
    genres: [
      "1",
      "3",
      "27"
    ],
    people: [
      {
        imdb_id: "0001149",
        name: "Richard Donner",
        department: "directing",
        job: "director",
        translations: [
          {
            country: "US",
            language: "en",
            name: "Richard Donner"
          }
        ]
      },
      {
        imdb_id: "0796950",
        name: "Jerry Siegel",
        department: "writing",
        translations: [
          {
            country: "US",
            language: "en",
            name: "Jerry Siegel"
          }
        ]
      },
      {
        imdb_id: "0795975",
        name: "Joe Shuster",
        department: "writing",
        translations: [
          {
            country: "US",
            language: "en",
            name: "Joe Shuster"
          }
        ]
      },
      {
        imdb_id: "0701374",
        name: "Mario Puzo",
        department: "writing",
        translations: [
          {
            country: "US",
            language: "en",
            name: "Mario Puzo"
          }
        ]
      }
    ],
    imdb_rating: 74,
    imdb_vote: 172914,
    translations: [
      {
        country: "US",
        language: "en",
        name: "Superman",
        overview: "An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home&apos;s first and greatest superhero.",
        poster: {
          sm: "https://m.media-amazon.com/images/M/MV5BYzk3ZDcyMmYtMDBhMS00NjRlLTgzYTktMmM4OGI4ZjVmZjc3XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX100_.jpg",
          md: "https://m.media-amazon.com/images/M/MV5BYzk3ZDcyMmYtMDBhMS00NjRlLTgzYTktMmM4OGI4ZjVmZjc3XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX200_.jpg",
          lg: "https://m.media-amazon.com/images/M/MV5BYzk3ZDcyMmYtMDBhMS00NjRlLTgzYTktMmM4OGI4ZjVmZjc3XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX400_.jpg",
          og: "https://m.media-amazon.com/images/M/MV5BYzk3ZDcyMmYtMDBhMS00NjRlLTgzYTktMmM4OGI4ZjVmZjc3XkEyXkFqcGdeQXVyMTYzMDM0NTU@.jpg"
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