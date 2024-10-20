import React from 'react';
import './App.css';

const PDF_FILE_URL = '/CMPE%20491%20-%20Project%20Proposal.pdf'; // React uygulamanızın 'public' klasöründeki dosya

function App() {
  const downloadFileAtUrl = (url) => {
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', 'Project_Proposal.pdf'); // İndirme adı
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className='App'>
      <button onClick={() => downloadFileAtUrl(PDF_FILE_URL)}>Project Proposal</button>
    </div>
  );
}

export default App;
