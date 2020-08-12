import React, { useEffect, useRef } from "react";
import { NotesAppBar } from "./NotesAppBar";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title } = formValues;

  const activeid = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeid.current) {
      reset(note);
      activeid.current = note.id;
    }
  }, [note, reset]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="What happened today"
          className="notes__text-area"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {note.url && (
          <div className="notes__image">
            <img
              src="https://cdn.pixabay.com/photo/2019/12/20/23/07/landscape-4709500_960_720.jpg"
              alt="imagen"
            />
          </div>
        )}
      </div>
    </div>
  );
};
