import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { URLSearchParams } from 'url'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    tagTypes: ['todo'],
    endpoints: (builder)=>({
        getTodos: builder.query({
            query: (priority)=>{
                // better way to but machine problem
                // const params  = new URLSearchParams()
                // if(priority){
                //     params.append('priority',priority)
                // }
                return {
                    url: '/tasks',
                    method: 'GET',
                    params: {priority}
                }
            },
            providesTags: ['todo']
        }),
        addTodo: builder.mutation({
            query: (data)=>({
                url: '/task',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['todo']
        })
    })
})

export const {useGetTodosQuery, useAddTodoMutation} = baseApi