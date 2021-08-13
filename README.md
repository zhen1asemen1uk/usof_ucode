# usof_backEnd

(my REST API for ucode project)

Auth:
      registration of a new user, required parameters are [login, password, password confirmation, email];
      login - required parameters are [login/email, password]. Only users with a confirmed email can sign in;
      logout;
      password-reset - send a reset link to user email, requiredparameter is [email];
      
User:
      get all users;
      get user by id;
      create user (only for admin);
      upload user avatar;
      update user data;
      delete user;
      
Post:
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
      
Categories:
      get all category;
      get category data by id caregory;
      get all posts associated with the specified category by post id;
      create a new category, required parameter is [title];
      update specified category data;
      delete a category;
      
Comments:
      get comment by id;
      get all likes under the specified comment;
      create a new like under a comment;
      update comment data dy id;
      delete a comment;
      delete a like under a comment;
      
# usof_frontEnd
