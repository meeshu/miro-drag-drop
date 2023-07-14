import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import type { DropEvent } from "@mirohq/websdk-types";

const { board } = miro;

function App() {
  const images = [
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689317014/ui-images/age_xrisun.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689317014/ui-images/dob_pvekdd.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689317014/ui-images/gender_qktqla.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689317014/ui-images/name_wrbuck.svg",
  ];

  const drop = async (e: DropEvent) => {
    const { x, y, target } = e;

    if (target instanceof HTMLImageElement) {
      const image = await board.createImage({ x, y, url: target.src });
      await board.viewport.zoomTo(image);
    }
  };

  // Register the drop event handler once.
  useEffect(() => {
    board.ui.on("drop", drop);
  });

  return (
    <div className="main">
      {images.map((image, index) => {
        return (
          <img
            src={image}
            draggable={false}
            className="miro-draggable draggable-item"
            key={index}
          />
        );
      })}
    </div>
  );
}

// Render App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
