require('dotenv').config();
const mongoose = require('mongoose');

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

]

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return // Code to create elements in the DB
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })