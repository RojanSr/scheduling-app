import cn from "./utils/cn";
function App() {
  const otherClasses = "italic text-2xl";
  const isBlue = false;
  return (
    <h1
      className={cn("text-black text-3xl", otherClasses, {
        "text-blue-500": isBlue
      })}
    >
      Configure Tailwind
    </h1>
  );
}

export default App;
