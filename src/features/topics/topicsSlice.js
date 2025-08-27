import { createSlice } from "@reduxjs/toolkit";
/*  Create topicsSlice with state form : 
  topics: {
    topics: {
      '123': {    //topicID
        id: '123',
        name: 'example topic',
        icon: 'icon url',
        quizIds: ['456']
      }
    }
  } */
 
const topicsSlice = createSlice({
    name: 'topics',
    initialState: { 
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            const {id, name, icon} = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: [],

            }
        },

    }

});
//  Create selectors:
export const selectTopics = (state) => {return state.topics.topics};


export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;
