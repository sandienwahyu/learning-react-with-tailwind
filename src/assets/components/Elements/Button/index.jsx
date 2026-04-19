export default function Button({ classname, children = "Button" }) {
  return (
    <button
      className={`border-purple-200 ${classname} hover:border-transparent text-white active:bg-purple-700 rounded-md px-2 py-1 cursor-pointer`}
    >
      {children}
    </button>
  );
}
