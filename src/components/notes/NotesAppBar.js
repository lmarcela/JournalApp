import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNode, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const handleSave = () => {
    dispatch(startSaveNode(active));
  };
  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
  }
  const handleFileChange = (e) => {
    const file=e.target.files[0];
    if(file){
      dispatch(startUploading(file));
    }
  }
  return (
    <div className="notes__appbar">
      <span>JournalApp</span>
      <input id='fileSelector' name='file' type='file' style={{display: 'none'}} onChange={handleFileChange}/>
      <div>
        <button className="btn" onClick={handlePictureClick}>Picture</button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

//react-journal https://api.cloudinary.com/v1_1/marcela/upload