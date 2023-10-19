const baseURL = "https://jsonplaceholder.typicode.com";
const posts = "/posts";

const urls = {
    post: {
        base: posts,
        byId: (id) => `${posts}/${id}`
    }
}

export {baseURL, urls}