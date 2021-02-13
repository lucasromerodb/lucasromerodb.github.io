import React from "react";

const Pattern = ({ width = 100, height = 100, colorName = "blue600" }) => (
  <svg width={`${width}px`} height={`${height}px`}>
    <defs>
      <pattern
        id={`${colorName}`}
        width="15"
        height="15"
        viewBox="0 0 30,30"
        patternUnits="userSpaceOnUse"
      >
        <rect id="pattern-background" width="100%" height="100%" fill="rgba(0, 0, 0, 0)" />
        <rect fill={`var(--${colorName})`} width="10" height="10" />
      </pattern>
    </defs>
    <rect fill={`url(#${colorName})`} height="100%" width="100%" />
  </svg>
);

export default Pattern;
