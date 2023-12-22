import TenoxUI, {
  MakeProp,
  MakeStyle,
  MultiProps,
  MultiStyles,
} from "https://cdn.jsdelivr.net/npm/tenoxui@0.4.0/dist/js/tenoxui.esm.min.js";
MultiProps({
  fxw: ["flexWrap"],
  tr: ["transition"],
  scroll: ["scrollBehavior"],
  bdra: ["border"],
  outln: ["outline"],
});
const docsStyles = {
  ".sidebar":
    "post-fixed h-100% t-0 l--100% bg-[sub-light] overX-hidden tr-0.5s w-200px z-10 display-flex ai-center fd-[col] jc-[sb]",
  "#search-input":
    "w-100% p-8px fs-1em fw-500 bg-[light] bdra-none tc-[dark] outln-none tr-0.5s br-5px",
  ".category-label": "fs-1.6rem ph-1rem",
  "#sidebar-links": "display-flex flex-parent-[flex-start] fd-[col] gap-1rem",
  ".docs-links":
    "pv-8px ph-25px td-none display-block tr-0.3s fw-500 tc-[sub-dark]",
  // Docs Navigator
  ".pn-docs":
    "fx-0 p-2rem bg-[sub-light] display-flex flex-parent-center fd-[col] tr-0.3s",
};
MultiStyles(docsStyles);
TenoxUI();
