import placeholder from '../apis';

export const fetchPost = () => {
    return async function(dispatch, getState) {
        const post = await placeholder.get('/posts');
        console.log(post);
        dispatch({ type: 'FETCH_POSTS', payload: post.data });
    }
};

export const fetchUser = (id) => {
    return async function(dispatch, getState) {
        const response = await placeholder.get(`/users/${id}`);

        dispatch({ type: 'FETCH_USER', payload: response.data });
    }
}