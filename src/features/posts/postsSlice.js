import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        image: "https://picsum.photos/id/123/500/500",
        description: "Post 1 description",
        date: new Date().toISOString(),
        likes: 15,
        comments: ["Nice shot!", "Love this!"],
    },
    {
        id: 2,
        image: "https://picsum.photos/id/124/500/500",
        description: "Post 2 description",
        date: new Date().toISOString(),
        likes: 30,
        comments: [],
    },
];

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        createPost: (state, action) => {
            const newPost = {
                id: Date.now(),
                image: action.payload.image,
                description: action.payload.description,
                date: new Date().toISOString(),
                likes: 0,
                comments: [],
            };
            state.push(newPost);
        },
        updatePost: (state,action) => {
            const index = state.findIndex((post) => post.id === action.payload.id);
            state[index] = action.payload;
        },
        deletePost: (state, action) => {
            return state.filter((post) => post.id !== action.payload);
        },
        recordLikes: (state, action) => {
            const index = state.findIndex((post) => post.id === action.payload);
            if (index !== -1) {
                state[index].likes += 1;
            }
        },
        addComment: (state, action) => {
            const {postId, text} = action.payload;
            const post = state.find((p) => p.id === postId);
            if (post) {
                if (!Array.isArray(post.comments)) {
                    post.comments = [];
                }
                post.comments.push(text);
            }
        }
    },
});

export const {createPost, updatePost, deletePost, recordLikes, addComment} = postsSlice.actions;

export default postsSlice.reducer;