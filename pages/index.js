import React, {useEffect, useState} from 'react';
import  fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import Head from 'next/head';
import Image from 'next/image';

function Home({markdown, userData}) {
  const [markdownState, setMarkdownState] = useState(markdown);
  const [previewState, setPreviewState] = useState('');


  useEffect(function (){
    setPreviewState(marked.parse(markdownState));
  
  }, [markdownState]);

  return (
    <div>
      <Head>
        <title>Markdown Previewer</title>
        <link type='image/x-icon' rel='icon' href='/markdown-mark-white.svg' />
        <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
        />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"/>
      </Head>
      <div className='container-fluid vh-100'>
        <div className='container'>
      <div className='card' id='editor'>
      <div className='card-header' style={{backgroundColor:'#20c997'}}>
      <label htmlFor="exampleFormControlTextarea1" style={{fontSize:32}}><i className="fa-brands fa-free-code-camp" style={{fontSize:32, color:'crimson'}}></i><b> Editor</b></label>
      </div>
      <div className='card-body'>
        <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              value={markdownState}
              onChange={(e) => {  setMarkdownState(e.target.value); setPreviewState(marked.parse(e.target.value)); }  }
            />
          </div>
      </div>
  </div>
  <div className='card mt-5 mb-5' id='preview'>
      <div className='card-header' style={{backgroundColor:'#20c997'}}>
      <label htmlFor="exampleFormControlTextarea1" style={{fontSize:32}}><i className="fa-brands fa-free-code-camp" style={{fontSize:32, color:'crimson'}}></i><b>Previewer</b></label>
      </div>
      <div className='card-body' id='content' dangerouslySetInnerHTML={{__html:previewState}}>
      </div>
      <div className="card-footer text-muted text-center ">
      <button className='btn rounded-pill text-white' style={{backgroundColor:'#20c997'}}><span><Image className='rounded-circle' src={userData.avatar_url} alt='maker photo' width={28} height={28}/> </span>{userData.name}</button> 
      </div>
   </div>
    </div>
  </div>
  </div>
  );

}

export default Home;

export async function getServerSideProps() {
  const user = await fetch('https://api.github.com/users/bevon');
  const userData = await user.json();
  const markdown = await fs.promises.readFile(path.resolve(process.cwd(), 'pages/index.md'), 'utf8');
  return {
    props: {
      markdown: markdown,
      userData: userData
    },
  };
}
