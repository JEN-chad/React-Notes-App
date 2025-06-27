export const findNotesInImp = (impNotes, id) => {
  return impNotes.some(note => note.id === id)
}