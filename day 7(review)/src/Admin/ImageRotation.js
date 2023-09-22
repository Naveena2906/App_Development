import React, { useState } from 'react';
import './ImageRotation.css'; // Create a CSS file for styling

function ImageRotation() {
  const [rotate, setRotate] = useState(false);

  const toggleRotation = () => {
    setRotate(!rotate);
  };

  return (
    <div className={`image-container ${rotate ? 'rotate' : ''}`} onClick={toggleRotation}>
      <div className="image-content">
        {/* Content to display when the image is clicked */}
        {rotate && (
          <p>This is the image content.</p>
        )}
      </div>
    </div>
  );
}

export default ImageRotation;
