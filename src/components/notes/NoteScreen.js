import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happened today"
          className="notes__text-area"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://cdn.pixabay.com/photo/2019/12/20/23/07/landscape-4709500_960_720.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
