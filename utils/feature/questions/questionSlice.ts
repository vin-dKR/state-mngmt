import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: QuestionState = {
    allQuestions: [],
    selectedQuestions: [],
    currentFolderQuestions: []
}

const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setQuestions: (state, action: PayloadAction<MCQQuestion[]>) => {
            state.allQuestions = action.payload
        },

        toggleQuestionSelection: (state, action: PayloadAction<string>) => {
            const index = state.selectedQuestions.indexOf(action.payload)

            if (index === -1) {
                state.selectedQuestions.push(action.payload)
            } else {
                state.selectedQuestions.splice(index, 1)
            }
        },

        clearSelectedQuestion: (state) => {
            state.selectedQuestions = []
        },

        setCurrentFolder: (state, action: PayloadAction<string[]>) => {
            state.currentFolderQuestions = action.payload
        },

        addQuestion: (state, action: PayloadAction<MCQQuestion>) => {
            state.allQuestions.push(action.payload)
        }
    }
})


export const {
    setQuestions,
    toggleQuestionSelection,
    clearSelectedQuestion,
    setCurrentFolder,
    addQuestion
} = questionSlice.actions

export default questionSlice.reducer
