import { useContext } from "react";
import { useAuthLogin } from "../../../hooks/useAuthLogin";
import Button from "../Elements/Button";
import { DarkMode } from "../../../context/DarkMode";

export default function Navbar() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { user } = useAuthLogin();

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <div className="flex justify-end bg-blue-600 text-white items-center h-20 px-5 gap-5">
      <span className="font-bold text-xl">{user}</span>
      <Button classname={"bg-slate-800 text-white"} onClick={handleLogout}>
        Log Out
      </Button>
      <button
        className={`rounded ${isDarkMode ? "bg-slate-600 text-white" : "bg-white text-slate-600"} p-2 cursor-pointer`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
}
