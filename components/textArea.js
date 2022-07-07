import React,{useEffect, useState} from 'react';

function TextArea({markdown, dispatch,onChange}) {
  
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
              onChange={function(e){ return e.target.value}}

            />
          </div>
          <div>
          <p></p>
          </div>
      </div>
  </div>

    
  )
}


export default TextArea;