import React from "react";
export const Header = () => {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Do something with the selected file, such as uploading it to a server
    console.log("Selected File:", selectedFile);
  };
  return (
    <div className="header">
      <div className="file-upload-container">
        <input
          type="file"
          id="file-input"
          onChange={handleFileChange}
          className="file-input"
        />
      </div>
      <div>Instagram</div>
    </div>
  );
};
