import { Link } from "react-router";

export default function AuthLayout({ children, title, type }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm bg-slate-100 p-10 rounded-2xl">
        <FormTitle title={title} />

        {children}

        <Navigation type={type} />
      </div>
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
