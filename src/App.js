import './App.css';

const PDF_FILE_URL = 'http://localhost:3000/CMPE 491 - Project Proposal.pdf';

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
      <button onClick={() => downloadFileAtUrl(PDF_FILE_URL)}>Project Proposal</button>
    </div>
  );
}

export default App;