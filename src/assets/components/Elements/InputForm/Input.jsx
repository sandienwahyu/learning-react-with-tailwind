export default function Input({ type, placeholder, name, ref }) {
  return (
    <input
      type={type}
      className="text-sm border rounded w-full mb-4 py-2 px-3 text-slate-700 placeholder:opacity-50 focus:outline-blue-600"
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
}
