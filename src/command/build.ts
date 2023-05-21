/*
 * @Author: sfy
 * @Date: 2023-05-21 13:25:02
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-21 14:04:08
 * @FilePath: /sc-cli/src/command/build.ts
 * @Description: update here
 */

import WebpackService from "../service/WebpackService"
import { BuildProps } from "./type";

export = async function ({
  args
}: BuildProps) {
  console.log('arg: ', args);
  const command = "build"
  const service = new WebpackService()
  console.log('service: ', service);
}