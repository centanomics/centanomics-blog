import React from "react"

export default ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="256" cy="256" r="228.5" stroke={color} strokeWidth="43" />
      <path
        d="M307.5 232.82C307.5 179.82 205 157.82 205 258.32C205 358.82 307.5 326.82 307.5 284.32"
        stroke={color}
        strokeWidth="26"
      />
      <line
        x1="291.487"
        y1="162.652"
        x2="213.197"
        y2="355.94"
        stroke={color}
        strokeWidth="26"
        strokeLinecap="round"
      />
    </svg>
  )
}
