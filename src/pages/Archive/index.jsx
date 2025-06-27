import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useNotes } from "../../context/notes-context";
import NotesCard from "../../components/NotesCard";
import { Footer } from "../../components/footer";
const ArchivePage = () => {
  const { archive } = useNotes();
  return (
    <>
      <Navbar />
      <main className="flex pb-20 gap-4">
        <Sidebar />
        <div className="flex flex-col w-full mt-7">
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
      <Footer />
    </>
  );
};

export default ArchivePage;
