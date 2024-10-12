import React from 'react';
import axios from 'axios';

const FileDownload = () => {
  const handleFileDownload = async () => {
    try {
      const response = await axios.get('YOUR_API_DOWNLOAD_ENDPOINT', {
        responseType: 'blob' // İndirilen dosya için blob kullanıyoruz
      });

      // Dosyayı kullanıcıya indirtmek için
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'filename.ext'); // Dosya adını belirleyin
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Dosya indirilirken bir hata oluştu: ", error);
      alert("Dosya indirilemedi!");
    }
  };

  return (
    <div>
      <button onClick={handleFileDownload}>Dosyayı İndir</button>
    </div>
  );
};

export default FileDownload;
