"use client";

import { useState, type CSSProperties } from "react";

interface CompareSliderProps {
  before: string;
  after: string;
}

export default function CompareSlider({ before, after }: CompareSliderProps) {
  const [pos, setPos] = useState(50);

  return (
    <div
      className="compare"
      style={{ ["--pos" as string]: `${pos}%` } as CSSProperties}
    >
      <img src={before} alt="Original photo" />
      <img src={after} alt="Enhanced by Rez AI" className="after" />
      <span className="tag before">Original</span>
      <span className="tag after">Enhanced</span>
      <div className="handle" aria-hidden="true" />
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare original to enhanced"
      />
    </div>
  );
}
