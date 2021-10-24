import React from "react";

export default function Photos() {
  let text = "";
  for (let i = 1; i < 16; i++) {
    // text += `import photo${i}webp from "../../img/${i}.webp";`;
    text += `[photo${i}, photo${i}webp, "zapiekanka"],`;
  }
  return <div>{text}</div>;
}
