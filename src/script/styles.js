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
  "font-style": ["font-style"],
  bdra: ["border"],
  outln: ["outline"],
  bdc: ["borderColor"],
});
MultiStyles({
  html: "scroll-smooth",
  body: "w-100% h-mn-100vh bg-[light] tc-[dark] display-flex flex-parent-center fd-[col]",
  main: "w-100% h-mn-100vh display-flex flex-parent-center fd-[col]",
  section: "w-100% w-mx-1000px p-2rem",
  "section.sec-full": "h-mn-100vh",
  footer: "w-100% p-2rem",
  ".cr-tenox":
    "bs-solid bw-top-1px bw-left-0 bw-right-0 bw-bottom-0 bdc-[sub-light]",
  ".sec-2": "bg-[sub-light]",
  ".fx-wrapper-nofull":
    "w-100% display-flex flex-parent-center fx-wrap-wrap ai-[md-full]",
  ".cl__code":
    " bg-[light-darker-opa] ph-5px fw-600 tc-[dark] br-4px pb-2px lh-2",
  ".cl__code-prim":
    " bg-[light-darker-opa] ph-5px fw-600 tc-[primary] br-4px pb-2px lh-2",
  p: "fw-600",
  ".text-para": "ta-justify fs-1rem tc-[sub-text-dark]",
  ".text-note": "ta-justify fs-0.8rem tc-[sub-text-dark] fw-500",
  ".text-note>a": "fs-0.8rem tc-[primary]",
  ".text-feat": "ta-justify fs-1rem tc-[sub-text-dark] fw-500",
  ".hero-sec": "fs-3rem post-relative display-flex flex-parent-[flex-end]",
  ".anchor-links": "tc-[primary]",
  header:
    "post-fixed t-0 r-0 l-0 ph-1rem bg-[light] z-999 display-flex flex-parent-center jc-[sb]",
  "header>.logo>h1": "fs-1.2em fw-700",
  "header>.logo":
    "fs-1rem fw-700 flex-parent-center display-flex gap-2px tc-[dark]",
  "header>.logo>h1>span": "tc-[primary]",
  "#theme":
    "bg-[sub-light] display-flex flex-parent-center tc-[dark] curs-pointer box-1.7em br-5px",
  "nav>ul": "display-flex flex-parent-center",
  "nav>ul>li>a":
    "fw-500 tc-[sub-text-dark] flex-parent-center display-flex post-relative fs-1em tr-time-0.3s",
  ".social": "display-flex flex-parent-center jc-[flex-start] gap-1rem",
  ".footer-links": "fw-500 tc-[sub-text-dark] fs-14px",
  ".tl-wrapper":
    "display-flex flex-parent-center ai-[flex-start] fd-[col] gap-10px",
  ".flex-wrapper":
    "w-100% display-flex flex-parent-center fx-wrap-wrap ai-stretch gap-1rem",
  ".fx-wrapper-nofull":
    "w-100% display-flex flex-parent-center fx-wrap-wrap ai-[md-full]",
  ".fx-start-col":
    "display-flex fd-[col] flex-parent-[flex-start] fx-250px gap-8px bg-[sub-light] p-1rem br-8px",
  ".code-separator": "w-full h-2px bg-[prim-opa] br-3px mv-2em",
  ".btn-primary":
    "bg-[primary] fs-1em fw-600 ph-1rem pv-8px br-5rem tc-[fix-light] display-flex flex-parent-center gap-8px td-none",
  ".hero-desc":
    "ta-[md-center-left] tc-[sub-text-dark] hero-desc fw-600 fs-1rem",
  ".fx-ctr": "display-flex flex-parent-center",
  ".w-full": "w-100%",
  ".h-full": "h-100%",
});
MakeProp("maybe-box", ["width", "height"]);
MultiProps({
  dis: ["display"],
  "fx-par": ["justify-content", "align-items"],
  "maybe-box": ["width", "height"],
});
MultiStyles({
  ".this-box": "maybe-box-[box-size] dis-flex fx-par-center br-10px bg-black",
  ".text-title": "tc-[primary] fs-[text-size]",
  ".card-parent":
    "bg-[card-bg] tc-[card-text] p-1rem br-8px dis-flex fx-par-center gap-1rem",
  ".card-image": "br-50% bg-[primary] box-3rem dis-flex fx-par-center",
  ".card-name > p.title": "fs-1rem fw-600",
  ".card-name > p.desc": "fs-14px fw-400",
  ".card-parent > :last-child": "ml-3rem fs-1rem",
});
TenoxUI();
