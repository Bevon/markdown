import React, { useEffect } from 'react';
import { marked } from 'marked';


function Previewer({ previewState }) {
  
  return (
    <div className='card'  id='preview'>
      <div className='card-header' style={{backgroundColor:'#20c997'}}>
            <label htmlFor="exampleFormControlTextarea1" style={{fontSize:32}}><i className="fa-brands fa-free-code-camp" style={{fontSize:32, color:'crimson'}}></i><b> Editor</b></label>
      </div>
      <div className='card-body'>
            <div className="form-group" id='content'>
                <div dangerouslySetInnerHTML={{ __html: marked(previewState) }} />
            </div>
      </div>
  </div>
  )
}

export default Previewer;