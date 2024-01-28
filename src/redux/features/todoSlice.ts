import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TTodo = {
    id: string
    title: string;
    description: string;
    isCompleted?: boolean;
}

type TInitialState = {
    todo: TTodo[]
}

const initialState: TInitialState = {
    todo: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state,action: PayloadAction<TTodo>)=>{
            state.todo.push({...action.payload, isCompleted: false})
        },
        removeTodo: (state, action: PayloadAction<string>)=>{
            state.todo = state.todo.filter(item=>item.id!==action.payload)
        },
        toggleComplete: (state, action: PayloadAction<string>)=>{
            const task = state.todo.find(item=>item.id===action.payload)
            task!.isCompleted = !task?.isCompleted
        }
    }
})

export const {addTodo, removeTodo, toggleComplete} = todoSlice.actions

export default todoSlice.reducer