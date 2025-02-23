import { useContext } from "react";
import "./App.css";
import BlueBackgorund from "./assets/blue-background.avif";

// router
import { Outlet } from "react-router-dom";

import { CountdownContext } from "./context/CountdownContext";

function App() {
  const { event } = useContext(CountdownContext);

  let eventImage = null;

  if (event) eventImage = event.image;

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={
        eventImage
          ? { backgroundImage: `url(${eventImage})` }
          : { backgroundImage: `url(${BlueBackgorund})` }
      }
    >
      <div className="min-w-[50%] min-h-[300px] bg-neutral-200 rounded-2xl p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
