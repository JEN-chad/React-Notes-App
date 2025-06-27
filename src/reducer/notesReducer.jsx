import { v4 as uuid } from "uuid";
const notesReducer = (state, { type, payload }) => {
  const { title, text,impTitle, impText, notes,impNotes, archive } = state;
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };

    case "ADD_NOTES":
      return {
        ...state,
        notes: [
          ...notes,
          { title: title, text: text, id: uuid(), isPinned: false },
        ],
      };

    case "CLEAR_NOTES":
      return {
        ...state,
        title: "",
        text: "",
      };

    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
        ),
      };

    case "UNPIN":
      return {
        ...state,
          notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
        ),
      };

    case "ADD_TO_ARCHIVE":
      return {
        ...state,
        archive: [
          ...state.archive,
          state.notes.find(({ id }) => id === payload.id),
        ],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };
    case "REMOVE_FROM_ARCHIVE":
      return {
        ...state,
        notes: [
          ...state.notes,
          state.archive.find(({ id }) => id === payload.id),
        ],
        archive: state.archive.filter(({ id }) => id !== payload.id),
      };

    case "DELETE_NOTES":
      return {
        ...state,
        bin: [...state.bin, state.notes.find(({ id }) => id === payload.id)],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };
    case "DELETE_FROM_ARCHIVE":
      return {
        ...state,
        bin: [...state.bin, state.archive.find(({ id }) => id === payload.id)],
        archive: state.archive.filter(({ id }) => id !== payload.id),
      };
    case "PERMANENT_DELETE":
      return {
        ...state,
        bin: state.bin.filter(({ id }) => id !== payload.id),
      };
    case "IMP_TITLE":
       return {
        ...state,
        impTitle: payload,
      };
    case "IMP_TEXT":
         return {
        ...state,
        impText: payload,
      };
    case "ADD_IMP_NOTES":
        return {
        ...state,
        impNotes: [
          ...state.impNotes,
          { title: state.impTitle, text: state.impText, id: uuid() },
        ],
      };
    case "CLEAR_IMP_NOTES":
        return {
        ...state,
        impTitle: "",
        impText: "",
      };

    case "DELETE_FROM_IMP":
      return{
          ...state,
        bin: [...state.bin, state.impNotes.find(({ id }) => id === payload.id)],
        impNotes: state.impNotes.filter(({ id }) => id !== payload.id),
      }
    default:
      return state;
  }
};

export default notesReducer;
