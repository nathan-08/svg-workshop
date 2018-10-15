import React from "react";
import './gear.css';

export default ({ customSVGStyles, customPathStyles }) => (
  <svg class="gear--svg" width="120"  viewBox="0 0 150 150" version="1" style={customSVGStyles}>
    <path style={customPathStyles}
      d="M131 125c2-3 2-7 0-9l-4-4a63 63 0 0 0 10-27h7a6 6 0 0 0 6-6v-9c0-3-3-6-6-6h-7a63 63 0 0 0-10-26l4-4c2-3 2-7 0-9l-6-6c-3-3-7-3-9 0l-4 4a63 63 0 0 0-27-11V6c0-3-2-6-6-6h-9c-3 0-6 3-6 6v6a63 63 0 0 0-26 11l-4-4c-3-3-7-3-9 0l-6 6c-3 2-3 6 0 9l4 4a63 63 0 0 0-11 26H6c-3 0-6 3-6 6v9c0 4 3 6 6 6h6a63 63 0 0 0 11 27l-4 4c-3 2-3 6 0 9l6 6c2 2 6 2 9 0l4-4a63 63 0 0 0 26 10v7c0 3 3 6 6 6h9a6 6 0 0 0 6-6v-7a63 63 0 0 0 27-10l4 4c2 2 6 2 9 0zM96 96a31 31 0 0 1-43 0 31 31 0 0 1 0-43 31 31 0 0 1 43 0 31 31 0 0 1 0 43z"
      fill="#e05506"
    />
  </svg>
);
