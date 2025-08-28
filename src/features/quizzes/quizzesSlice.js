import { createSlice } from "@reduxjs/toolkit";

// Create quizzesSlice with state about :

/*  quizzes: {
    quizzes: {
      '456': {
        id: '456',
        topicId: '123',
        name: 'quiz for example topic',
        cardIds: ['789', '101', '102']
      }
    }
  } */

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds} = action.payload;
            state.quizzes[id] = {
                id:id,
                name: name,
                topicId: topicId,
                cardIds: cardIds,
            }
        },
    },
});

export const selectQuizzes = (state) => { return state.quizzes.quizzes };

export const {addQuiz}  = quizzesSlice.actions;
export default quizzesSlice.reducer;
