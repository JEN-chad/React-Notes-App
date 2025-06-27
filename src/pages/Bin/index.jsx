import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useNotes } from "../../context/notes-context";
import NotesCard from "../../components/NotesCard";
const BinPage = () => {
  const { bin } = useNotes();
  console.log("📦 BinPage loaded");

  return (
    <>
      <Navbar />
      <main className="flex gap-4">
        <Sidebar />
        <div className="flex flex-col w-screen mt-7">
          <div className=" flex flex-wrap gap-7">
            {bin?.length > 0 &&
              bin.map(({ title, text, id, isPinned }) => {
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
      </main>
    </>
  );
};

export default BinPage;
