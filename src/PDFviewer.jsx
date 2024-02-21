
import React, { useEffect } from 'react';
import pdf from './ayush_shukla_resume.pdf';
import './PDFViewer.css'; // Import CSS file for styling

const PDFViewer = () => {
  return (
    <div className="pdf-viewer-container">
      {/* Balloons */}

      {/* PDF Viewer */}
      <embed src={`${pdf}#zoom=85`} width="100%" height="900px" />

      {/* Celebration emojis */}
      <div className="celebration-emojis">
      </div>
    </div>
  );
};

export default PDFViewer;
