import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNode } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const handleSave = () => {
    dispatch(startSaveNode(active));
  };
  return (
    <div className="notes__appbar">
      <span>08 de agosto 2020</span>
      <div>
        <button className="btn">Picture</button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
