const API_URL = 'https://jsonplaceholder.typicode.com/posts/';
export const getPostURL = (id) => API_URL + id;
export const getCommentsURL = (id) => `${API_URL}${id}/comments`;