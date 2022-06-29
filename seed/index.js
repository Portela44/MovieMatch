require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const movies = [
  //movie 1
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

  //movie 2
  {
    "imdb_id": "0077869",
    "name": "The Lord of the Rings",
    "year": 1979,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BOWY2MWRlMzMtY2NmYi00MjU4LWI1MjYtM2MyMGQ4Y2FkMTk5XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BOWY2MWRlMzMtY2NmYi00MjU4LWI1MjYtM2MyMGQ4Y2FkMTk5XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BOWY2MWRlMzMtY2NmYi00MjU4LWI1MjYtM2MyMGQ4Y2FkMTk5XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BOWY2MWRlMzMtY2NmYi00MjU4LWI1MjYtM2MyMGQ4Y2FkMTk5XkEyXkFqcGdeQXVyNzU1NzE3NTg@.jpg"
    },
    "premiere": "1979-07-31",
    "genres": [
      "4",
      "3",
      "14"
    ],
    "people": [
      {
        "imdb_id": "0000835",
        "name": "Ralph Bakshi",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Ralph Bakshi"
          }
        ]
      },
      {
        "imdb_id": "0174723",
        "name": "Chris Conkling",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Chris Conkling"
          }
        ]
      },
      {
        "imdb_id": "0063566",
        "name": "Peter S. Beagle",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Peter S. Beagle"
          }
        ]
      },
      {
        "imdb_id": "0866058",
        "name": "J.R.R. Tolkien",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "J.R.R. Tolkien"
          }
        ]
      }
    ],
    "imdb_rating": 62,
    "imdb_vote": 33123,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "The Lord of the Rings",
        "overview": "The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron&apos;s reign over Middle-earth.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BNjNiYmNkNDUtYzg1MC00YjdjLWJhODMtZDA4ODYwYTU2YjMzXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BNjNiYmNkNDUtYzg1MC00YjdjLWJhODMtZDA4ODYwYTU2YjMzXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BNjNiYmNkNDUtYzg1MC00YjdjLWJhODMtZDA4ODYwYTU2YjMzXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BNjNiYmNkNDUtYzg1MC00YjdjLWJhODMtZDA4ODYwYTU2YjMzXkEyXkFqcGdeQXVyODc0OTEyNDU@.jpg"
        }
      }
    ]
  },

  //movie 3
  {
    "imdb_id": "0172495",
    "name": "Gladiator",
    "year": 2000,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BMTU1NTQ0OTkyNF5BMl5BanBnXkFtZTgwMTQzMjIwMDI@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BMTU1NTQ0OTkyNF5BMl5BanBnXkFtZTgwMTQzMjIwMDI@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BMTU1NTQ0OTkyNF5BMl5BanBnXkFtZTgwMTQzMjIwMDI@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BMTU1NTQ0OTkyNF5BMl5BanBnXkFtZTgwMTQzMjIwMDI@.jpg"
    },
    "premiere": "2000-05-17",
    "genres": [
      "1",
      "3",
      "12"
    ],
    "people": [
      {
        "imdb_id": "0000631",
        "name": "Ridley Scott",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Ridley Scott"
          }
        ]
      },
      {
        "imdb_id": "0291905",
        "name": "David Franzoni",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "David Franzoni"
          }
        ]
      },
      {
        "imdb_id": "0517589",
        "name": "John Logan",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "John Logan"
          }
        ]
      },
      {
        "imdb_id": "0629933",
        "name": "William Nicholson",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "William Nicholson"
          }
        ]
      }
    ],
    "imdb_rating": 85,
    "imdb_vote": 1462531,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "Gladiator",
        "overview": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BYTllNmQ3MWYtNzE5Ny00N2UwLTg1MDgtMWIyY2FjNTNlMDEzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BYTllNmQ3MWYtNzE5Ny00N2UwLTg1MDgtMWIyY2FjNTNlMDEzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BYTllNmQ3MWYtNzE5Ny00N2UwLTg1MDgtMWIyY2FjNTNlMDEzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BYTllNmQ3MWYtNzE5Ny00N2UwLTg1MDgtMWIyY2FjNTNlMDEzXkEyXkFqcGdeQXVyMTYzMDM0NTU@.jpg"
        }
      }
    ]
  },

  //movie 4
  {
    "imdb_id": "0295297",
    "name": "Harry Potter and the Chamber of Secrets",
    "year": 2002,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BNmI3ZjNhNjYtODhjOC00NjlkLWE4MTItMDhiOGVmZmIwOWMxXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BNmI3ZjNhNjYtODhjOC00NjlkLWE4MTItMDhiOGVmZmIwOWMxXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BNmI3ZjNhNjYtODhjOC00NjlkLWE4MTItMDhiOGVmZmIwOWMxXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BNmI3ZjNhNjYtODhjOC00NjlkLWE4MTItMDhiOGVmZmIwOWMxXkEyXkFqcGdeQXVyNzU1NzE3NTg@.jpg"
    },
    "premiere": "2002-11-29",
    "genres": [
      "3",
      "13",
      "14"
    ],
    "people": [
      {
        "imdb_id": "0001060",
        "name": "Chris Columbus",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Chris Columbus"
          }
        ]
      },
      {
        "imdb_id": "0746830",
        "name": "J.K. Rowling",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "J.K. Rowling"
          }
        ]
      },
      {
        "imdb_id": "0460141",
        "name": "Steve Kloves",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Steve Kloves"
          }
        ]
      }
    ],
    "imdb_rating": 74,
    "imdb_vote": 619160,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "Harry Potter and the Chamber of Secrets",
        "overview": "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BNGE0ODQ0YjAtMzQ0Ny00NDdlLWJkYzQtODUxMWFlMWZmZjgwXkEyXkFqcGdeQXVyMTgxOTIzNzk@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BNGE0ODQ0YjAtMzQ0Ny00NDdlLWJkYzQtODUxMWFlMWZmZjgwXkEyXkFqcGdeQXVyMTgxOTIzNzk@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BNGE0ODQ0YjAtMzQ0Ny00NDdlLWJkYzQtODUxMWFlMWZmZjgwXkEyXkFqcGdeQXVyMTgxOTIzNzk@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BNGE0ODQ0YjAtMzQ0Ny00NDdlLWJkYzQtODUxMWFlMWZmZjgwXkEyXkFqcGdeQXVyMTgxOTIzNzk@.jpg"
        }
      }
    ]
  },

  //movie 5
  {
    "imdb_id": "0803096",
    "name": "Warcraft",
    "year": 2016,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BMjA2NzYyOTAzNF5BMl5BanBnXkFtZTgwNzUzMjc2ODE@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BMjA2NzYyOTAzNF5BMl5BanBnXkFtZTgwNzUzMjc2ODE@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BMjA2NzYyOTAzNF5BMl5BanBnXkFtZTgwNzUzMjc2ODE@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BMjA2NzYyOTAzNF5BMl5BanBnXkFtZTgwNzUzMjc2ODE@.jpg"
    },
    "premiere": "2016-06-03",
    "genres": [
      "1",
      "3",
      "14"
    ],
    "people": [
      {
        "imdb_id": "1512910",
        "name": "Duncan Jones",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Duncan Jones"
          }
        ]
      },
      {
        "imdb_id": "0495378",
        "name": "Charles Leavitt",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Charles Leavitt"
          }
        ]
      },
      {
        "imdb_id": "1512910",
        "name": "Duncan Jones",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Duncan Jones"
          }
        ]
      }
    ],
    "imdb_rating": 67,
    "imdb_vote": 260921,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "Warcraft",
        "overview": "As an Orc horde invades the planet Azeroth using a magic portal, a few human heroes and dissenting Orcs must attempt to stop the true evil behind this war.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BNzZmZjMwMDMtNGRiMS00Mjg0LThmMTYtNjM4MmU0Y2I2ZGM0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BNzZmZjMwMDMtNGRiMS00Mjg0LThmMTYtNjM4MmU0Y2I2ZGM0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BNzZmZjMwMDMtNGRiMS00Mjg0LThmMTYtNjM4MmU0Y2I2ZGM0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BNzZmZjMwMDMtNGRiMS00Mjg0LThmMTYtNjM4MmU0Y2I2ZGM0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
        }
      }
    ]
  },

  //movie 6
  {
    "imdb_id": "6966692",
    "name": "Green Book",
    "year": 2019,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BZDY3Y2FlZjUtOTE0Yi00NmM4LTg2ZDMtMGE5YWI4NjY1ZWNlXkEyXkFqcGdeQW1yb3NzZXI@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BZDY3Y2FlZjUtOTE0Yi00NmM4LTg2ZDMtMGE5YWI4NjY1ZWNlXkEyXkFqcGdeQW1yb3NzZXI@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BZDY3Y2FlZjUtOTE0Yi00NmM4LTg2ZDMtMGE5YWI4NjY1ZWNlXkEyXkFqcGdeQW1yb3NzZXI@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BZDY3Y2FlZjUtOTE0Yi00NmM4LTg2ZDMtMGE5YWI4NjY1ZWNlXkEyXkFqcGdeQW1yb3NzZXI@.jpg"
    },
    "premiere": "2019-02-01",
    "genres": [
      "6",
      "8",
      "12"
    ],
    "people": [
      {
        "imdb_id": "0268380",
        "name": "Peter Farrelly",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Peter Farrelly"
          }
        ]
      },
      {
        "imdb_id": "0885014",
        "name": "Nick Vallelonga",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Nick Vallelonga"
          }
        ]
      },
      {
        "imdb_id": "0192942",
        "name": "Brian Hayes Currie",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Brian Hayes Currie"
          }
        ]
      },
      {
        "imdb_id": "0268380",
        "name": "Peter Farrelly",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Peter Farrelly"
          }
        ]
      }
    ],
    "imdb_rating": 82,
    "imdb_vote": 469165,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "Green Book",
        "overview": "A working-class Italian-American bouncer becomes the driver for an African-American classical pianist on a tour of venues through the 1960s American South.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BOTE4Y2I5YjktNGMzNi00ZGNmLWI5NzItYWE0YWQzNDIzODE0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BOTE4Y2I5YjktNGMzNi00ZGNmLWI5NzItYWE0YWQzNDIzODE0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BOTE4Y2I5YjktNGMzNi00ZGNmLWI5NzItYWE0YWQzNDIzODE0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BOTE4Y2I5YjktNGMzNi00ZGNmLWI5NzItYWE0YWQzNDIzODE0XkEyXkFqcGdeQXVyMTYzMDM0NTU@.jpg"
        }
      }
    ]
  },

  //movie 7
  {
    "imdb_id": "0266543",
    "name": "Finding Nemo",
    "year": 2003,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BMjMwMDYxNTUyMl5BMl5BanBnXkFtZTcwNTIwMjQ4Nw@@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BMjMwMDYxNTUyMl5BMl5BanBnXkFtZTcwNTIwMjQ4Nw@@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BMjMwMDYxNTUyMl5BMl5BanBnXkFtZTcwNTIwMjQ4Nw@@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BMjMwMDYxNTUyMl5BMl5BanBnXkFtZTcwNTIwMjQ4Nw@@.jpg"
    },
    "premiere": "2003-11-28",
    "genres": [
      "4",
      "3",
      "8"
    ],
    "people": [
      {
        "imdb_id": "0004056",
        "name": "Andrew Stanton",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Andrew Stanton"
          }
        ]
      },
      {
        "imdb_id": "0881279",
        "name": "Lee Unkrich",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Lee Unkrich"
          }
        ]
      },
      {
        "imdb_id": "0004056",
        "name": "Andrew Stanton",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Andrew Stanton"
          }
        ]
      },
      {
        "imdb_id": "0677037",
        "name": "Bob Peterson",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Bob Peterson"
          }
        ]
      },
      {
        "imdb_id": "0721675",
        "name": "David Reynolds",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "David Reynolds"
          }
        ]
      }
    ],
    "imdb_rating": 82,
    "imdb_vote": 1022835,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "Finding Nemo",
        "overview": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BN2MxMGRkZmMtYzFhMS00YTdmLTgwMjYtZWNlMjZhZjJmNmVmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BN2MxMGRkZmMtYzFhMS00YTdmLTgwMjYtZWNlMjZhZjJmNmVmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BN2MxMGRkZmMtYzFhMS00YTdmLTgwMjYtZWNlMjZhZjJmNmVmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BN2MxMGRkZmMtYzFhMS00YTdmLTgwMjYtZWNlMjZhZjJmNmVmXkEyXkFqcGdeQXVyMTYzMDM0NTU@.jpg"
        }
      }
    ]
  },

  //movie 8
  {
    "imdb_id": "0092099",
    "name": "Top Gun",
    "year": 1986,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BMjExNzExNjIzM15BMl5BanBnXkFtZTcwMjA5NzAwOQ@@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BMjExNzExNjIzM15BMl5BanBnXkFtZTcwMjA5NzAwOQ@@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BMjExNzExNjIzM15BMl5BanBnXkFtZTcwMjA5NzAwOQ@@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BMjExNzExNjIzM15BMl5BanBnXkFtZTcwMjA5NzAwOQ@@.jpg"
    },
    "premiere": "1986-08-21",
    "genres": [
      "1",
      "12"
    ],
    "people": [
      {
        "imdb_id": "0001716",
        "name": "Tony Scott",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Tony Scott"
          }
        ]
      },
      {
        "imdb_id": "0143596",
        "name": "Jim Cash",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Jim Cash"
          }
        ]
      },
      {
        "imdb_id": "0258390",
        "name": "Jack Epps Jr.",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Jack Epps Jr."
          }
        ]
      },
      {
        "imdb_id": "1274594",
        "name": "Ehud Yonay",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Ehud Yonay"
          }
        ]
      }
    ],
    "imdb_rating": 69,
    "imdb_vote": 382822,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "Top Gun",
        "overview": "As students at the United States Navy&apos;s elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BYTM0N2U4NzctY2ZkMi00ZDM1LWI2NGUtMDQ4ZWNlMzliNWFjXkEyXkFqcGdeQXVyMjgyNDU4MjE@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BYTM0N2U4NzctY2ZkMi00ZDM1LWI2NGUtMDQ4ZWNlMzliNWFjXkEyXkFqcGdeQXVyMjgyNDU4MjE@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BYTM0N2U4NzctY2ZkMi00ZDM1LWI2NGUtMDQ4ZWNlMzliNWFjXkEyXkFqcGdeQXVyMjgyNDU4MjE@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BYTM0N2U4NzctY2ZkMi00ZDM1LWI2NGUtMDQ4ZWNlMzliNWFjXkEyXkFqcGdeQXVyMjgyNDU4MjE@.jpg"
        }
      }
    ]
  },

  // movie 9
  {
    "imdb_id": "0167260",
    "name": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BNDRmNjQxOWItNTY3MS00M2ExLWJiYWYtNGQ2OTI5MWRkYWFlXkEyXkFqcGdeQWxiaWFtb250._V1_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BNDRmNjQxOWItNTY3MS00M2ExLWJiYWYtNGQ2OTI5MWRkYWFlXkEyXkFqcGdeQWxiaWFtb250._V1_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BNDRmNjQxOWItNTY3MS00M2ExLWJiYWYtNGQ2OTI5MWRkYWFlXkEyXkFqcGdeQWxiaWFtb250._V1_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BNDRmNjQxOWItNTY3MS00M2ExLWJiYWYtNGQ2OTI5MWRkYWFlXkEyXkFqcGdeQWxiaWFtb250._V1_.jpg"
    },
    "premiere": "2003-12-17",
    "genres": [
      "1",
      "3",
      "12"
    ],
    "people": [
      {
        "imdb_id": "0001392",
        "name": "Peter Jackson",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Peter Jackson"
          }
        ]
      },
      {
        "imdb_id": "0866058",
        "name": "J.R.R. Tolkien",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "J.R.R. Tolkien"
          }
        ]
      },
      {
        "imdb_id": "0909638",
        "name": "Fran Walsh",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Fran Walsh"
          }
        ]
      },
      {
        "imdb_id": "0101991",
        "name": "Philippa Boyens",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Philippa Boyens"
          }
        ]
      }
    ],
    "imdb_rating": 90,
    "imdb_vote": 1787753,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "The Lord of the Rings: The Return of the King",
        "overview": "Gandalf and Aragorn lead the World of Men against Sauron&apos;s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BNGJjODMxZGMtOTFlNC00MjI4LThiZWUtZTU3ZGIxYzcxMTBiXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BNGJjODMxZGMtOTFlNC00MjI4LThiZWUtZTU3ZGIxYzcxMTBiXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BNGJjODMxZGMtOTFlNC00MjI4LThiZWUtZTU3ZGIxYzcxMTBiXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BNGJjODMxZGMtOTFlNC00MjI4LThiZWUtZTU3ZGIxYzcxMTBiXkEyXkFqcGdeQXVyODc0OTEyNDU@.jpg"
        }
      }
    ]
  },

  //movie 10
  {
    "imdb_id": "0157583",
    "name": "Enigma",
    "year": 2003,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BYmRjYTdmYTYtNWY4ZC00N2FiLWEzZDUtNzk3MTc4ZDE5MGI4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BYmRjYTdmYTYtNWY4ZC00N2FiLWEzZDUtNzk3MTc4ZDE5MGI4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BYmRjYTdmYTYtNWY4ZC00N2FiLWEzZDUtNzk3MTc4ZDE5MGI4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BYmRjYTdmYTYtNWY4ZC00N2FiLWEzZDUtNzk3MTc4ZDE5MGI4XkEyXkFqcGdeQXVyNzU1NzE3NTg@.jpg"
    },
    "premiere": "2003-08-22",
    "genres": [
      "12",
      "22",
      "26"
    ],
    "people": [
      {
        "imdb_id": "0000776",
        "name": "Michael Apted",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Michael Apted"
          }
        ]
      },
      {
        "imdb_id": "0365249",
        "name": "Robert Harris",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Robert Harris"
          }
        ]
      },
      {
        "imdb_id": "0001779",
        "name": "Tom Stoppard",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Tom Stoppard"
          }
        ]
      }
    ],
    "imdb_rating": 64,
    "imdb_vote": 21069,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "Enigma",
        "overview": "A young genius frantically races against time to crack an enemy code and solve the mystery surrounding the woman he loves.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BNTI5ODU3N2UtM2QzNS00NjM1LWExNzMtNjgzYWQ5MWNkYTJmXkEyXkFqcGdeQXVyMjA0MzYwMDY@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BNTI5ODU3N2UtM2QzNS00NjM1LWExNzMtNjgzYWQ5MWNkYTJmXkEyXkFqcGdeQXVyMjA0MzYwMDY@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BNTI5ODU3N2UtM2QzNS00NjM1LWExNzMtNjgzYWQ5MWNkYTJmXkEyXkFqcGdeQXVyMjA0MzYwMDY@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BNTI5ODU3N2UtM2QzNS00NjM1LWExNzMtNjgzYWQ5MWNkYTJmXkEyXkFqcGdeQXVyMjA0MzYwMDY@.jpg"
        }
      }
    ]
  },
  //movie 11
  {
    "imdb_id": "0816692",
    "name": "Interstellar",
    "year": 2014,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BNjM5OTQzMTg4N15BMl5BanBnXkFtZTgwOTgyMjM0NTE@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BNjM5OTQzMTg4N15BMl5BanBnXkFtZTgwOTgyMjM0NTE@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BNjM5OTQzMTg4N15BMl5BanBnXkFtZTgwOTgyMjM0NTE@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BNjM5OTQzMTg4N15BMl5BanBnXkFtZTgwOTgyMjM0NTE@.jpg"
    },
    "premiere": "2014-11-07",
    "genres": [
      "3",
      "12",
      "27"
    ],
    "people": [
      {
        "imdb_id": "0634240",
        "name": "Christopher Nolan",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Christopher Nolan"
          }
        ]
      },
      {
        "imdb_id": "0634300",
        "name": "Jonathan Nolan",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Jonathan Nolan"
          }
        ]
      },
      {
        "imdb_id": "0634240",
        "name": "Christopher Nolan",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Christopher Nolan"
          }
        ]
      }
    ],
    "imdb_rating": 86,
    "imdb_vote": 1745908,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "Interstellar",
        "overview": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity&apos;s survival.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BNjhlZDRlN2UtN2E0MS00N2I4LTgxOGItMWYxZDU4ODY1ZWFjXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BNjhlZDRlN2UtN2E0MS00N2I4LTgxOGItMWYxZDU4ODY1ZWFjXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BNjhlZDRlN2UtN2E0MS00N2I4LTgxOGItMWYxZDU4ODY1ZWFjXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BNjhlZDRlN2UtN2E0MS00N2I4LTgxOGItMWYxZDU4ODY1ZWFjXkEyXkFqcGdeQXVyMTYzMDM0NTU@.jpg"
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