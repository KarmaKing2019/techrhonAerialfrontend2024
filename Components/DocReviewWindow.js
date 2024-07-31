import React, { Component } from "react";

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools">
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>x</button>
    </div>
  );
};

const DocReviewWindow = () => {
  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={100}
      initialPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <Controls />
          <TransformComponent className="border border-warning">
            <img
              src="https://upcdn.io/FW25bG7/raw/uploads/2024/06/03/Simple Electrician Service Invoice-2nSB.pdf"
              alt="test"
            />
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};

export default DocReviewWindow;
