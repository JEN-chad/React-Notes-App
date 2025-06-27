import Navbar from "../../components/Navbar";
import { Footer } from "../../components/footer";
import Sidebar from "../../components/Sidebar";
import NotesCard from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";
import { useState } from "react";

export default function Home() {
  const { title, text, notes, bin, reducerDispatch } = useNotes();
  const [isFocused, setIsFocused] = useState(false)

  const onInputChange = (e) => {
    reducerDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };
  const onTextAreaChange = (e) => {
    reducerDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };
  const onAddNotesClick = (e) => {
    reducerDispatch({
      type: "ADD_NOTES",
    });
    reducerDispatch({
      type: "CLEAR_NOTES",
    });
  };
  console.log(bin)
  const pinnedNotes =
    notes.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const unPinnedNotes =
    notes.length > 0 && notes.filter(({ isPinned }) => !isPinned);
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex pb-20 gap-4">
        <Sidebar />
        <div className="flex flex-col w-full mt-7">
          <div className="flex flex-col mt-5 w-[400px] relative border rounded-sm shadow-md self-center">
            <input
              value={title}
              placeholder="Enter the title"
              onChange={onInputChange}
              className="border p-2 focus:outline-none"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <textarea
              value={text}
              placeholder="Enter the text"
              onChange={onTextAreaChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="border p-2 focus:outline-none"
            />
            <button
              disabled={title.length === 0}
              onClick={onAddNotesClick}
              type="button"
              className={`absolute bottom-0 right-0 cursor-pointer rounded-full p-1 transition-colors duration-200 ${
          isFocused ? "bg-emerald-400" : "bg-transparent"
              }`}>
              <span className="material-icons-outlined">add</span>
            </button>
          </div>
          <div className="flex flex-col gap-5 mt-14 ml-10">
            {pinnedNotes.length > 0 && (
              <div>
                <h2 className="mt-9">Pinned Notes</h2>
                <div className=" flex flex-wrap gap-7">
                  {pinnedNotes?.length > 0 &&
                    pinnedNotes.map(({ title, text, id, isPinned }) => {
                      return (
                        <NotesCard
                          key={id}
                          title={title}
                          text={text}
                          id={id}
                          isPinned={isPinned}
                        />
                      );
                    })}
                </div>
              </div>
            )}
            <div>
              {pinnedNotes.length > 0 && unPinnedNotes.length > 0 && (
                <h2 className="mt-9">Other Notes</h2>
              )}
              {unPinnedNotes.length > 0 && (
                <div className=" flex flex-wrap gap-7">
                  {unPinnedNotes?.length > 0 &&
                    unPinnedNotes.map(({ title, text, id, isPinned }) => {
                      return (
                        <NotesCard
                          key={id}
                          title={title}
                          text={text}
                          id={id}
                          isPinned={isPinned}
                        />
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
