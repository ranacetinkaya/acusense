import React from 'react';
import './App.css';

const PROJECT_NAME = 'Development of a Turkish Language Processing System with Integrated Speech Recognition and Synthesis';  
const PROJECT_PROPOSAL_FILE_URL = '/CMPE 491 - Project Proposal.pdf';
const PROJECT_SPECIFICATIONS_FILE_URL = '/CMPE 491 - Project Specifications Report.pdf';
const PROJECT_ANALYSIS_REPORT_FILE_URL = '/CMPE 491 - Project Analysis Report.pdf'
const PROJECT_HIGH_LEVEL_DESIGN_REPORT = '/CMPE 491 - High-Level Design Report.pdf'
const PROJECT_BACKLOG_DOCUMENT = '/CMPE 491 - Backlog Document.pdf'

function App() {
  const downloadFileAtUrl = (url) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const blobURL = window.URL.createObjectURL(new Blob([blob])); 
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = blobURL;
        aTag.setAttribute('download', fileName); 
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      })
      .catch(error => console.error('Error downloading the file:', error)); 
  };

  return (
    <div className='App'>
      <header className='App-title'>
        <h1>{PROJECT_NAME}</h1>
      </header>
      <div className='App-content'>
        <h2>Project Resources</h2>
        <p>Download important project documents below.</p>
        <div className='button-container'>
          <button onClick={() => downloadFileAtUrl(PROJECT_PROPOSAL_FILE_URL)}>
            Project Proposal
          </button>
          <button onClick={() => downloadFileAtUrl(PROJECT_SPECIFICATIONS_FILE_URL)}>
            Project Specifications Report
          </button>
          <button onClick={() => downloadFileAtUrl(PROJECT_ANALYSIS_REPORT_FILE_URL)}>
            Project Analysis Report
          </button>
          <button onClick={() => downloadFileAtUrl(PROJECT_HIGH_LEVEL_DESIGN_REPORT)}>
            High-Level Design Report
          </button>
          <button onClick={() => downloadFileAtUrl(PROJECT_BACKLOG_DOCUMENT)}>
            Backlog Document
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
