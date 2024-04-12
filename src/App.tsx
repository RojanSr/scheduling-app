import { Icons } from "@assetsProvider";
import Home from "@pages/Home/Home";
import cn from "@utils/cn";

function App() {
  const otherClasses = "italic text-2xl";
  const isBlue = false;
  return (
    <>
      <h1
        className={cn("text-black text-3xl", otherClasses, {
          "text-blue-500": isBlue
        })}
      >
        Configure Tailwind
      </h1>
      <Home />
      <img src={Icons.BlobIcon} alt="" />
    </>
  );
}

export default App;
