import "./App.css";
import BlueBackgorund from "./assets/blue-background.avif";

// router
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${BlueBackgorund})` }}
    >
      <div className="min-w-[50%] min-h-[300px] bg-neutral-200 rounded-2xl p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
