import { createSlice, configureStore } from "@reduxjs/toolkit";

// const addTodo = createAction("ADD");
// const deleteTodo = createAction("DELETE");

// const reducer = createReducer([], {
//     [addTodo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() })
//     },
//     [deleteTodo]: (state, action) => state.filter(todo => todo.id !== action.payload)
// });

const todos = createSlice({
    name: "todosReducer",
    initialState: [],
    reducers:{
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() })
        },
        remove: (state, action) => state.filter(todo => todo.id !== action.payload)
    }
});

const store = configureStore({ reducer: todos.reducer });

export const {
    add,
    remove
} = todos.actions;

export default store;