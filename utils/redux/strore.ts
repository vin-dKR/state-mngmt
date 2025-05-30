import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        questions: QuestionReducer,
        folders: FolderReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
