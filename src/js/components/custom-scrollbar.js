import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.

// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from "resize-observer-polyfill";
window.ResizeObserver = ResizeObserver;
