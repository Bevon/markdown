import {createSlice} from '@reduxjs/toolkit';
import { marked } from 'marked';


export const markDownSlice = createSlice({
    name: 'markdown',
    initialState: {
        markdown: '',
    },
    reducers : {
        markdownSet: (state, action) => {
            state.markdown = {...state
                ,...action.payload};
        },
        markdownPreview: (state, action) => {
            const preview = marked(state.markdown);
            
        }
        
    }
});

export const {markdownPreview, markdownSet} = markDownSlice.actions;
export default markDownSlice.reducer;