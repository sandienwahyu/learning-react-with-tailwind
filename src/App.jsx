import "./App.css";

function Button({ color, colorHover, children = "Button" }) {
  return (
    <button
      className={`border-purple-200 ${color} text-purple-600 hover:border-transparent hover:${colorHover} hover:text-white active:bg-purple-700 rounded-4xl px-2 py-1`}
    >
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div className="flex justify-center items-center bg-blue-600 min-h-screen gap-2">
      <Button color={"bg-white"} colorHover={"bg-purple-600"}>
        Message
      </Button>
      <Button
        color={"bg-black"}
        colorHover={"bg-slate-600"}
        children={"Submit"}
      />
      <Button color={"bg-slate-600"} colorHover={"bg-white"} />
    </div>
  );
}
