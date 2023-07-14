import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import type { DropEvent } from "@mirohq/websdk-types";

const { board } = miro;

function App() {
  const images = [
    "https://drive.google.com/file/d/1XxCrJlt8lUCNHVl5ulCc3iw9i_6juCPB/view?usp=sharing",
    "https://drive.google.com/file/d/14dbuzlGzDJmMoeEMjsQsFfa7o7KtQQ6E/view?usp=sharing",
    "https://drive.google.com/file/d/1SBpTXzYxFHNg_HGOXdW-fVnM9iZRn9ls/view?usp=sharing",
    "https://drive.google.com/file/d/11QATYWUvdU9qaiaiBdLnN0-t3jG-cYtR/view?usp=sharing",
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
