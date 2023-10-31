const baseURL = "https://jsonplaceholder.typicode.com";

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users: {
        base: users,
        byId: (id) => `${users}/${id}`
    },
    posts: {
        byId: (id) => `${posts}/${id}`,
        byIdUser: (userId) =>`${users}/${userId}${posts}`
    },
    comments: {
        byId: (postID) => `${posts}/${postID}/${comments}`
    }
}

export {baseURL, urls}