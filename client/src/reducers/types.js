//auth
export const register_Type = 'register';
export const verify_Type = 'verify';
export const login_Type = 'login';
export const password_reset_Type = 'password_reset';
export const password_reset_link_Type = 'password_reset_link';
export const logout_Type = 'logout';

//users
export const getAllUsers_Type = 'getAllUsers';
export const getUserByID_Type = 'getUserByID';
export const registerForADMIN_Type = 'registerForADMIN';
export const addAvatar_Type = 'addAvatar';
export const updateUser_Type = 'updateUser';
export const deleteUser_Type = 'deleteUser';

//posts
export const getAllPosts_Type = 'getAllPosts';
export const getPostByID_Type = 'getPostByID';
export const getCommentsPostByID_Type = 'getCommentsPostByID';
export const addCommentsForPost_Type = 'addCommentsForPost';
export const getAllCategoryByPostID_Type = 'getAllCategoryByPostID';
export const getAllLikeByPostID_Type = 'getAllLikeByPostID';
export const addPost_Type = 'addPost';
export const addLikeForPost_Type = 'addLikeForPost';
export const updatePost_Type = 'updatePost';
export const deletePost_Type = 'deletePost';
export const deleteLikeByPost_Type = 'deleteLikeByPost';

//comment
export const getCommentByID_Type = 'getCommentByID';
export const getCommentLikesByID_Type = 'getCommentLikesByID';
export const addLikesByCommentID_Type = 'addLikesByCommentID';
export const updateComment_Type = 'updateComment';
export const deleteComment_Type = 'deleteComment';
export const deleteLikeByCommentID_Type = 'deleteLikeByCommentID';

//category
export const getAllCategories_Type = 'getAllCategories';
export const getDataCategoryByID_Type = 'getDataCategoryByID';
export const getPostsByCategotyID_Type = 'getPostsByCategotyID';
export const addCategory_Type = 'addCategory';
export const updateCategory_Type = 'updateCategory';
export const deleteCategory_Type = 'deleteCategory';