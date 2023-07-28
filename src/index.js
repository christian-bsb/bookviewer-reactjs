import React, { useState, useEffect } from "react";

const ImageApp = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Get the image URL from the user input.
    setImageUrl(document.getElementById("image-url").value);
  }, []);

  // Render the image.
  return (
    <div>
      <input
        id="image-url"
        type="text"
        placeholder="Enter an image URL"
      />
      <img src={imageUrl} alt="Image" />
    </div>
  );
};

export default ImageApp;

