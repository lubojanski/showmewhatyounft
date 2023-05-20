"use client";
import { Canvas } from "react-three-fiber";
import Scene from "./Scene";
import { Suspense } from "react";
import ConnectButton from "../ConnectButton";
import HistoryBar from "./HistoryBar";

export default function HomePage() {
  return (
    <div id="root">
      <div className="w-screen h-screen relative">
        <div className="absolute top-0 left-0 bottom-0 right-0 m-auto w-max h-max z-10">
          <ConnectButton />
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: "auto",
          }}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <Canvas>
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <HistoryBar />
      </div>
    </div>
  );
}
