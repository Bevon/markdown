import React,{useEffect, useState} from 'react';
import {marked} from 'marked';
import { markDownSet } from '../reduxStore/markdownSlice';

function TextArea({markdown, dispatch}) {

  

  return (
    <div className='card' id='editor'>
      <div className='card-header' style={{backgroundColor:'#20c997'}}>
      <label htmlFor="exampleFormControlTextarea1" style={{fontSize:32}}><i className="fa-brands fa-free-code-camp" style={{fontSize:32, color:'crimson'}}></i><b> Editor</b></label>
      </div>
      <div className='card-body'>
        <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              value={markdown}
              onChange={(e) => {  dispatch(markDownSet(e.target.value)); }  }

            />
          </div>
          <div>
          <p>{markdown}</p>
          </div>
      </div>
  </div>

    
  )
}


export default TextArea;