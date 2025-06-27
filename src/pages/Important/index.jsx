import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useNotes } from "../../context/notes-context";
import NotesCard from "../../components/NotesCard";
import { Footer } from "../../components/footer";

export const ImportantPage = () => {
  const { impTitle, impText, reducerDispatch, impNotes } = useNotes();
  const [isImpFocused, setIsImpFocused] = useState(false);
  const onImpInputChange = (e) => {
    reducerDispatch({
      type: "IMP_TITLE",
      payload: e.target.value,
    });
  };
  const onImpTextAreaChange = (e) => {
    reducerDispatch({
      type: "IMP_TEXT",
      payload: e.target.value,
    });
  };
  const onAddImpNotesClick = (e) => {
    reducerDispatch({
      type: "ADD_IMP_NOTES",
    });
    reducerDispatch({
      type: "CLEAR_IMP_NOTES",
    });
  };
  return (
    <>
      <Navbar />
      <main className="flex pb-20 gap-4">
        <Sidebar />
        <div className="flex flex-col w-full mt-7">
          <div className="flex flex-col mt-5 w-[400px] relative border rounded-sm shadow-md self-center">
            <input
              value={impTitle}
              placeholder="Enter the title"
              onChange={onImpInputChange}
              className="border p-2 focus:outline-none"
              onFocus={() => setIsImpFocused(true)}
              onBlur={() => setIsImpFocused(false)}
            />
            <textarea
              value={impText}
              placeholder="Enter the text"
              onChange={onImpTextAreaChange}
              onFocus={() => setIsImpFocused(true)}
              onBlur={() => setIsImpFocused(false)}
              className="border p-2 focus:outline-none"
            />
            <button
              disabled={impTitle.length === 0}
              onClick={onAddImpNotesClick}
              type="button"
              className={`absolute bottom-0 right-0 cursor-pointer rounded-full p-1 transition-colors duration-200 ${
                isImpFocused ? "bg-emerald-400" : "bg-transparent"
              }`}
            >
              <span className="material-icons-outlined">add</span>
            </button>
          </div>
          <div className="flex flex-col gap-5 mt-14 ml-10">
            <div className=" flex flex-wrap gap-7">
              {
                impNotes.map(({ title, text, id}) => {
                  return (
                    <NotesCard
                      key={id}
                      title={title}
                      text={text}
                      id={id}
                      source = "Important"
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
