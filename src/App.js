
import React, {  useState } from 'react';
import axios from 'axios';
import './App.css';
import { upload } from '@testing-library/user-event/dist/upload';
function App() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState({started: false,pc:0});
  const [msg, setMsg] = useState(null);
 


function handleUpload(){
  if(!file){
    console.log("No file selected")
    return
  }
const fd = new FormData();
fd.append('file',file);
setMsg("Uploading...")
setProgress(prevState =>{
  return{...prevState,started:true}
})
axios.post('http://httpbin.org/post',fd,{
onUploadProgress: (progressEvent) => {setProgress(prevState => {
  return {...prevState, pc:progressEvent.progress*100}
})},
headers: {"Custom-Header" : "value",
  }
})
.then(res =>  {
  setMsg("upload successful")
  console.log(res.data)
})
.catch(err =>{
  setMsg("upload failed")
  console.error(err)} );
}
  return (
    <div className='App'>
      <h1>File Upload </h1>
    <input onChange={ (e) => {setFile(e.target.files[0]) } } type ="file"/>
    <button>Upload</button>
    <button onClick={handleUpload} > Upload</button>
   {progress.started && <progress max="100" value ={progress.pc}></progress>}
   {msg && <span>{msg}</span>}
    </div>
  );
}

export default App;
