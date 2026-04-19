import { Link } from "react-router";

export default function AuthLayout({
  children,
  title,
  text,
  linkTo,
  textLink,
}) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm bg-slate-100 p-10 rounded-2xl">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        {children}

        <p className="mt-5 text-center text-sm">
          {text}{" "}
          <Link to={`/${linkTo}`} className="font-bold text-blue-500">
            {textLink}
          </Link>
        </p>
      </div>
    </div>
  );
}
