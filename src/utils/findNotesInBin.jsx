export const findNotesInBin = (Bin, id) => {
  return Bin.some(note => note.id === id)
}