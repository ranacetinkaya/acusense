import './App.css';

const PDF_FILE_URL = 'http://localhost::3000//CMPE 491 - Project Proposal.pdf';

function App() {
  const downloadFileAtUrl = (url) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobURL = window.URL.createObjectURL(blob);
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = blobURL;
        aTag.setAttribute('download', fileName); 
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        window.URL.revokeObjectURL(blobURL);
      })
      .catch(error => console.error('Error downloading file:', error));
  };

  return (
    <div className='App'>
      <button onClick={() => downloadFileAtUrl(PDF_FILE_URL)}>Project </button>
    </div>
  );
}

export default App;