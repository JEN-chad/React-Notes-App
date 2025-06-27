import { createContext, useContext, useReducer } from "react";
import notesReducer from "../reducer/notesReducer";

const NotesContext = createContext();

const NoteProvider = ({ children }) => {
  const initialState = {
    title: "",
    text: "",
    impTitle: "",
    impText: "",
    notes: [],
    archive: [],
    bin: [],
    impNotes: [],
  };
  const [{ title, text,impTitle, impText, notes, archive, bin, impNotes }, reducerDispatch] =
    useReducer(notesReducer, initialState);
  return (
    <NotesContext.Provider
      value={{ title, text,impTitle, impText, notes, archive, bin, impNotes, reducerDispatch }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { useNotes, NoteProvider };
