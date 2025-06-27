import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const getStyles = ({ isActive }) => {
    const styles ="flex items-center gap-2 px-2 py-2 rounded-br-full rounded-tr-full "
    return isActive
      ? `bg-emerald-600 text-slate-100 ${styles}`
      : `hover:bg-emerald-600 ${styles} hover:text-slate-100`;
  };

  return (
    <aside className="flex flex-col gap-5 w-[200px] h-screen px-5 py-8 border-r-2 border-gray-100 text-xl">
      <NavLink to="/" className={getStyles}>
        <span className="material-icons-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink to="/archive" className={getStyles}>
        <span className="material-icons-outlined">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink to="/important" className={getStyles}>
        <span className="material-icons-outlined">label_important</span>
        <span>Important</span>
      </NavLink>

      <NavLink to="/bin" className={getStyles}>
        <span className="material-icons-outlined">delete</span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
