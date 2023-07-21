import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import type { DropEvent } from "@mirohq/websdk-types";

const { board } = miro;

function App() {
  const images = [
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689372606/ui-images/Status_kgn1aj.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689879072/image_lqpraq.jpg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689636252/Symptom_j894tf.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689636431/Immunization_yz8qqs.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689636431/Insurance_bb1qgu.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689636431/Medications_mfnl1h.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689636431/Disabilities_jzkeom.png",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689636430/Tobacco_nzadim.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689636429/Test_Result_svao6m.svg" ,
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689636429/Transportation_y9e5jt.svg" ,
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689636429/Economic_acu2gh.svg",
    "https://res.cloudinary.com/dp6w2kgzd/image/upload/v1689636429/Health_Literacy_cqcylp.svg"


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
