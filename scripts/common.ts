import path from "path";

const projectRoot = path.resolve(path.dirname(__dirname));
const serverRoot = path.join(projectRoot, "src", "server");
const testRoot = path.join(projectRoot, "test");

export default {
  projectRoot,
  serverRoot,
  testRoot,
};
