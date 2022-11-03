# Project Title

#### SocialWeb

# Demo link:

[NameLink](https://link/)

# Setup (Install dependencies and run the application)

```sh
1. Download or clone the repository
2. Create and fill .env
3. yarn (or npm i)
4. yarn start (or npm start)
```

You can also run `node .` to skip the build step.

Open http://0.0.0.0:3000 in your browser.

## What's next

##### Auth:

      registration of a new user, required parameters are [login, password, password confirmation, email];
      login - required parameters are [login/email, password]. Only users with a confirmed email can sign in;
      logout;
      password-reset - send a reset link to user email, requiredparameter is [email];


##### User:

      get all users;
      get user by id;
      create user (only for admin);
      upload user avatar;
      update user data;
      delete user;


##### Post:

      get all posts;
      get post by id;
      get all comments by post id;
      create a new comment, required parameteris [content];
      get all categories by post id;
      get all likes under the post;
      create a new post, required parameters are [title, content,categories];
      create a new like under a post;
      update the specified post (its title, body orcategory). It's accessible only for the creator of the post;
      delete a post;
      delete a like under a post;


##### Categories:

      get all category;
      get category data by id caregory;
      get all posts associated with the specified category by post id;
      create a new category, required parameter is [title];
      update specified category data;
      delete a category;


##### Comments:

      get comment by id;
      get all likes under the specified comment;
      create a new like under a comment;
      update comment data dy id;
      delete a comment;
      delete a like under a comment;

# About The App

This is the backend part for organizing and optimizing the internal work of the company

# Technologies

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

###### We used:

-   yarn
-   npm
-   bcrypt
-   cloudinary
-   dotenv
-   uuid
-   passport-google-oauth
-   jsonwebtoken
-   JavaScript
-   TypeScript
-   eslint
-   prettier

# Approach

...

# Status

SocialWeb is still in progress.

---

# for start DB:

      brew install mysql
      mysql.server start
      npm i (Install the module separately in the server folder and in the client folder)

      mysql -u root -p < db.sql (or insert text from db.sql to database)

      must be:    /.env
      in .env:
                  HOST=http://localhost:
                  PORT=3001

                  API_URL=http://localhost:3001
                  CLIENT_URL=http://localhost:3000

                  JWT_ACCESS_SECRET=...
                  JWT_REFRESH_SECRET=...

                  SMTP_HOST=smtp...
                  SMTP_PORT=465
                  SMTP_USER=...@....com
                  SMTP_PASSWORD=...

                  user=ysemeniuk
                  password=securepass
                  server=localhost
                  database=db_usof

      npm run dev - start server and client


(my REST API for ucode project)
