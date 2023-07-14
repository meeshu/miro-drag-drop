import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import type { DropEvent } from "@mirohq/websdk-types";

const { board } = miro;

function App() {
  const images = [
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689372606/ui-images/Status_kgn1aj.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689372606/ui-images/sex_a6alzz.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689372606/ui-images/Occupation_euhpcs.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689372606/ui-images/Race_ymykly.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689372605/ui-images/Income_Level_drrxwl.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689372605/ui-images/Location_c8gqef.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689372605/ui-images/gender_wwxxen.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689372605/ui-images/Education_Level_l38z3m.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689372605/ui-images/Ethnicity_vnuuwk.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689372604/ui-images/dob_kfjazi.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689369738/ui-images/age.svg",



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
