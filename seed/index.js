require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require("../models/Movie");

const movies = [
  //movie 1
  {
    "imdb_id": "3582202",
    "name": "1927",
    "year": 2014,
    "premiere": "2014-03-14",
    "genres": [
      "11",
      "28",
      "12"
    ],
    "people": [
      {
        "imdb_id": "4294108",
        "name": "Laura Kaehr",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Laura Kaehr"
          }
        ]
      },
      {
        "imdb_id": "4294108",
        "name": "Laura Kaehr",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Laura Kaehr"
          }
        ]
      }
    ],
    "imdb_rating": 0,
    "imdb_vote": 0,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "1927",
        "overview": "An opera written shortly after signing of the Locarno Pact in 1925, never performed because of the conflict that soon engulfed Europe. Laura Kaehr found the libretto for this Friedens Oper written by her great-grandfather, who was...",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BMjE5NTIzNDk3NF5BMl5BanBnXkFtZTgwMDcxMTk1NzE@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BMjE5NTIzNDk3NF5BMl5BanBnXkFtZTgwMDcxMTk1NzE@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BMjE5NTIzNDk3NF5BMl5BanBnXkFtZTgwMDcxMTk1NzE@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BMjE5NTIzNDk3NF5BMl5BanBnXkFtZTgwMDcxMTk1NzE@.jpg"
        }
      }
    ]
  },
  {
    "imdb_id": "1037705",
    "name": "The Book of Eli",
    "year": 2010,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BMTgyNzc4NjE1OF5BMl5BanBnXkFtZTcwNzQ3ODY4Mg@@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BMTgyNzc4NjE1OF5BMl5BanBnXkFtZTcwNzQ3ODY4Mg@@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BMTgyNzc4NjE1OF5BMl5BanBnXkFtZTcwNzQ3ODY4Mg@@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BMTgyNzc4NjE1OF5BMl5BanBnXkFtZTcwNzQ3ODY4Mg@@.jpg"
    },
    "premiere": "2010-03-18",
    "genres": [
      "1",
      "3",
      "12"
    ],
    "people": [
      {
        "imdb_id": "0400436",
        "name": "Albert Hughes",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Albert Hughes"
          }
        ]
      },
      {
        "imdb_id": "0400441",
        "name": "Allen Hughes",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Allen Hughes"
          }
        ]
      },
      {
        "imdb_id": "1729428",
        "name": "Gary Whitta",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Gary Whitta"
          }
        ]
      }
    ],
    "imdb_rating": 68,
    "imdb_vote": 314960,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "The Book of Eli",
        "overview": "A post-apocalyptic tale, in which a lone man fights his way across America in order to protect a sacred book that holds the secrets to saving humankind.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BMjYzMWYxYzItMjkzMC00N2E4LTg3MGEtODY4MDYyZGRkMjI0XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BMjYzMWYxYzItMjkzMC00N2E4LTg3MGEtODY4MDYyZGRkMjI0XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BMjYzMWYxYzItMjkzMC00N2E4LTg3MGEtODY4MDYyZGRkMjI0XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BMjYzMWYxYzItMjkzMC00N2E4LTg3MGEtODY4MDYyZGRkMjI0XkEyXkFqcGdeQXVyODc0OTEyNDU@.jpg"
        }
      }
    ]
  },

  {
    "imdb_id": "2084970",
    "name": "The Imitation Game",
    "year": 2015,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BMjMzODk5OTY5OF5BMl5BanBnXkFtZTgwMTU1NjUyMzE@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BMjMzODk5OTY5OF5BMl5BanBnXkFtZTgwMTU1NjUyMzE@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BMjMzODk5OTY5OF5BMl5BanBnXkFtZTgwMTU1NjUyMzE@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BMjMzODk5OTY5OF5BMl5BanBnXkFtZTgwMTU1NjUyMzE@.jpg"
    },
    "premiere": "2015-01-01",
    "genres": [
      "6",
      "12",
      "32"
    ],
    "people": [
      {
        "imdb_id": "0878763",
        "name": "Morten Tyldum",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Morten Tyldum"
          }
        ]
      },
      {
        "imdb_id": "2441699",
        "name": "Graham Moore",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Graham Moore"
          }
        ]
      },
      {
        "imdb_id": "0388132",
        "name": "Andrew Hodges",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Andrew Hodges"
          }
        ]
      }
    ],
    "imdb_rating": 80,
    "imdb_vote": 755081,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "The Imitation Game",
        "overview": "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians while attempting to come to terms with his troubled private life.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BYzhlNzZiNjEtODE4MC00ODIxLWE4YzAtMzFkMWQ1M2ViYmQ0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BYzhlNzZiNjEtODE4MC00ODIxLWE4YzAtMzFkMWQ1M2ViYmQ0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BYzhlNzZiNjEtODE4MC00ODIxLWE4YzAtMzFkMWQ1M2ViYmQ0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BYzhlNzZiNjEtODE4MC00ODIxLWE4YzAtMzFkMWQ1M2ViYmQ0XkEyXkFqcGdeQXVyMTYzMDM0NTU@.jpg"
        }
      }
    ]
  },

  {
    "imdb_id": "0120737",
    "name": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BMzQ2YjI2YzgtZmNmMy00ZjUyLWE0NGItY2Y3NjUzZWM4NmM3XkEyXkFqcGdeQWxiaWFtb250._V1_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BMzQ2YjI2YzgtZmNmMy00ZjUyLWE0NGItY2Y3NjUzZWM4NmM3XkEyXkFqcGdeQWxiaWFtb250._V1_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BMzQ2YjI2YzgtZmNmMy00ZjUyLWE0NGItY2Y3NjUzZWM4NmM3XkEyXkFqcGdeQWxiaWFtb250._V1_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BMzQ2YjI2YzgtZmNmMy00ZjUyLWE0NGItY2Y3NjUzZWM4NmM3XkEyXkFqcGdeQWxiaWFtb250._V1_.jpg"
    },
    "premiere": "2001-12-19",
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
    "imdb_rating": 88,
    "imdb_vote": 1812001,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "The Lord of the Rings: The Fellowship of the Ring",
        "overview": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BMzgyNjdjOWMtMjAyYy00NzQ4LWIwYTQtZDk2ZDQzYWVlN2IwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BMzgyNjdjOWMtMjAyYy00NzQ4LWIwYTQtZDk2ZDQzYWVlN2IwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BMzgyNjdjOWMtMjAyYy00NzQ4LWIwYTQtZDk2ZDQzYWVlN2IwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BMzgyNjdjOWMtMjAyYy00NzQ4LWIwYTQtZDk2ZDQzYWVlN2IwXkEyXkFqcGdeQXVyMTYzMDM0NTU@.jpg"
        }
      }
    ]
  },
  {
    "imdb_id": "2119532",
    "name": "Hacksaw Ridge",
    "year": 2016,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BMjAzNTI5MzQ1OF5BMl5BanBnXkFtZTgwOTc3OTY1OTE@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BMjAzNTI5MzQ1OF5BMl5BanBnXkFtZTgwOTc3OTY1OTE@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BMjAzNTI5MzQ1OF5BMl5BanBnXkFtZTgwOTc3OTY1OTE@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BMjAzNTI5MzQ1OF5BMl5BanBnXkFtZTgwOTc3OTY1OTE@.jpg"
    },
    "premiere": "2016-12-07",
    "genres": [
      "6",
      "12",
      "17"
    ],
    "people": [
      {
        "imdb_id": "0000154",
        "name": "Mel Gibson",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Mel Gibson"
          }
        ]
      },
      {
        "imdb_id": "0770938",
        "name": "Robert Schenkkan",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Robert Schenkkan"
          }
        ]
      },
      {
        "imdb_id": "0460795",
        "name": "Andrew Knight",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Andrew Knight"
          }
        ]
      }
    ],
    "imdb_rating": 81,
    "imdb_vote": 508626,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "Hacksaw Ridge",
        "overview": "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BMWE2NWQ5MzItMjg5Yy00MmMyLTliODgtNWYwYzA4NGQ3MDBmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BMWE2NWQ5MzItMjg5Yy00MmMyLTliODgtNWYwYzA4NGQ3MDBmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BMWE2NWQ5MzItMjg5Yy00MmMyLTliODgtNWYwYzA4NGQ3MDBmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BMWE2NWQ5MzItMjg5Yy00MmMyLTliODgtNWYwYzA4NGQ3MDBmXkEyXkFqcGdeQXVyMTYzMDM0NTU@.jpg"
        }
      }
    ]
  },

  {
    "imdb_id": "0068646",
    "name": "The Godfather",
    "year": 1972,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BYWNlN2U4YjQtMzI3NC00ZjkxLWEwMTItYWRlNDUxYTYwYjVlXkEyXkFqcGdeQWpvaG5oYXJ0._V1_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BYWNlN2U4YjQtMzI3NC00ZjkxLWEwMTItYWRlNDUxYTYwYjVlXkEyXkFqcGdeQWpvaG5oYXJ0._V1_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BYWNlN2U4YjQtMzI3NC00ZjkxLWEwMTItYWRlNDUxYTYwYjVlXkEyXkFqcGdeQWpvaG5oYXJ0._V1_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BYWNlN2U4YjQtMzI3NC00ZjkxLWEwMTItYWRlNDUxYTYwYjVlXkEyXkFqcGdeQWpvaG5oYXJ0._V1_.jpg"
    },
    "premiere": "1972-10-20",
    "genres": [
      "10",
      "12"
    ],
    "people": [
      {
        "imdb_id": "0000338",
        "name": "Francis Ford Coppola",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Francis Ford Coppola"
          }
        ]
      },
      {
        "imdb_id": "0701374",
        "name": "Mario Puzo",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Mario Puzo"
          }
        ]
      },
      {
        "imdb_id": "0000338",
        "name": "Francis Ford Coppola",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Francis Ford Coppola"
          }
        ]
      }
    ],
    "imdb_rating": 92,
    "imdb_vote": 1804557,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "The Godfather",
        "overview": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BMGNkYzY2ZjUtODU4My00Mjc5LWEwNDAtMzUxZjcxZWJhZTcwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BMGNkYzY2ZjUtODU4My00Mjc5LWEwNDAtMzUxZjcxZWJhZTcwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BMGNkYzY2ZjUtODU4My00Mjc5LWEwNDAtMzUxZjcxZWJhZTcwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BMGNkYzY2ZjUtODU4My00Mjc5LWEwNDAtMzUxZjcxZWJhZTcwXkEyXkFqcGdeQXVyODc0OTEyNDU@.jpg"
        }
      }
    ]
  },

  {
    "imdb_id": "1170358",
    "name": "The Hobbit: The Desolation of Smaug",
    "year": 2013,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BMjI5MzkwNTAyMF5BMl5BanBnXkFtZTgwMzAzNjMzMzE@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BMjI5MzkwNTAyMF5BMl5BanBnXkFtZTgwMzAzNjMzMzE@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BMjI5MzkwNTAyMF5BMl5BanBnXkFtZTgwMzAzNjMzMzE@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BMjI5MzkwNTAyMF5BMl5BanBnXkFtZTgwMzAzNjMzMzE@.jpg"
    },
    "premiere": "2013-12-13",
    "genres": [
      "3",
      "14"
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
      },
      {
        "imdb_id": "0001392",
        "name": "Peter Jackson",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Peter Jackson"
          }
        ]
      }
    ],
    "imdb_rating": 78,
    "imdb_vote": 647076,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "The Hobbit: The Desolation of Smaug",
        "overview": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BODQ5ZmJkM2ItOTJmMC00NDgxLWIxNTktYWNhYjc2Y2JmMWU1XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BODQ5ZmJkM2ItOTJmMC00NDgxLWIxNTktYWNhYjc2Y2JmMWU1XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BODQ5ZmJkM2ItOTJmMC00NDgxLWIxNTktYWNhYjc2Y2JmMWU1XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BODQ5ZmJkM2ItOTJmMC00NDgxLWIxNTktYWNhYjc2Y2JmMWU1XkEyXkFqcGdeQXVyODc0OTEyNDU@.jpg"
        }
      }
    ]
  },

  {
    "imdb_id": "0903624",
    "name": "The Hobbit: An Unexpected Journey",
    "year": 2012,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BNzQzNDczNTYwOV5BMl5BanBnXkFtZTcwMzA3ODk0OA@@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BNzQzNDczNTYwOV5BMl5BanBnXkFtZTcwMzA3ODk0OA@@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BNzQzNDczNTYwOV5BMl5BanBnXkFtZTcwMzA3ODk0OA@@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BNzQzNDczNTYwOV5BMl5BanBnXkFtZTcwMzA3ODk0OA@@.jpg"
    },
    "premiere": "2012-12-14",
    "genres": [
      "3",
      "14"
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
      },
      {
        "imdb_id": "0001392",
        "name": "Peter Jackson",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Peter Jackson"
          }
        ]
      }
    ],
    "imdb_rating": 78,
    "imdb_vote": 808050,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "The Hobbit: An Unexpected Journey",
        "overview": "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BMGUyOTQzNGEtZTQ0NS00Njc3LTkyMGEtZTA0ZTBmNTIzZDQ3XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BMGUyOTQzNGEtZTQ0NS00Njc3LTkyMGEtZTA0ZTBmNTIzZDQ3XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BMGUyOTQzNGEtZTQ0NS00Njc3LTkyMGEtZTA0ZTBmNTIzZDQ3XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BMGUyOTQzNGEtZTQ0NS00Njc3LTkyMGEtZTA0ZTBmNTIzZDQ3XkEyXkFqcGdeQXVyNzI1NzMxNzM@.jpg"
        }
      }
    ]
  },

  {
    "imdb_id": "0253474",
    "name": "The Pianist",
    "year": 2002,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BMmQ4MWQzNDEtYmI4Zi00NmY0LWEwYTEtZTg4MmQ3MDM2YmJlXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BMmQ4MWQzNDEtYmI4Zi00NmY0LWEwYTEtZTg4MmQ3MDM2YmJlXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BMmQ4MWQzNDEtYmI4Zi00NmY0LWEwYTEtZTg4MmQ3MDM2YmJlXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BMmQ4MWQzNDEtYmI4Zi00NmY0LWEwYTEtZTg4MmQ3MDM2YmJlXkEyXkFqcGdeQXVyNzU1NzE3NTg@.jpg"
    },
    "premiere": "2002-12-13",
    "genres": [
      "6",
      "12",
      "20"
    ],
    "people": [
      {
        "imdb_id": "0000591",
        "name": "Roman Polanski",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Roman Polanski"
          }
        ]
      },
      {
        "imdb_id": "0367838",
        "name": "Ronald Harwood",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Ronald Harwood"
          }
        ]
      },
      {
        "imdb_id": "0844262",
        "name": "Wladyslaw Szpilman",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Wladyslaw Szpilman"
          }
        ]
      }
    ],
    "imdb_rating": 85,
    "imdb_vote": 811854,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "The Pianist",
        "overview": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BMzhhMzJmMjAtZmEzNC00YTJkLTljNjktZTI5NWYyNmJlZGJmXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BMzhhMzJmMjAtZmEzNC00YTJkLTljNjktZTI5NWYyNmJlZGJmXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BMzhhMzJmMjAtZmEzNC00YTJkLTljNjktZTI5NWYyNmJlZGJmXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BMzhhMzJmMjAtZmEzNC00YTJkLTljNjktZTI5NWYyNmJlZGJmXkEyXkFqcGdeQXVyODc0OTEyNDU@.jpg"
        }
      }
    ]
  },

  {
    "imdb_id": "0993846",
    "name": "The Wolf of Wall Street",
    "year": 2014,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BMjE1OTQ5NTA4NV5BMl5BanBnXkFtZTgwODI5NTI1MDE@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BMjE1OTQ5NTA4NV5BMl5BanBnXkFtZTgwODI5NTI1MDE@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BMjE1OTQ5NTA4NV5BMl5BanBnXkFtZTgwODI5NTI1MDE@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BMjE1OTQ5NTA4NV5BMl5BanBnXkFtZTgwODI5NTI1MDE@.jpg"
    },
    "premiere": "2014-01-17",
    "genres": [
      "6",
      "8",
      "10"
    ],
    "people": [
      {
        "imdb_id": "0000217",
        "name": "Martin Scorsese",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Martin Scorsese"
          }
        ]
      },
      {
        "imdb_id": "1010540",
        "name": "Terence Winter",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Terence Winter"
          }
        ]
      },
      {
        "imdb_id": "0067789",
        "name": "Jordan Belfort",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Jordan Belfort"
          }
        ]
      }
    ],
    "imdb_rating": 82,
    "imdb_vote": 1356839,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "The Wolf of Wall Street",
        "overview": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BYTIzN2ZlMWEtYmRmMi00YWRlLThkZWYtMjZjNTliMWU4NGJkXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BYTIzN2ZlMWEtYmRmMi00YWRlLThkZWYtMjZjNTliMWU4NGJkXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BYTIzN2ZlMWEtYmRmMi00YWRlLThkZWYtMjZjNTliMWU4NGJkXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BYTIzN2ZlMWEtYmRmMi00YWRlLThkZWYtMjZjNTliMWU4NGJkXkEyXkFqcGdeQXVyMTYzMDM0NTU@.jpg"
        }
      }
    ]
  },
  {
    "imdb_id": "2310332",
    "name": "The Hobbit: The Battle of the Five Armies",
    "year": 2014,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BMTQ2OTk3MDk0Ml5BMl5BanBnXkFtZTgwNzc0MDgzMzE@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BMTQ2OTk3MDk0Ml5BMl5BanBnXkFtZTgwNzc0MDgzMzE@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BMTQ2OTk3MDk0Ml5BMl5BanBnXkFtZTgwNzc0MDgzMzE@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BMTQ2OTk3MDk0Ml5BMl5BanBnXkFtZTgwNzc0MDgzMzE@.jpg"
    },
    "premiere": "2014-12-17",
    "genres": [
      "3",
      "14"
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
      },
      {
        "imdb_id": "0001392",
        "name": "Peter Jackson",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Peter Jackson"
          }
        ]
      }
    ],
    "imdb_rating": 74,
    "imdb_vote": 517750,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "The Hobbit: The Battle of the Five Armies",
        "overview": "Bilbo and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BYWEyOTg0MzItZmY1Mi00NGVjLWFjOGYtYjllZWRlYTA0MmI2XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BYWEyOTg0MzItZmY1Mi00NGVjLWFjOGYtYjllZWRlYTA0MmI2XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BYWEyOTg0MzItZmY1Mi00NGVjLWFjOGYtYjllZWRlYTA0MmI2XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BYWEyOTg0MzItZmY1Mi00NGVjLWFjOGYtYjllZWRlYTA0MmI2XkEyXkFqcGdeQXVyODc0OTEyNDU@.jpg"
        }
      }
    ]
  },
  {
    "imdb_id": "1745960",
    "name": "Top Gun: Maverick",
    "year": 2022,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BYWI1ZDQ4ZDItNjk0Ny00ZDcyLWI5MjctMmFkZjdkODI5ZGRlXkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BYWI1ZDQ4ZDItNjk0Ny00ZDcyLWI5MjctMmFkZjdkODI5ZGRlXkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BYWI1ZDQ4ZDItNjk0Ny00ZDcyLWI5MjctMmFkZjdkODI5ZGRlXkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BYWI1ZDQ4ZDItNjk0Ny00ZDcyLWI5MjctMmFkZjdkODI5ZGRlXkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg"
    },
    "premiere": "2022-05-26",
    "genres": [
      "1",
      "12"
    ],
    "people": [
      {
        "imdb_id": "2676052",
        "name": "Joseph Kosinski",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Joseph Kosinski"
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
        "imdb_id": "0185976",
        "name": "Peter Craig",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Peter Craig"
          }
        ]
      }
    ],
    "imdb_rating": 86,
    "imdb_vote": 226812,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "Top Gun: Maverick",
        "overview": "After more than thirty years of service as one of the Navy&apos;s top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@.jpg"
        }
      }
    ]
  },

  {
    "imdb_id": "11138512",
    "name": "The Northman",
    "year": 2022,
    "image": {
      "sm": "https://m.media-amazon.com/images/M/MV5BY2IxMjhkYjgtMjc0Yi00MDQ1LWEyNGEtODI0ZDE4ZjA3N2EyXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_UX100_.jpg",
      "md": "https://m.media-amazon.com/images/M/MV5BY2IxMjhkYjgtMjc0Yi00MDQ1LWEyNGEtODI0ZDE4ZjA3N2EyXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_UX200_.jpg",
      "lg": "https://m.media-amazon.com/images/M/MV5BY2IxMjhkYjgtMjc0Yi00MDQ1LWEyNGEtODI0ZDE4ZjA3N2EyXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_UX400_.jpg",
      "og": "https://m.media-amazon.com/images/M/MV5BY2IxMjhkYjgtMjc0Yi00MDQ1LWEyNGEtODI0ZDE4ZjA3N2EyXkEyXkFqcGdeQXZ3ZXNsZXk@.jpg"
    },
    "premiere": "2022-04-22",
    "genres": [
      "1",
      "3",
      "12"
    ],
    "people": [
      {
        "imdb_id": "3211470",
        "name": "Robert Eggers",
        "department": "directing",
        "job": "director",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Robert Eggers"
          }
        ]
      },
      {
        "imdb_id": "0797604",
        "name": "Sjón",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Sjón"
          }
        ]
      },
      {
        "imdb_id": "3211470",
        "name": "Robert Eggers",
        "department": "writing",
        "translations": [
          {
            "country": "US",
            "language": "en",
            "name": "Robert Eggers"
          }
        ]
      }
    ],
    "imdb_rating": 72,
    "imdb_vote": 139640,
    "translations": [
      {
        "country": "US",
        "language": "en",
        "name": "The Northman",
        "overview": "From visionary director Robert Eggers comes The Northman, an action-filled epic that follows a young Viking prince on his quest to avenge his father&apos;s murder.",
        "poster": {
          "sm": "https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX100_.jpg",
          "md": "https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX200_.jpg",
          "lg": "https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX400_.jpg",
          "og": "https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@.jpg"
        }
      }
    ]
  },
  {
    imdb_id: '6723592',
    name: 'Tenet',
    year: 2020,
    image: {
      sm: 'https://m.media-amazon.com/images/M/MV5BZWM4MDJjNzMtYjk5Ni00MTJkLThlNjAtZDdjODhlNzU4ZTcwXkEyXkFqcGdeQWFybm8@._V1_UX100_.jpg',
      md: 'https://m.media-amazon.com/images/M/MV5BZWM4MDJjNzMtYjk5Ni00MTJkLThlNjAtZDdjODhlNzU4ZTcwXkEyXkFqcGdeQWFybm8@._V1_UX200_.jpg',
      lg: 'https://m.media-amazon.com/images/M/MV5BZWM4MDJjNzMtYjk5Ni00MTJkLThlNjAtZDdjODhlNzU4ZTcwXkEyXkFqcGdeQWFybm8@._V1_UX400_.jpg',
      og: 'https://m.media-amazon.com/images/M/MV5BZWM4MDJjNzMtYjk5Ni00MTJkLThlNjAtZDdjODhlNzU4ZTcwXkEyXkFqcGdeQWFybm8@.jpg'
    },
    premiere: '2020-08-26',
    genres: [ '1', '27', '32' ],
    people: [
      {
        imdb_id: '0634240',
        name: 'Christopher Nolan',
        department: 'directing',
        job: 'director',
        translations: [Array]
      },
      {
        imdb_id: '0634240',
        name: 'Christopher Nolan',
        department: 'writing',
        translations: [Array]
      }
    ],
    imdb_rating: 73,
    imdb_vote: 475686,
    translations: [
      {
        country: 'US',
        language: 'en',
        name: 'Tenet',
        overview: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
        poster: [Object]
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