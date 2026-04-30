import { Link } from "react-router";
import { DarkMode } from "../../../context/DarkMode";
import { useContext } from "react";

export default function AuthLayout({ children, title, type }) {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${isDarkMode ? "bg-slate-600" : ""}`}
    >
      <div className="w-full max-w-sm bg-slate-100 p-10 rounded-2xl">
        <FormTitle title={title} />

        {children}

        <Navigation type={type} />
      </div>

      <button
        className="absolute top-2 right-2 rounded bg-blue-600 text-white p-2"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
}

function Navigation({ type }) {
  return (
    <p className="mt-5 text-center text-sm">
      {type === "login" ? "Don't have an account?" : "Already have an account"}{" "}
      {type === "login" && (
        <Link to={"/register"} className="font-bold text-blue-500">
          Sign Up
        </Link>
      )}
      {type === "register" && (
        <Link to={"/login"} className="font-bold text-blue-500">
          Sign In
        </Link>
      )}
    </p>
  );
}

function FormTitle({ title }) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
      <p className="font-medium text-slate-500 mb-8">
        Welcome, please enter your details
      </p>
    </>
  );
}
