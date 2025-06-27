import { useNotes } from "../../context/notes-context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { findNotesInBin } from "../../utils/findNotesInBin";
import { findNotesInImp } from "../../utils/findNotesInImp";

const NotesCard = ({ title, text, id, isPinned, source }) => {
  const { archive, bin, impNotes, reducerDispatch } = useNotes();
  const isNotesInArchive = findNotesInArchive(archive, id);
  const isNotesInBin = findNotesInBin(bin, id);
  const isNotesInImp = findNotesInImp(impNotes, id);

  const onPinClick = (id) => {
    !isPinned
      ? reducerDispatch({
          type: "PIN",
          payload: { id },
        })
      : reducerDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };
  const onArchiveClick = (id) => {
    !isNotesInArchive
      ? reducerDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: { id },
        })
      : reducerDispatch({ type: "REMOVE_FROM_ARCHIVE", payload: { id } });
  };
  const onRemoveNotesClick = (id) => {
    if (isNotesInBin) {
      reducerDispatch({
        type: "PERMANENT_DELETE",
        payload: { id },
      });
    } else if (isNotesInArchive) {
      reducerDispatch({
        type: "DELETE_FROM_ARCHIVE",
        payload: { id },
      });
    } else if (isNotesInImp) {
      reducerDispatch({
        type: "DELETE_FROM_IMP",
        payload: { id },
      });
    } else {
      reducerDispatch({
        type: "DELETE_NOTES",
        payload: { id },
      });
    }
  };
  console.log("Bin contents:", bin);

  return (
    <div
      className="w-[300px] border rounded-sm shadow-md flex flex-col p-3 border-gray-200 bg-zinc-50"
      key={id}
    >
      <div className="flex justify-between border-b-2">
        <p>{title}</p>
        {source === "Important" ? (
          <span className="text-xs bg-red-300 text-black px-2 mb-1 py-1 rounded-full">
            Important
          </span>
        ) : (
          !isNotesInArchive &&
          !isNotesInBin && (
            <button>
              <span
                onClick={() => onPinClick(id)}
                className={`material-symbols ${
                  isPinned ? "filled" : "outlined"
                }`}
              >
                push_pin
              </span>
            </button>
          )
        )}
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-base text-gray-800 truncate max-w-[70%]">{text}</p>

        <div className="flex gap-2">
          {!isNotesInBin && source !== "Important" ? (
            <button
              onClick={() => onArchiveClick(id)}
              className="p-1 rounded hover:bg-gray-100"
            >
              <span
                className={`material-symbols ${
                  isNotesInArchive ? "filled" : "outlined"
                }`}
              >
                archive
              </span>
            </button>
          ) : (
            <></>
          )}

          <button
            onClick={() => onRemoveNotesClick(id)}
            className="p-1 rounded hover:bg-gray-100"
          >
            <span className="material-icons-outlined text-red-500">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotesCard;
