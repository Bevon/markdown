import {createSlice} from '@reduxjs/toolkit';
import { marked } from 'marked';

export const markDownSlice = createSlice({
    name: 'markdown',
    initialState: {
        markdown: '',
        preview: ''
    },
    reducers : {
        markDownSet: (state, action) => {
            state.markdown = action.payload;
            state.preview = marked.parse(action.payload);
        },
        
    }
});

export const {markDownSet} = markDownSlice.actions;
export default markDownSlice.reducer;