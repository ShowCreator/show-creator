import { runBuild } from "../service/wpk-build";
import { BuildProps } from "./type";



export = async function ({
  args
}: BuildProps) {
  const command = "build"
  runBuild()
}