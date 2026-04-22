export default function Button({
  type = "button",
  classname,
  children = "Button",
  onClick,
}) {
  return (
    <button
      type={type}
      className={`border-purple-200 ${classname} hover:border-transparent text-white active:bg-purple-700 rounded-md px-2 py-1 cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
