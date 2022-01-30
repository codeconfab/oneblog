import preval from "next-plugin-preval";
import fs from "fs";

async function getCSS() {
  const css = await fs.readFileSync("./src/App.css", {
    encoding: "utf8",
    flag: "r",
  });
  return css;
}

export default preval(getCSS());
