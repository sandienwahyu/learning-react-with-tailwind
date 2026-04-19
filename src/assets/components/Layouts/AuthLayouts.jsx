export default function AuthLayout({ children, title }) {
  return (
    <div className="w-full max-w-sm bg-slate-100 p-10 rounded-2xl">
      <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
      <p className="font-medium text-slate-500 mb-8">
        Welcome, please enter your details
      </p>
      {children}
    </div>
  );
}
