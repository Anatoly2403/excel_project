import "./module";
import "@/scss/index.scss";

console.log("working");

async function start() {
  return await Promise.resolve("asdasd");
}

start().then(console.log);
