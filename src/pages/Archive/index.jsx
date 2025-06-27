import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useNotes } from "../../context/notes-context";
import NotesCard from "../../components/NotesCard";
const ArchivePage = () => {
  const { archive } = useNotes();
  return (
    <>
      <Navbar />
      <main className="flex gap-4">
        <Sidebar />
        <div className="flex flex-col w-screen mt-7">
          <div className=" flex flex-wrap gap-7">
            {archive?.length > 0 &&
              archive.map(({ title, text, id, isPinned }) => {
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

export default ArchivePage;
