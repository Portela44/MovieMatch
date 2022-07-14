# RecommendME (temporary)

## Description

This is a project developed by Pau Mesonero and Guillermo Martin as the project for the second module at Ironhack. The application will try to fill a need within the cinephile community, where many apps are not as user friendly as they should to reach the biggest portion of the casual public.

---

## Instructions

When cloning the project, change the <code>sample.env</code> for an <code>.env</code> with the values you consider:
```js
PORT=3000
MONGO_URL='mongodb://localhost/dbName'
SESSION_SECRET='SecretOfYourOwnChoosing'
NODE_ENV='development'
```
Then, run:
```bash
npm install
```
To start the project run:
```bash
npm run start
```

---

## User stories (MVP)

What can the user do with the app?
- User can sign up and create and account
- User can login
- User can log out
- User can vote LIKE or DISLIKE every movie shown.
- User can get recommendations based on its votes.
- Admin can create movie
- Admin can delete movie
- Admin can edit movie


## User stories (Backlog)

- User can upload a profile picture
- Users can see their vote history
- Users can filter their recommendations through category checkboxes
- User can switch voting mode to 5-star in the setting menu
- User can visit IMDB/Filmaffinity through movie-detail links for more information.
- User can 
- User can
- User can

---

## Models

User:

```js
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username is required.'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    hashedPassword: {
      type: String,
      required: [true, 'Password is required.']
    },
    city: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

//Movie (coming from API): 

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required:true;
    },
    releaseDate: {
      type: String, //Can we sort in order using this field in String type?
    },
    genre: {
      type: String,
      Required:true;
    },
  }
)


Vote: 

const voteSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref:"User",
    },
    movieId: {
      type: Schema.Types.ObjectId,
      ref:"Movie"
    },
    vote: {
      type: Number,
      required: [true, 'Vote is required.']
    }
  },
  {
    timestamps: true
  }
); 


---

## Routes

| Name           | Method | Endpoint    | Protected | Req.body            | Redirects |
|----------------|--------|-------------|-----------|---------------------|-----------|
| Home           | GET    | /           | No        |                     |           |
| Recommended    | GET    | /recom      | No        |                     |           |
| Recommended    | POST   | /recom      | No        | { userId, movieId, vote }|      |
| Login          | GET    | /auth/login | No        |                     |           |
| Login          | POST   | /auth/login | No        | { email, password } | /         |
| Signup         | GET    | /auth/signup| No        |                     |           |
| Signup         | POST   | /auth/signup| No        | { username, email, password, city }| /auth/login|
| New movie      | GET    | /movies/new | Yes       |                     |           |
| New movie      | POST   | /movies/new | Yes       | { title, releaseDate, genre }| /movies/:movieId |
| Edit movie     | GET    | /movies/edit| Yes       |                     |          |
| Edit movie     | POST   | /movies/edit| Yes       | { title, releaseDate, genre }| /movies/:movieId |
| Delete movie   | POST   | /movies/delete| Yes     |                     | /        |


---

## Useful links

- [Github Repo](https://github.com/Portela44/module2-boilerplate)
- [Deployed version](https://recommend---me.herokuapp.com/)
- [Presentation slides](https://docs.google.com/presentation/d/1nb5ld1qiLS15eh0Pe6Pyt_9-m7XTqG3E5ERNxq8etDE/edit#slide=id.gd2f231c4a7_1_0)


